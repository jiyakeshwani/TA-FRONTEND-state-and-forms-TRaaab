import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
  }
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length > 3 ? "" : "Username must be at least 3 characters";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "email not valid";
        break;
      case "password":
        errors.password =
          value.length > 6 ? "" : "password must be at least 6 characters";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handleSubmit = () => {
    alert("Thank you for Registering 🙏");
  };
  render() {
    let { email, username, password } = this.state.errors;
    return (
      <>
        <div className="box">
          <h1>Register With Us</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              onChange={this.handleInput}
              value={this.state.username}
            />
            <span className="error">{username}</span>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              onChange={this.handleInput}
              value={this.state.email}
            />
            <span className="error">{email}</span>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={this.handleInput}
              value={this.state.password}
            />
            <span className="error">{password}</span>
            <label htmlFor="confirm password">Confirm Password</label>
            <input
              type="password"
              id="confirm password"
              name="confirm password"
              placeholder="Enter Password Again"
            />
            <input className="submit" type="submit" value="submit" />
          </form>
        </div>
      </>
    );
  }
}

export default Validation;
