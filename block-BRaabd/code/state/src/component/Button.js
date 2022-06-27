import React from "react";

let ButtonArr = ["basketball", "tiger", "cricket", "laptop", "phone", "pubg"];

class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      image: "basketball",
    };
  }
  handleClick = (item) => {
    this.setState({ image: item });
  };
  render() {
    return (
      <div className="container">
        <>
          {ButtonArr.map((item) => {
            return (
              <>
                <button
                  className={item === this.state.image ? "active" : "btn"}
                  onClick={() => this.handleClick(item)}
                >
                  {item}
                </button>
              </>
            );
          })}
          <div className="img-container">
            <img src={`/assets/${this.state.image}.jpg`} />
          </div>
        </>
      </div>
    );
  }
}

export default Button;
