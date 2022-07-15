import React from "react";

import Product from "./Product";

function Main(props) {
  return (
    <>
      <main className="main ">
        <Product
          data={props.products}
          selectedSizes={props.selectedSizes}
          handleCart={props.handleCart}
        />
      </main>
    </>
  );
}

export default Main;
