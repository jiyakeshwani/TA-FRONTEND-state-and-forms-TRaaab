import React, { Component } from "react";
import Cart from "./Cart";
import Main from "./Main";
import Size from "./Size";
import { products } from "../data.json";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedSizes: [],
      cartItems: [],
    };
  }
  handleLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cartItems));
  };

  handleCart = (pro) => {
    const isPresent = this.state.cartItems.find((p) => p.id === pro.id);

    if (isPresent) {
      this.increment(pro.id);
    } else {
      this.setState(
        (prevState) => ({
          cartItems: prevState.cartItems.concat({ ...pro, quantity: 1 }),
        }),
        this.handleLocalStorage
      );
    }
  };

  increment = (id) => {
    this.setState((prevState) => {
      let updatedQuantity = prevState.cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        } else {
          return p;
        }
      });
      return {
        cartItems: updatedQuantity,
      };
    }, this.handleLocalStorage);
  };
  decrement = (id) => {
    this.setState((prevState) => {
      let updatedQuantity = prevState.cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        } else {
          return p;
        }
      });
      return {
        cartItems: updatedQuantity,
      };
    }, this.handleLocalStorage);
  };
  deleteCartItem = (id) => {
    console.log({ id });
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((p) => {
        return p.id === !id;
      });
      return {
        cartItems: updatedCartItems,
      };
    }, this.handleLocalStorage);
  };
  handleSize = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState(
        (prevState) => ({
          selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
        }),
        this.handleLocalStorage
      );
    } else {
      this.setState(
        (prevState) => ({
          selectedSizes: prevState.selectedSizes.concat(size),
        }),
        this.handleLocalStorage
      );
    }
  };
  render() {
    return (
      <>
        <h1>Shopping Cart</h1>
        <div className="container">
          <div className="flex justify-content">
            <Size
              products={products}
              selectedSizes={this.state.selectedSizes}
              handleSize={this.handleSize}
            />
            <Main
              products={products}
              selectedSizes={this.state.selectedSizes}
              handleCart={this.handleCart}
            />
            <Cart
              cartItems={this.state.cartItems}
              increment={this.increment}
              decrement={this.decrement}
              deleteCartItem={this.deleteCartItem}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
