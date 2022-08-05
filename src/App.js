import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import AllProducts from "./routes/AllProducts";
import SingleProduct from "./routes/SingleProduct";

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
            <Route
               path="/"
               element={<Home items={items} fetchError={fetchError} />}
            />
            <Route element={<Navbar />}>
               <Route path="products" element={<AllProducts items={items} />} />
               <Route
                  path=":invoiceId"
                  element={<SingleProduct items={items} />}
               />
            </Route>
            <Route
               path="*"
               element={
                  <main style={{ padding: "1rem" }}>
                     <p>There's nothing here! </p>
                     <Link to="/">Go back to homepage</Link>
                  </main>
               }
            />
         </Routes>
      </>
   );
}

export default App;
