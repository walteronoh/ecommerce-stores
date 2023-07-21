import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const NavigationBar = () => {
  return (
    <div className="topNav">
      <div className="logo">jamdown-Technologies</div>
      <div className="right-panel">
        <Link to="/">
          <span>J</span>
          <span>D</span>stores
        </Link>
        <Link to={"/cart"}>
          <ShoppingCart size={30} />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
