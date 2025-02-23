/* eslint-disable no-unused-vars */
import { FaGithub } from "react-icons/fa6";
import { delay, easeIn, easeInOut, motion } from "framer-motion";
import bannerImg from "../assets/rasel_banner.jpg"
const IntroductionSection = () => {
  return (
    <div id="home">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center p-8 bg-gray-100 min-h-screen gap-5 lg:gap-0">
        {/* Image Section */}
        <motion.img
          src={bannerImg}
          animate={{x: [-50,35,-50]}}
          transition={{duration:15, delay:1, ease: "linear", repeat: Infinity}}
          className="max-w-sm md:h-96 h-72 rounded-b-[40px] rounded-t-[40px] border-l-[6px] border-b-[6px] border-blue-400 shadow-2xl"
        />

        {/* Text Section */}
        <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Hi, I am <span className="text-blue-500">Md Rasel Mahmud</span>
          </h1>          
          <motion.h1 
          animate={{x:[0,50,0], color:['#94e538','#dfa023','#f36254','#94e538']}}
          transition={{ duration: 10, delay: 1, ease: "linear", repeat: Infinity }}
          className="text-5xl font-bold">Full Stack Developer</motion.h1>
          <p className="mt-4 text-gray-700 max-w-lg text-lg">
            Passionate about building scalable web applications and creating
            seamless user experiences. I love solving problems and continuously
            learning new technologies.
          </p>
          <div className="mt-5">
            <button className="btn text-white text-lg bg-blue-500">
            <a href="https://drive.google.com/file/d/1ZJ3M-enjAjg8iMaQD6IpfGlMfhr-cA1W/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-3">Resume</a>
            </button>
            <button className="btn text-black text-lg bg-blue-300 ml-5"><a href="https://github.com/raselm282" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-3"><FaGithub/> Github</a></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionSection;
