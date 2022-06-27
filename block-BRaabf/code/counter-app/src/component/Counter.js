import React from "react";

const intialState = {
  counter: 0,
  steps: 0,
  maxValue: 15,
};

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = intialState;
  }
  handleIncrement = () => {
    if (this.state.counter < this.state.maxValue) {
      if (this.state.steps) {
        this.setState({ counter: this.state.counter + this.state.steps });
      } else {
        this.setState({ counter: this.state.counter + 1 });
      }
    }
  };
  handleDecrement = () => {
    if (this.state.steps) {
      this.setState({ counter: this.state.counter - this.state.steps });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  handleReset = () => {
    this.setState(intialState);
  };

  handleSteps = (step) => {
    this.setState({ steps: step });
  };

  handleMaxValue = (maxValue) => {
    this.setState({ maxValue: maxValue });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>{this.state.counter}</h1>
          <div className="flex">
            <div className="steps">
              <h2>Steps</h2>
              <button
                className="btn-primary"
                onClick={() => this.handleSteps(5)}
              >
                5
              </button>
              <button
                className="btn-primary"
                onClick={() => this.handleSteps(10)}
              >
                10
              </button>
              <button
                className="btn-primary"
                onClick={() => this.handleSteps(15)}
              >
                15
              </button>
            </div>
            <div className="max-value">
              <h2>Max value</h2>
              <button
                className="btn-primary"
                onClick={() => this.handleMaxValue(15)}
              >
                15
              </button>
              <button
                className="btn-primary"
                onClick={() => this.handleMaxValue(100)}
              >
                100
              </button>
              <button
                className="btn-primary"
                onClick={() => this.handleMaxValue(200)}
              >
                200
              </button>
            </div>
          </div>
          <div className="flex">
            <button className="btn" onClick={() => this.handleIncrement()}>
              Increment
            </button>
            <button className="btn" onClick={() => this.handleDecrement()}>
              Decrement
            </button>
            <button className="btn" onClick={() => this.handleReset()}>
              Reset
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
