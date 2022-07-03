import React from "react";
import data from "../data";

class Font extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: "",
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleRange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    let fontFamily = data.map((fonts) => fonts);
    console.log(fontFamily);
    return (
      <>
        <h1>Font Tester</h1>
        <div className="input">
          <input
            placeholder="Type Something"
            type="text"
            onChange={this.handleChange}
          />
          <div className="range">
            <span>{this.state.value}</span>
            <input
              type="range"
              value={this.state.value}
              onChange={(e) => this.handleRange(e)}
            />
          </div>
        </div>
        <div className="fonts">
          {fontFamily.map((font) => {
            console.log(font);
            return (
              <>
                <div className="font">
                  {console.log(font.name)}
                  <div className="flex">
                    <h2 style={font}>{font.name}</h2>
                  </div>
                  <p
                    style={{
                      fontFamily: font["font-family"],
                      fontSize: this.state.value + "px",
                    }}
                  >
                    {this.state.input}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Font;
