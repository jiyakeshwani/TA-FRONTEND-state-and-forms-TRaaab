import React from "react";

function Size(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let unique = [...new Set(sizes)];
  console.log(unique);
  let { selectedSizes } = props;
  return (
    <>
      <div className="flex wrap sizes">
        {unique.map((size) => {
          return (
            <>
              <div
                onClick={() => props.handleSize(size)}
                className={`size ${
                  selectedSizes.includes(size) ? "active-size" : "size"
                }`}
              >
                {size}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Size;
