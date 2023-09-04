import { useState } from "react";
import "./input.css";
const Input = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <input type="text" value={val} />
    </div>
  );
};

export default Input;
