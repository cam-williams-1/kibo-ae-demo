import { addToCart, removeFromCart } from "../utils/cart";

describe("Cart Utilities", () => {
  test("addToCart adds a new item to the cart", () => {
    const cart = [];
    const item = { id: 1, name: "Item 1", price: 10 };

    const updatedCart = addToCart(cart, item);

    expect(updatedCart).toEqual([
      { id: 1, name: "Item 1", price: 10, quantity: 1 },
    ]);
  });

  test("addToCart increments quantity for an existing item", () => {
    const cart = [{ id: 1, name: "Item 1", price: 10, quantity: 1 }];
    const item = { id: 1, name: "Item 1", price: 10 };

    const updatedCart = addToCart(cart, item);

    expect(updatedCart).toEqual([
      { id: 1, name: "Item 1", price: 10, quantity: 2 },
    ]);
  });

  test("removeFromCart decreases quantity for an existing item", () => {
    const cart = [{ id: 1, name: "Item 1", price: 10, quantity: 2 }];
    const itemId = 1;

    const updatedCart = removeFromCart(cart, itemId);

    expect(updatedCart).toEqual([
      { id: 1, name: "Item 1", price: 10, quantity: 1 },
    ]);
  });

  test("removeFromCart removes an item when quantity reaches 0", () => {
    const cart = [{ id: 1, name: "Item 1", price: 10, quantity: 1 }];
    const itemId = 1;

    const updatedCart = removeFromCart(cart, itemId);

    expect(updatedCart).toEqual([]);
  });
});
