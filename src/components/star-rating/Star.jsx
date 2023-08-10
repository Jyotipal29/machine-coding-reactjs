import { useState } from "react";
import StarComp from "./star-com/StarComp";
const Star = () => {
  const [currRating, setCurrRating] = useState(2);
  return (
    <div>
      <StarComp
        maxStar={5}
        currRating={currRating}
        setCurrRating={setCurrRating}
      />
    </div>
  );
};

export default Star;
