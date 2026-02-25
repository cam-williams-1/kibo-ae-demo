import React from "react";
import "./ItemList.css";

const ItemList = ({ items, addToCart }) => {
  return (
    <section className="itemlist">
      {items.map((item) => (
        <div key={item.id} className="itemlist__box">
          <img src={item.image} alt={item.title} className="itemlist__image" />
          <h3 className="itemlist__title">{item.title}</h3>
          <p className="itemlist__price">${item.price.toFixed(2)}</p>
          <button className="itemlist__button" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default ItemList;
