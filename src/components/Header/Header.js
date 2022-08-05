import React from "react";
import "./header.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Header = ({ logo, title, btnText }) => {
   return (
      <header>
         <div className="header__text-wrapper">
            <span className="logo">{logo}</span>
            <span className="header__text">
               <Title title={title} />
               <Button btnText={btnText} />
            </span>
         </div>
      </header>
   );
};

export default Header;
