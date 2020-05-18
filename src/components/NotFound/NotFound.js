import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";
import PageNotFound from "../../assets/images/404.jpg";

import "./NotFound.css";

function NotFound() {
  return (
    <Aux>
      <img src={PageNotFound} alt="404 Error" width="100%" height="100%" />
      <Link
        to="/"
        className="backLink"
        style={{
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        Go to Home
      </Link>
    </Aux>
  );
}

export default NotFound;
