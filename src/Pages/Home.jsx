import { Helmet } from "react-helmet-async";
import AboutMe from "../Components/AboutMe";
import ContactInfo from "../Components/ContactInfo";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import IntroductionSection from "../Components/IntroductionSection";
import Skills from "../Components/Skills";
import SocialLinks from "../Components/SocialLinks";
import Projects from "./Projects";
// import AnimationAbout from "../Components/AnimationAbout";

const Home = () => {
  return (
    <div className="mt-[22px]">
      <Helmet>
        <title>Portfolio || Home</title>
      </Helmet>
      <IntroductionSection />
      <AboutMe />
      <SocialLinks />
      <Skills />
      <Education />
      <Experience />
      {/* <AnimationAbout/> */}
      <Projects />
      <ContactInfo />
    </div>
  );
};

export default Home;
// import React, { useRef } from "react";

// const PortfolioNavbar = () => {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div className="navbar bg-base-200 shadow-md fixed w-full z-50">
//         <div className="flex-1">
//           <a className="btn btn-ghost text-xl">My Portfolio</a>
//         </div>
//         <div className="flex-none">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <button onClick={() => scrollToSection(homeRef)}>Home</button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection(aboutRef)}>About</button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection(contactRef)}>Contact</button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Sections */}
//       <div ref={homeRef} className="h-screen flex items-center justify-center bg-gray-100">
//         <h1 className="text-5xl">Home Section</h1>
//       </div>
//       <div ref={aboutRef} className="h-screen flex items-center justify-center bg-gray-200">
//         <h1 className="text-5xl">About Section</h1>
//       </div>
//       <div ref={projectsRef} className="h-screen flex items-center justify-center bg-gray-300">
//         <h1 className="text-5xl">Projects Section</h1>
//       </div>
//       <div ref={contactRef} className="h-screen flex items-center justify-center bg-gray-400">
//         <h1 className="text-5xl">Contact Section</h1>
//       </div>
//     </div>
//   );
// };

// export default PortfolioNavbar;
