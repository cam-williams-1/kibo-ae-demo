import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import CartModal from "../CartModal/CartModal";
import Footer from "../Footer/Footer";
import { getItems } from "../../utils/api";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // since there is only one modal, i used state. If there were multiple i would use a generic activemodal.
  const [isCartModalActive, setIsCartModalActive] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
    setIsCartModalActive(true);
  };

  const toggleCartModal = () => {
    setIsCartModalActive((prev) => !prev);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      return prevCartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
    });
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
          <ItemList items={items} addToCart={addToCart} />
          {isCartModalActive && (
            <CartModal
              cartItems={cartItems}
              onClose={toggleCartModal}
              removeFromCart={removeFromCart}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
