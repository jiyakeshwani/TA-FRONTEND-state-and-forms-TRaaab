import React from "react";
import data from "../data.json";

class Ques extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeQuestion: "",
    };
  }
  handleClick = (question) => {
    this.setState({
      activeQuestion: question,
    });
  };
  render() {
    let accordion = data.map((ques) => ques);
    console.log(accordion);

    return (
      <>
        <div className="container">
          <div className="ques-container">
            {accordion.map((ques) => {
              return (
                <>
                  {" "}
                  <div
                    className={
                      this.state.activeQuestion === ques.Q ? "active-q" : "q"
                    }
                  >
                    <h1>{ques.Q}</h1>
                    <span onClick={() => this.handleClick(ques.Q)}>
                      {this.state.activeQuestion === ques.Q ? "👆" : "👇"}
                    </span>
                    <h2>
                      {this.state.activeQuestion === ques.Q ? ques.A : ""}
                    </h2>
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

export default Ques;
