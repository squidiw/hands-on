import { useEffect, useState } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import "./components/Header/header.scss";
import Products from "./components/Products/Products";

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
         <Header
            logo="logo here"
            title="Amazing furniture for amazing people"
            btnText="shop"
         />
         <About />

         {!fetchError && <Products items={items} />}
      </>
   );
}

export default App;
