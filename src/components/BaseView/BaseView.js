import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const BaseView = () => {
   return (
      <div>
         <Navbar />
         <Outlet />
      </div>
   );
};

export default BaseView;
