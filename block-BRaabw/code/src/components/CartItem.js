import React from "react";

function CartItem(props) {
  console.log(props.id);
  return (
    <>
      <div className="cart-item">
        <img src={`/static/products/${props.sku}_2.jpg`} alt="img" />
        <div className="details">
          <p className="title">{props.title}</p>
          <p>
            {props.availableSizes[0]}| {props.style}
          </p>
          <p>Quantity:{props.quantity}</p>
        </div>
        <div className="price">
          <div className="cross" onClick={props.deleteCartItem}>
            X
          </div>
          <div className="money">${props.price}</div>
        </div>
        <Increment increment={() => props.increment(props.id)} />
        <Decrement decrement={() => props.decrement(props.id)} />
      </div>
    </>
  );
}

function Increment(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="plus-icon"
        onClick={props.increment}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </>
  );
}
function Decrement(props) {
  return (
    <>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="plus-icon"
        onClick={props.decrement}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 12H6"
        />
      </svg>
    </>
  );
}

export default CartItem;
