import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeStep: 1,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      address: "",
      message: "",
      checkbox: "",
    };
  }
  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstName, lastName } = this.state;
    alert(`Your registration detail: \n 
    Email: ${email} \n 
    firstName: ${firstName} \n
    lastName: ${lastName}`);
  };
  _next = () => {
    let activeStep = this.state.activeStep;
    // If the current step is 1 or 2, then add one on "next" button click
    activeStep = activeStep >= 2 ? 3 : activeStep + 1;
    this.setState({
      activeStep: activeStep,
    });
  };

  _prev() {
    let activeStep = this.state.activeStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    activeStep = activeStep <= 1 ? 1 : activeStep - 1;
    this.setState({
      activeStep: activeStep,
    });
  }
  previousButton = () => {
    let activeStep = this.state.activeStep;

    if (activeStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  };
  nextButton = () => {
    let activeStep = this.state.activeStep;

    if (activeStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  };
  render() {
    return (
      <>
        <form>
          <One  
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Two
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Three
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </>
    );
  }
}

export default App;
