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
    });
  };
  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };
  render() {
    return <>.</>;
  }
}

// function ClosedCart() {}

export default Cart;
