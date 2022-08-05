import React from "react";
import Image from "../Image/Image";
import "./card.scss";

const Card = ({ items }) => {
   return (
      <>
         {items.map(item => (
            <section className="card">
               <Image url={item.img_url} />
               <h1>{item.title}</h1>
               <p>{item.paragraph}</p>
            </section>
         ))}
      </>
   );
};

export default Card;
