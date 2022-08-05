import React from "react";
import { Outlet } from "react-router-dom";

const ProductsContainer = () => {
   return (
      <div>
         <Outlet />
      </div>
   );
};

export default ProductsContainer;
