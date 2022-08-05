import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
   return (
      <div>
         <Link to="/">Home link</Link>
         <>
            <Outlet />
         </>
      </div>
   );
};

export default Navbar;
