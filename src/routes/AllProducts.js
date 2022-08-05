import React from "react";
import Products from "../components/Products/Products";

const AllProducts = ({ items }) => {
   return (
      <div>
         <Products items={items} />
      </div>
   );
};

export default AllProducts;
