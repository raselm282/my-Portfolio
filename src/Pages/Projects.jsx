import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const projects = [
  
//   {
//     id: 1,
//     name: "Newspaper FullStack Website",
//     image: "/images/newspaper.jpg", // Replace with actual image
//     description: "A full-stack newspaper website with CRUD operations, user authentication, and an admin dashboard.",
//     techStack: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
//     liveLink: "https://newspaperproject.com", // Replace with your live project link
//     githubLink: "https://github.com/user/newspaper-client", // Replace with your GitHub client repo link
//   },
//   {
//     id: 2,
//     name: "Marathon Management System",
//     image: "/images/marathon.jpg", // Replace with actual image
//     description: "A platform for managing marathon events.",
//     techStack: ["React", "Node.js", "MongoDB"],
//     liveLink: "https://marathon.com",
//     githubLink: "https://github.com/user/marathon-client",
//   },
//   {
//     id: 3,
//     name: "Crowedcube",
//     image: "/images/crowedcube.jpg",
//     description: "A newspaper full-stack website with authentication.",
//     techStack: ["React", "Firebase", "Express.js"],
//     liveLink: "https://crowedcube.com",
//     githubLink: "https://github.com/user/crowedcube-client",
//   },
//   {
//     id: 4,
//     name: "Donate For Winter",
//     image: "/images/donate.jpg",
//     description: "A donation platform built for charity campaigns.",
//     techStack: ["React", "Redux", "Tailwind CSS"],
//     liveLink: "https://donateforwinter.com",
//     githubLink: "https://github.com/user/donate-client",
//   },
  
// ];

const Projects = () => {
     const [projects, setProjects] = useState()
    //   console.log(id);
      useEffect(()=>{
        fetch("/Projects.json")
        .then(res=>res.json())    
        .then(data =>{
            
            setProjects(data)
        })
      },[])
  return (
    <section id="projects" className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <p className="text-lg text-gray-600 mt-4">
          Some of my best work in web development.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-3 gap-6">
        {projects && projects?.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-6 transition hover:scale-105">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-2xl font-semibold text-gray-700 mt-4">
              {project.name}
            </h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">
              See Details
              </Link>
              <a
                href={project?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
