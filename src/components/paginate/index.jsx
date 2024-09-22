import { useState } from "react";

const Paginate = () => {
  let maxPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  let limit = 42;

  const arr = Array.from({ length: limit }, (_, i) => i + 1);

  const getDisplayedPages = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPage / 2));
    let endPage = Math.min(limit, startPage + maxPage - 1);

    // Adjust if we're near the end to always show 10 pages
    if (endPage - startPage < maxPage - 1) {
      startPage = Math.max(1, endPage - maxPage + 1);
    }

    return arr.slice(startPage - 1, endPage);
  };

  return (
    <div className="container">
      <h1>pagination</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage((currentPage) => currentPage - 1);
          }}
          style={{
            padding: "10px",
            border: "1px solid black",
            margin: "10px",
            backgroundColor: "green",
          }}
        >
          previous
        </button>

        {getDisplayedPages().map((page, index) => (
          <button
            key={index}
            style={{
              padding: "10px",
              border: "1px solid black",
              margin: "10px",
              backgroundColor: currentPage === index + 1 ? "green" : "",
            }}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          style={{
            backgroundColor: "green",
            padding: "10px",
            border: "1px solid black",
            margin: "10px",
          }}
          disabled={currentPage === limit}
          onClick={() => {
            // setCurrentPage(currentPage + 1);
            setCurrentPage((currentPage) => currentPage + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Paginate;
