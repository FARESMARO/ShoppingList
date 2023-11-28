// ShoppingCart.js
import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Available Items</h3>
        <button onClick={() => addToCart({ name: "Item 1", price: 10 })}>
          Add Item 1 to Cart
        </button>
        <button onClick={() => addToCart({ name: "Item 2", price: 20 })}>
          Add Item 2 to Cart
        </button>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default ShoppingCart;
