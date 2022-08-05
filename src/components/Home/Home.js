import Header from "../Header/Header";
import About from "../About/About";
import Products from "../Products/Products";

const Home = ({ items, fetchError }) => {
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
};

export default Home;
