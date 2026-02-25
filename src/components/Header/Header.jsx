import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ toggleCartModal }) => {
  return (
    <header className="header">
      <h1 className="header_title">Demo Shopping</h1>
      <div className="header_cart" onClick={toggleCartModal}>
        <FaShoppingCart size={26} />
      </div>
    </header>
  );
};

export default Header;
