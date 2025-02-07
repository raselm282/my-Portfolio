import { motion } from "framer-motion";
import logo from "../assets/rasel_banner.jpg"

const AnimationAbout = () => {
  return (
    <div id="about" className="bg-gray-100 py-12  md:px-20">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content (Animate from Left) */}
        <motion.div 
          className="lg:w-1/2 w-full text-center md:text-left bg-amber-100"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hi, I am <span className="font-semibold text-blue-500">[Your Name]</span>, a passionate **Full-Stack Developer** with expertise in **React, Node.js, and MongoDB**.  
            My journey started with curiosity about how websites work, and since then, I have been building web applications that are **fast, scalable, and user-friendly**.  
            <br /><br />
            I enjoy working on **challenging projects**, especially those that solve real-world problems. **Clean code, performance optimization, and UI/UX design** are my key focus areas.
            <br /><br />
            Outside of coding, I love **playing football, traveling, and photography**. Exploring new places and capturing moments gives me inspiration for creative solutions in my projects.
          </p>
        </motion.div>

        {/* Image (Animate from Right) */}
        <motion.div 
          className="lg:w-1/2 mt-6 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img 
            src={logo} 
            alt="About Me" 
            className="rounded-lg shadow-lg w-80 lg:w-96"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimationAbout;
