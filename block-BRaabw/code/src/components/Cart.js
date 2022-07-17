import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
  }
  handleClose = () => {
    this.setState({
      isOpen: false,
    } ,  this.handleLocalStorage);
  };
  handleOpen = () => {
    this.setState({
      isOpen: true,
    },  this.handleLocalStorage);
  };

  render() {
    let { isOpen } = this.state;
    let totalBill = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.price * cv.quantity;
      return acc;
    }, 0);
    if (!isOpen) {
      return (
        <ClosedCart
          cartItems={this.props.cartItems}
          open={() => this.handleOpen()}
        />
      );
    }

    return (
      <>
        <aside className="cart">
          <div className="cart-data">
            <button onClick={() => this.handleClose()} className="close-btn">
              X
            </button>
            <div className="cart-heading">
              <img src="/static/bag-icon.png" alt="img" />
              <span className="head">Cart</span>
            </div>
            {this.props.cartItems.map((item) => {
              console.log(item);
              return (
                <CartItem
                  {...item}
                  increment={this.props.increment}
                  decrement={this.props.decrement}
                  deleteCartItem={() =>
                    this.props.deleteCartItem(this.props.id)
                  }
                />
              );
            })}

            <div className="cart-checkout">
              <div className="flex justify-content">
                <span className="total">subtotal</span>
                <span className="bill">${totalBill}</span>
              </div>
              <button
                onClick={() => {
                  alert(`Your total amount is ${totalBill}`);
                }}
                className="checkout-btn"
              >
                checkout
              </button>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

function ClosedCart(props) {
  return (
    <>
      <div onClick={props.open} className="cart-button">
        <button className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="cart-count">
            <div>
              {props.cartItems.reduce((acc, cv) => {
                acc = acc + cv.quantity;
                return acc;
              }, 0)}
            </div>
          </div>
        </button>
      </div>
      ;
    </>
  );
}

export default Cart;
