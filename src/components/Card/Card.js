import React from "react";
import { Link, Outlet } from "react-router-dom";
import Image from "../Image/Image";
import "./card.scss";

const Card = ({ items }) => {
   return (
      <>
         {items.map(item => (
            <section className="card">
               <Link to={`/product/${item.id}`} key={item.id}>
                  <Image url={item.img_url} />
                  <h1>{item.title}</h1>
                  <p>{item.paragraph}</p>
               </Link>
            </section>
         ))}
         <Outlet />
      </>
   );
};

export default Card;
