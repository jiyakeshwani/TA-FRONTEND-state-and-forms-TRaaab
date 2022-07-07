import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "",
    };
  }
  handleOrderBy = (e) => {
    this.setState({
      selectedFilter: e.target.value,
    });
  };

  handleFilterUI = (filter, products) => {
    let filteredProducts = [...products];
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
      this.props.data
    );
    return (
      <>
        <div className="products">
          <div className="filter flex justify-content">
            <span>{`${this.props.data.length} Product${
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
              console.log(product);
              return (
                <>
                  <div className="product">
                    <div className="tag">Free Shipping</div>
                    <img
                      className="product-img"
                      src={`/static/products/${product.sku}_1.jpg`}
                      alt={this.props.data.title}
                    />
                    <h3>{product.title}</h3>
                    <hr className="line" />
                    <span className="product-price">${product.price}</span>
                    <button className="btn1">Add to cart</button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Product;
