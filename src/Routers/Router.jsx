import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/ProjectDetails";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children: [
        {
            path: "/",
            element: <Home/>,            
        },
        {
          path: "projects",
          element: <Projects/>
        },
        {
          path: "projects/:id",
          element:<ProjectDetails/>
        }
      ]
    },
  ]);