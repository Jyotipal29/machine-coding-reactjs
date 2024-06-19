import React from "react";

const Child = () => {
  console.log("im child ");
  return <div>Child</div>;
};

export default React.memo(Child);
