import React, { Component } from "react";
import Cart from "./Cart";
import Main from "./Main";
import Size from "./Size";
import { products } from "../data.json";

export class App extends Component {
  render() {
    return (
      <>
        <h1>Shopping Cart</h1>
        <div className="container">
          <div className="flex justify-content">
            <Size products={products} />
            <Main products={products} />
            {/* <Cart /> */}
          </div>
        </div>
      </>
    );
  }
}

export default App;
