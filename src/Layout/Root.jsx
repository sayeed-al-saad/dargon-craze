import { Outlet } from "react-router-dom";
import Nabbar from "../Pages/Shared/Navbar/Nabbar";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 font-Poppins">
      <Nabbar></Nabbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
