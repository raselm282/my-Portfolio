import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState()
  console.log(id);
  useEffect(()=>{
    fetch("/PortfolioDetails.json")
    .then(res=>res.json())    
    .then(data =>{
        const filterData = data.filter(item =>item.id == id)
        console.log(filterData);
        setProjects(filterData)
    })
  },[id])



  return (
   
    <>
        <h2 className="text-5xl text-center font-bold">Details</h2>
    {projects && projects?.map((project)=><div key={project.id} className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-gray-800">{project.name}</h2>
      <img
        src={project?.image}
        alt={project?.name}
        className="w-full h-96 rounded-lg mt-4"
      />
      <p className="text-lg text-gray-600 mt-4">{project?.description}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Tech Stack:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Challenges Faced:</h3>
        <p className="text-gray-600">{project.challenges}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Future Improvements:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {project?.challenges?.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="btn btn-accent">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          Live Project
        </a>
        </button>
        <button className="btn btn-accent"><a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub Repo
        </a></button>
      </div>
    </div>)}
    </>
    
  );
};

export default ProjectDetails;
