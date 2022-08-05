import React from "react";
import "./title.scss";

const Title = ({ title, h6 }) => {
   return <>{!h6 ? <h1>{title}</h1> : <h6>{title}</h6>}</>;
};

export default Title;
