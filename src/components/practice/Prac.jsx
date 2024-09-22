// import { useMemo, useState } from "react";

import { useCallback, useState } from "react";
import Child from "./Child";
// const Prac = () => {
//   const [one, setOne] = useState(0);
//   const [two, setTwo] = useState(0);

//   const isEven = useMemo(() => {
//     console.log("clciked");
//     return one % 2 === 0;
//   }, [one]);
//   return (
//     <div>
//       <button onClick={() => setOne(one + 1)}> One{one}</button>
//       <span>{isEven ? "even" : "odd"}</span>
//       <button onClick={() => setTwo(two + 1)}> Two{two}</button>
//     </div>
//   );
// };

// export default Prac;

const Prac = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(1);

  const func = useCallback(() => {}, [two]);

  return (
    <div>
      <p>number:{one}</p>
      <Child func={func} />
      <button onClick={() => setOne(one + 1)}>inc</button>
    </div>
  );
};

export default Prac;
