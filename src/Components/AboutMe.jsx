/* eslint-disable no-unused-vars */
import { delay, easeIn, easeInOut, motion } from "framer-motion";

const AboutMe = () => {
    return (
      <section id="about" className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600 mt-4">
            Hi, I am <span className="text-blue-500 font-semibold">Md Rasel Mahmud</span>, a passionate
            <span className="text-blue-500 font-semibold"> Full Stack Developer</span> with a love for building interactive and scalable web applications.  
            My journey into programming started with curiosity about how websites work, and since then, I have been continuously learning and improving.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
          {/* Programming Journey */}
          <motion.div className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700"><motion.span
            animate={{x:50, color:['#94e538','#dfa023','#f36254','#94e538']}}
            transition={{ duration: 2, delay: 1, ease: "linear", repeat: Infinity }}>My Programming Journey</motion.span></h3>
            <p className="text-gray-600 mt-3">
              I started with HTML, CSS and gradually explored frontend and backend development. 
              Now, I specialize in building <b>React.js and Node.js</b> applications with a focus on performance and user experience.
            </p>
          </motion.div>
  
          {/* Work Passion */}
          <motion.div className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700"><motion.span
            animate={{x:50, color:['#94e538','#dfa023','#f36254','#94e538']}}
            transition={{ duration: 2, delay: 1, ease: "linear", repeat: Infinity }}>What I Enjoy Working On</motion.span></h3>
            <p className="text-gray-600 mt-3">
              I enjoy crafting <b>modern UI/UX designs</b>, <b>developing APIs</b>, and <b>solving real-world problems</b> through code. 
              Seeing a project come to life is what excites me the most!
            </p>
          </motion.div>
  
          {/* Hobbies and Interests */}
          <motion.div className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700"><motion.span
            animate={{x:50, color:['#94e538','#dfa023','#f36254','#94e538']}}
            transition={{ duration: 2, delay: 1, ease: "linear", repeat: Infinity }}>Hobbies & Interests</motion.span></h3>
            <p className="text-gray-600 mt-3">
              When I am not coding, I love playing football, painting, photography.  
              Exploring <b>new technologies</b> and writing tech blogs are also my favorite pastimes.
            </p>
          </motion.div>
  
          {/* Personality */}
          <motion.div className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700"><motion.span
            animate={{x:50, color:['#94e538','#dfa023','#f36254','#94e538']}}
            transition={{ duration: 2, delay: 1, ease: "linear", repeat: Infinity }}>My Personality</motion.span></h3>
            <p className="text-gray-600 mt-3">
              I am a <b>curious learner, problem solver, and team player</b>.  
              I believe in continuous improvement and staying updated with the latest tech trends.
            </p>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  