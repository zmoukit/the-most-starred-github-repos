import React from "react";
import "./Avatar.css";

const Avatar = props => (
  <div className={props.cssClass ? props.cssClass : "avatar"}>
    <img src={props.imgSrc} alt={props.altText} />
  </div>
);

export default Avatar;
