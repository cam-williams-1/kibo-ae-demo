import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import CartModal from "../CartModal/CartModal";
import Footer from "../Footer/Footer";
import { getItems } from "../../utils/api";
import { addToCart, removeFromCart } from "../../utils/cart";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalActive, setIsCartModalActive] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => addToCart(prevCartItems, item));
    setIsCartModalActive(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCartItems) => removeFromCart(prevCartItems, id));
  };

  const toggleCartModal = () => {
    setIsCartModalActive((prev) => !prev);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();

        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header toggleCartModal={toggleCartModal} />
        <main>
          <ItemList items={items} addToCart={handleAddToCart} />
          {isCartModalActive && (
            <CartModal
              cartItems={cartItems}
              onClose={toggleCartModal}
              removeFromCart={handleRemoveFromCart}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
