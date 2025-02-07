const Education = () => {
    const educationData = [
      {
        degree: "Bachelor of Social Science",
        institution: "Micle Modhusudon Datto collage, Jashore",
        year: "2022 - cont...",
        description:
          "Focused on software development, data structures, and web technologies. Worked on multiple projects involving React, Node.js, and databases.",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Jashore City College",
        year: "2016 - 2018",
        description:
          "Studied arts with computer fundamentals & ICT.",
      },
    ];
  
    return (
      <section id="education" className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
          <p className="text-lg text-gray-600 mt-4">
            My academic qualifications and learning journey:
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto mt-8 grid gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700">{edu.degree}</h3>
              <p className="text-lg text-gray-500">{edu.institution}</p>
              <p className="text-gray-600">{edu.year}</p>
              <p className="mt-3 text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Education;
  