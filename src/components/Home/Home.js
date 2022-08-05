import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Products from "../Products/Products";
import { fetchItems } from "../apiRequest/apiRequest";

const Home = () => {
   const [items, setItems] = useState([]);
   const [fetchError, setFetchError] = useState(null);

   useEffect(() => {
      fetchItems().then(response => {
         console.log(response);
      });
   }, []);
   return (
      <>
         <Header
            logo="logo here"
            title="Amazing furniture for amazing people"
            btnText="shop"
         />
         <About />

         {!fetchError && <Products />}
      </>
   );
};

export default Home;
