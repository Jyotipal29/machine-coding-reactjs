import { useState } from "react";

const Paginate = () => {
  const arr = Array.from({ length: 42 }, (_, index) => index + 1);
  const [currPage, setCurrPage] = useState(arr[0]);
  const [range, setRange] = useState(arr.slice(0, 10));
  console.log(Math.min(42, 5));

  const getRange = (num) => {
    setCurrPage(num);
    const delta = 5;
    let start = Math.max(0, num - delta - 1);
    let end = Math.min(arr.length, num + delta);

    setRange(arr.slice(start, end));
  };
  const prevHandler = () => {
    let newRange = currPage - 1;
    console.log(newRange, "newrNAG");
    if (newRange >= 1) {
      getRange(newRange);
    }
  };
  const nextHandler = () => {
    let newRange = currPage + 1;
    if (newRange <= arr.length) {
      getRange(newRange);
    }
  };

  console.log(range, "range");
  return (
    <div className="container">
      {/* <h1>pagination</h1>s */}

      <div>
        <button
          style={{
            border: "1px solid #ccc",
            width: "100px",
            fontSize: "18px",
            textTransform: "uppercase",
            padding: "5px 10px",
          }}
          disabled={currPage === 1}
          onClick={prevHandler}
          // onClick={() => setCurrPage((currPage) => currPage - 1)}
        >
          prev
        </button>
        {range[0] > arr[0] && <div>...</div>}
        {range.map((item) => (
          <button
            key={item}
            style={{
              border: "1px solid #ccc",

              fontSize: "18px",
              textTransform: "uppercase",
              padding: "5px 10px",
              margin: "10px",
              backgroundColor: currPage === item ? "green" : "",
            }}
            onClick={() => getRange(item)}
          >
            {item}
          </button>
        ))}

        {arr[arr.length - 1] > range[range.length - 1] && <div>...</div>}
        <button
          style={{
            border: "1px solid #ccc",
            width: "100px",
            fontSize: "18px",
            textTransform: "uppercase",
            padding: "5px 10px",
          }}
          disabled={currPage === arr.length}
          // onClick={() => setCurrPage((currPage) => currPage + 1)}
          onClick={nextHandler}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Paginate;
