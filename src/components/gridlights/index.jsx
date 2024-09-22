import { useState } from "react";
const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const GridLight = () => {
  const [isClicked, setIsClicked] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const deactivatecells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setIsClicked((isClciked) => {
        const newOrder = isClciked?.slice();
        newOrder?.pop();

        if (newOrder?.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };
  const clickHandler = (index) => {
    let newClicked = [...isClicked, index];

    setIsClicked(newClicked);

    if (newClicked.length === config.flat(1).filter(Boolean).length) {
      deactivatecells();
    }
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: " 100px auto",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      {config.flat(1).map((value, index) => (
        <Cell
          key={index}
          index={index}
          onClick={() => clickHandler(index)}
          isClicked={isClicked}
          value={value}
          isDisabled={isClicked.includes(index) || isDeactivating}
          fill={isClicked?.includes(index)}
        />
      ))}
    </div>
  );
};

export default GridLight;

const Cell = ({ value, onClick, isDisabled, fill }) => {
  return (
    <div
      className=" w-[200px] h-[200px] m-5 cursor-pointer"
      style={{
        border: value === 1 ? "1px solid black" : "",
        backgroundColor: fill ? "green" : "",
      }}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div>{}</div>
    </div>
  );
};
