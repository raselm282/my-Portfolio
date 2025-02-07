import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase,  SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Databases", icon: <FaDatabase className="text-gray-600" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
        <p className="text-lg text-gray-600 mt-4">
          Technologies & tools I have experience with:
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 grid lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-700">{category.title}</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-2 transition hover:scale-105">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-gray-700 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
