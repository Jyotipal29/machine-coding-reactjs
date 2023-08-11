import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [undoHistory, setUndoHistory] = useState([]);

  const perform = (value, action) => {
    console.log(value, action);
    setCounter(value);
    const prevValue = counter;
    setHistory([{ prevValue, value, action }, ...history]);
  };
  const onUndo = () => {
    const [latest, ...allHistory] = history;
    setCounter(latest.value);
    setUndoHistory([latest, ...undoHistory]);
    setHistory(allHistory);
  };

  const onRedo = () => {
    const [latest, ...allhistory] = undoHistory;
    console.log(latest, "lates");
    // setCounter(latest.value);
    setUndoHistory([latest, ...undoHistory]);
    setHistory(allhistory);
  };
  return (
    <div className="con">
      <div className="buttons">
        <div className="redos">
          <button disabled={undoHistory.length === 0} onClick={onRedo}>
            redo
          </button>
          <button disabled={history.length === 0} onClick={onUndo}>
            undo
          </button>
          <button
            onClick={() => {
              setHistory([]);
              setCounter(0);
              setUndoHistory([]);
            }}
          >
            reset
          </button>
        </div>

        <div className="actions">
          <div>
            <button onClick={() => perform(counter / 2, "/2")}>/2</button>
            <button onClick={() => perform(counter - 1, "-1")}>-1</button>
          </div>
          <div>{counter}</div>
          <div>
            <button onClick={() => perform(counter * 2, "x2")}>*2</button>
            <button onClick={() => perform(counter + 1, "+1")}>+1</button>
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>new value</th>
              <th>old value</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{item.action} </td>
              <td style={{ padding: "10px 50px" }}>{item.value}</td>

              <td style={{ padding: "10px 30px" }}>{item.prevValue}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Counter;
