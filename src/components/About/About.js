import React from "react";
import "./about.scss";
import Title from "../Title/Title";
import Image from "../Image/Image";
import Paragraph from "../Paragraph/Paragraph";

const text =
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget urna quis nunc consequat vestibulum id eu dolor. Donec pretium nisl eu elementum euismod. Duis luctus sem eu lectus lacinia pellentesque. Phasellus quis faucibus arcu. Proin maximus ornare erat at.";

const url =
   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80";

const About = () => {
   return (
      <section className="about">
         <span className="about__text">
            <Title title="Crafted Intelligently" />
            <Paragraph text={text} />
         </span>
         <span className="about__img">
            <Image url={url} alt="Image of chair" />
         </span>
      </section>
   );
};

export default About;
