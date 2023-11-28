// src/App.js
import React from "react";
// import Product from "./product";
import ShoppingCart from "./ShoppingCart";

// const products = [
//   { id: 1, name: "Product 1", description: "Description 1" },
//   { id: 2, name: "Product 2", description: "Description 2" },
//   { id: 3, name: "Product 3", description: "Description 3" },
// ];

function Home() {
  return (
    <div className="App">
      <h1>Favorite Products</h1>
      <ShoppingCart />
      {/* <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button>Dark mode</button> */}

      {/* <h2>Favorites:</h2> */}
      {/* <ul>
        {favorites.map((favProduct) => (
          <li key={favProduct.id}>{favProduct.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
