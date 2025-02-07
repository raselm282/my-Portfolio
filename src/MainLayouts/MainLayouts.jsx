import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-292px)] py-7">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
