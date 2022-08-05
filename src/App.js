import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import React, { useEffect, useState } from "react";

import AllProducts from "./routes/AllProducts";
import SingleProduct from "./routes/SingleProduct";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import BaseView from "./components/BaseView/BaseView";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<BaseView />}>
               <Route index element={<Home />} />
               <Route path="products" element={<ProductsContainer />}>
                  <Route index element={<AllProducts />} />
                  <Route path=":invoiceId" element={<SingleProduct />} />
               </Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;
