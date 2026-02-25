import React from "react";
import "./CartModal.css";
import { FaTimes } from "react-icons/fa";

const CartModal = ({ cartItems, onClose, removeFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-modal">
      <button className="cart-modal__close" onClick={onClose}>
        <FaTimes />
      </button>
      <h2 className="cart-modal__title">Your Cart</h2>
      <div className="cart-modal__items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-modal__item">
            <span className="cart-modal__item-name">{item.title}</span>
            <span className="cart-modal__item-price">
              ${item.price.toFixed(2)}
            </span>
            <span className="cart-modal__item-quantity">x{item.quantity}</span>
            <button
              className="cart-modal__remove"
              onClick={() => removeFromCart(item.id)}
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-modal__total">
        <span>Grand Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartModal;
