export const addToCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeFromCart = (cartItems, id) => {
  return cartItems
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
};