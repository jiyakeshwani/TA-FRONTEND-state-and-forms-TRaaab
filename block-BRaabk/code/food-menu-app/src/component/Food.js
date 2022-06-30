import React from "react";

function Food(props) {
    console.log(props)
  return (
      <>
      <div className="food-menu">
        {props.foodItems.map((food) => {
          return (
            <>
              <div key={food.id} className="food">
                <div className="img-box">
                  <img className="img" src={food.img} alt="img" />
                </div>
                <div className="food-detail">
                  <div className="flex">
                    <h2>{food.title}</h2>
                    <span>{food.price}</span>
                  </div>
                  <hr />
                  <p>{food.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Food;
