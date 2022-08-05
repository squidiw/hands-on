import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "./products.scss";

const Products = ({ items }) => {
   return (
      <div className="products">
         <span className="products__text">
            <Title title="Strong &amp; functional" />
            <Link to="/products">
               <Button btnText="view products" />
            </Link>
         </span>
         {items.length ? (
            <span className="products__list">
               <Card items={items} />
            </span>
         ) : (
            <p>No products</p>
         )}
      </div>
   );
};

export default Products;
