const Experience = () => {
    const experienceData = [
      {
        title: "Full Stack Developer",
        company: "No Company",
        duration: "2024 - Present",
        description:
          "Developing scalable web applications using React, Node.js, and MongoDB. Working on performance optimization and API integrations.",
      }
    ];
  
    return (
      <section id="experience" className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
          <p className="text-lg text-gray-600 mt-4">
            My professional experience in the industry:
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto mt-8 grid gap-6">
          {experienceData.map((exp, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700">{exp.title}</h3>
              <p className="text-lg text-gray-500">{exp.company}</p>
              <p className="text-gray-600">{exp.duration}</p>
              <p className="mt-3 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;
  