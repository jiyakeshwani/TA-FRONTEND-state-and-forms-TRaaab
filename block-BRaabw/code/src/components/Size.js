import React from "react";

function Size({ products }) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let unique = [...new Set(sizes)];
  console.log(unique);
  return (
    <>
      <div className="flex wrap sizes">
        {unique.map((size) => {
          return (
            <>
              <div className="size">{size}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Size;
