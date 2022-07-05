import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      errors: {
        address: "",
      },

      checked: false,
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "address":
        errors.address =
          value.length < 8 ? "Address cannot be less than 8 characters" : "";

        break;

      default:
        break;
    }
    this.setState({
      shipping: { errors, [name]: value },
    });
  };
  handleCheck = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  render() {
    let { address } = this.state.errors;
    return (
      <>
        <header>
          <h1>📑 Learning About Forms</h1>
          <p>Controlled vs Uncontrolled Component</p>
        </header>
        <h2>Controlled Component</h2>
        <form className="container flex">
          <div className="box">
            <h3>Shipping Address</h3>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              placeholder="Enter Your Shipping Address"
              onChange={this.handleInput}
            />
            <span className="error">{address}</span>
            <label htmlFor="Zip">ZIP/Postal Code</label>
            <input
              id="zip"
              name="zip"
              placeholder="eg: 176057"
              onChange={this.handleInput}
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              placeholder="eg: New Delhi"
              onChange={this.handleInput}
            />
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              placeholder="eg: India"
              onChange={this.handleInput}
            />
          </div>
          <div className="box">
            <h3>Billing Address</h3>
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
              onChange={this.handleCheck}
            />
            <span>Same as Shipping Address?</span>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              placeholder="Enter Your Shipping Address"
              type="text"
              onChange={this.handleInput}
              value={
                this.state.checked
                  ? this.state.shipping.address
                  : this.state.billing.address
              }
            />
            <label htmlFor="Zip">ZIP/Postal Code</label>
            <input
              id="zip"
              name="zip"
              placeholder="eg: 176057"
              type="number"
              onChange={this.handleInput}
              value={
                this.state.checked
                  ? this.state.shipping.zip
                  : this.state.billing.zip
              }
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              placeholder="eg: New Delhi"
              type="text"
              onChange={this.handleInput}
              value={
                this.state.checked
                  ? this.state.shipping.city
                  : this.state.billing.city
              }
            />
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              placeholder="eg: India"
              type="text"
              onChange={this.handleInput}
              value={
                this.state.checked
                  ? this.state.shipping.country
                  : this.state.billing.country
              }
            />
          </div>
        </form>
      </>
    );
  }
}

export default App;
