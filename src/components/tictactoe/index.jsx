import { useState } from "react";

const TicTacToe = () => {
  return (
    <div className="container mx-auto px-[20px]">
      <Board />
    </div>
  );
};

export default TicTacToe;

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const winner = checkWinner();

  const clickHandler = (index) => {
    if (state[index] !== null) {
      return;
    }
    const newState = [...state];
    newState[index] = isX ? "X" : "0";
    setState(newState);
    setIsX(!isX);
  };

  return (
    <div>
      <div className="flex  space-x-10 py-4">
        {" "}
        <p className="text-xl uppercase">winner is :{winner}</p>
        <button
          onClick={() => setState(Array(9).fill(null))}
          className="text-xl text-blue-500 border-2 border-blue-300 p-2  rounded-md cursor-pointer"
        >
          play again
        </button>
      </div>

      <div className=" ">
        <p>PLayer {isX ? "X" : "0"} your turn</p>
        <div className="flex  justify-between items-center w-full ">
          <Square value={state[0]} onClick={() => clickHandler(0)} />
          <Square value={state[1]} onClick={() => clickHandler(1)} />
          <Square value={state[2]} onClick={() => clickHandler(2)} />
        </div>
        <div className="flex  justify-between items-center  w-full">
          <Square value={state[3]} onClick={() => clickHandler(3)} />
          <Square value={state[4]} onClick={() => clickHandler(4)} />
          <Square value={state[5]} onClick={() => clickHandler(5)} />
        </div>
        <div className="flex  justify-between items-center  w-full">
          <Square value={state[6]} onClick={() => clickHandler(6)} />
          <Square value={state[7]} onClick={() => clickHandler(7)} />
          <Square value={state[8]} onClick={() => clickHandler(8)} />
        </div>
      </div>
    </div>
  );
};

const Square = ({ value, onClick }) => {
  return (
    <div>
      <h5
        className=" border border-black w-[100px] h-[100px]  flex justify-center items-center"
        onClick={onClick}
      >
        {value}
      </h5>
    </div>
  );
};
