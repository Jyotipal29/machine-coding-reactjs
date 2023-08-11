import { useState } from "react";
import "./table.css";

const Table = () => {
  const [valOne, setValOne] = useState(1);
  const [valTwo, setValTwo] = useState(1);

  const generateTable = () => {};
  return (
    <div className="container">
      <div className="wrap">
        <input
          type="number"
          value={valOne}
          onChange={(e) => setValOne(e.target.value)}
          min={1}
        />
        <input
          type="number"
          value={valTwo}
          onChange={(e) => setValTwo(e.target.value)}
          min={1}
        />
        <button onClick={generateTable}>submit</button>
      </div>

      <div>
        <table>
          <tbody>
            {Array.from({ length: valOne }).map((_, row) => (
              <tr key={row}>
                {Array.from({ length: valTwo }).map((_, col) => (
                  <td key={col}>
                    {col % 2 === 0
                      ? valOne * col + (row + 1)
                      : valOne * (col + 1) - row}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
