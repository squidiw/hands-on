import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import AllProducts from "./routes/AllProducts";
import SingleProduct from "./routes/SingleProduct";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import BaseView from "./components/BaseView/BaseView";

function App() {
   const API_URL = "http://localhost:3500/items";

   const [items, setItems] = useState([]);
   const [fetchError, setFetchError] = useState(null);

   useEffect(() => {
      const fetchItems = async () => {
         try {
            const response = await fetch(API_URL);
            if (!response.ok) throw Error("Nothing to show");
            const productItems = await response.json();
            setItems(productItems);
            setFetchError(null);
         } catch (error) {
            setFetchError(error.message);
         }
      };
      setTimeout(() => {
         (async () => await fetchItems())();
      }, 2000);
   }, []);
   return (
      <>
         <Routes>
            <Route path="/" element={<BaseView />}>
               <Route
                  index
                  element={<Home items={items} fetchError={fetchError} />}
               />
               <Route path="products" element={<ProductsContainer />}>
                  <Route index element={<AllProducts items={items} />} />
                  <Route
                     path=":invoiceId"
                     element={<SingleProduct items={items} />}
                  />
               </Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;
