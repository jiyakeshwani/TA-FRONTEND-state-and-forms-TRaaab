import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "",
    };
  }
  handleOrderBy = (e) => {
    this.setState(
      {
        selectedFilter: e.target.value,
      },
      this.handleLocalStorage
    );
  };

  handleFilterUI = (filter, sizes, products) => {
    let filteredProducts = [...products];
    if (sizes.length > 0) {
      filteredProducts = filteredProducts.filter((p) => {
        for (const size of sizes) {
          if (p.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }

    if (filter === "highest") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (filter === "lowest") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  render() {
    let products = this.handleFilterUI(
      this.state.selectedFilter,
      this.props.selectedSizes,
      this.props.data
    );
    return (
      <>
        <div className="products">
          <div className="filter flex justify-content">
            <span>{`${products.length} Product${
              this.props.data.length > 1 ? "(s)" : ""
            } found`}</span>
            <div className="order-by">
              Order by
              <select
                value={this.state.selectedFilter}
                onChange={this.handleOrderBy}
              >
                <option value="">Select</option>
                <option value="lowest">Lowest to Highest</option>
                <option value="highest">Highest to Lowest</option>
              </select>
            </div>
          </div>
          <div className="flex  wrap">
            {products.map((product) => {
              return (
                <Products {...product} handleCart={this.props.handleCart} />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

function Products(props) {
  return (
    <>
      <>
        <div className="product">
          <div className="tag">Free Shipping</div>
          <img
            className="product-img"
            src={`/static/products/${props.sku}_1.jpg`}
            alt={props.title}
          />
          <h3>{props.title}</h3>
          <hr className="line" />
          <span className="product-price">${props.price}</span>
          <button onClick={() => props.handleCart(props)} className="btn1">
            Add to cart
          </button>
        </div>
      </>
    </>
  );
}

export default Product;
