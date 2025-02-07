import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Social Links", to: "social" },
  ];

  return (
    <div className="w-[90%] fixed  bg-white shadow-md p-4 z-50 mx-auto">
      <div className="flex items-center justify-between">
        <NavLink><h1 className="text-xl font-bold bg-orange-300 p-1 rounded-md">My Portfolio</h1></NavLink>

        <div>
          <ul
            className={`lg:flex absolute lg:static lg:bg-white bg-orange-200  top-16 space-x-4 lg:w-full w-[30%] px-1 lg:px-3 py-3 right-0 lg:flex-row flex-col lg:space-y-0 space-y-3 text-center transition-all duration-900 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {links?.map((item, i) => (
              <li className="lg:bg-white bg-orange-400 flex px-1 underline font-bold py-1 rounded-lg" key={i}>
                <Link
                  to={item?.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <button className="btn text-white text-lg bg-blue-500">
            <a href="https://drive.google.com/file/d/1HrGYwNvuEWm_Cbw98DseAgH8hNxP_kfl/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </button>
          </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// /* eslint-disable no-unused-vars */
// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   //   const homeRef = useRef(null);
//   // const aboutRef = useRef(null);
//   // const projectsRef = useRef(null);
//   // const contactRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   //   const [isOpen, setIsOpen] = useState(false);

//  const links = [
//     { name: "Home", to: "home" },
//     { name: "About", to: "about" },
//     { name: "Projects", to: "projects" },
//     { name: "Contact", to: "contact" },
//     { name: "Skills", to: "skills" },
//     { name: "Contact", to: "contact" },
//     { name: "Contact", to: "contact" },
//   ]
//   // const scrollToSection = (ref) => {
//   //   ref.current?.scrollIntoView({ behavior: "smooth" });
//   // };
//   // const links =
//   // [
//   //           { name: "Home", to: "home" },
//   //           { name: "About", to: "about" },
//   //           { name: "Projects", to: "projects" },
//   //           { name: "Contact", to: "contact" },
//   //         ].map((item) => (
//   //           <li key={item.to}>
//   //             <Link
//   //               to={item.to}
//   //               smooth={true}
//   //               duration={500}
//   //               className="cursor-pointer hover:text-blue-500"
//   //               onClick={() => setIsOpen(false)}
//   //             >
//   //               {item.name}
//   //             </Link>
//   //           </li>
//   //         ))

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links?.map((item,i) => (
//             <li key={i}>
//               <Link
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//         {links?.map((item) => (
//             <li key={item.to}>
//               <Link
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Button</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
