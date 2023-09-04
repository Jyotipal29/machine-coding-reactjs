import { useState } from "react";

const List = () => {
  const list = ["eat", "sleep", "code"];
  const [isChecked, setIsChecked] = useState(list.map(() => false));
  const handleCheckbox = (index) => {
    const newState = [...isChecked];
    newState[index] = !newState[index];
    setIsChecked(newState);
  };
  return (
    <div>
      <p>What all i do </p>
      <div>
        {list.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={isChecked[index]}
              onChange={() => handleCheckbox(index)}
            />
            {item}
            {isChecked[index] && <button>x</button>}
          </li>
        ))}
      </div>
    </div>
  );
};

export default List;
