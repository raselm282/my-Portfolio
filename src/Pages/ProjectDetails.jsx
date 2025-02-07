import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const projectData = [
//     {
//         id: 1,
//         name: "Newspaper FullStack Website",
//         image: "/images/newspaper.jpg", // Update with actual image
//         description: "A full-stack newspaper platform providing trending news, article management, and secure user authentication.",
//         techStack: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express", "MongoDB"],
//         liveLink: "https://newspaperproject.com", // Replace with actual live link
//         githubLink: "https://github.com/user/newspaper-client", // Replace with actual GitHub repo link
//         challenges: [
//           "Real-time updates for articles.",
//           "Implementing secure JWT authentication with role-based access control.",
//           "Handling pagination for large datasets.",
//           "Ensuring a fully responsive design across all devices.",
//         ],
//         futurePlans: [
//           "Adding an AI-based article recommendation system.",
//           "Implementing a dark mode for better user experience.",
//           "Improving SEO for better search visibility.",
//           "Enhancing the admin dashboard with analytics and insights.",
//         ],
//       },
//   {
//     id: 2,
//     name: "Marathon Management System",
//     image: "/images/marathon.jpg",
//     description: "A platform for managing marathon events efficiently.",
//     techStack: ["React", "Node.js", "MongoDB"],
//     liveLink: "https://marathon.com",
//     githubLink: "https://github.com/user/marathon-client",
//     challenges: "Integrating real-time tracking for runners was challenging.",
//     improvements: "Adding AI-based predictions for race completion times.",
//   },
//   {
//     id: 3,
//     name: "Crowedcube",
//     image: "/images/crowedcube.jpg",
//     description: "A full-stack newspaper website with authentication.",
//     techStack: ["React", "Firebase", "Express.js"],
//     liveLink: "https://crowedcube.com",
//     githubLink: "https://github.com/user/crowedcube-client",
//     challenges: "Optimizing database queries for faster article loading.",
//     improvements: "Implementing a recommendation system for articles.",
//   },
//   {
//     id: 4,
//     name: "Donate For Winter",
//     image: "/images/donate.jpg",
//     description: "A donation platform built for charity campaigns.",
//     techStack: ["React", "Redux", "Tailwind CSS"],
//     liveLink: "https://donateforwinter.com",
//     githubLink: "https://github.com/user/donate-client",
//     challenges: "Ensuring secure payment processing for donations.",
//     improvements: "Adding AI-powered fraud detection for transactions.",
//   }
// ]


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

//   if (!project) {
//     return <p className="text-center text-red-500">Project not found</p>;
//   }

  return (
    // <div>
    //     details
    // </div>
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
