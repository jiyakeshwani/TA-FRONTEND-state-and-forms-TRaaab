import React from "react";
import data from "../data.json";
import Food from "./Food";

class Tags extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeTag: "All",
    };
  }
  handleClick = (tag) => {
    console.log(tag);
    this.setState({
      activeTag: tag,
    });
  };

  render() {
    let foodItems;
    if (this.state.activeTag === "All") {
      foodItems = data.map((foodItem) => foodItem);
    } else {
      foodItems = data.filter(
        (foodItem) => foodItem.category === this.state.activeTag
      );
      console.log(foodItems);
    }
    console.log(this.state.activeTag);
    return (
      <>
        <ul className="flex tags">
          {["All", "breakfast", "lunch", "shakes"].map((elm) => (
            <li
              key={elm}
              onClick={() => this.handleClick(elm)}
              className={this.state.activeTag === elm ? "active" : "tag"}
            >
              {elm}
            </li>
          ))}
        </ul>
        <Food foodItems={foodItems} />
      </>
    );
  }
}

export default Tags;
