import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Javascript",
    count: 0,
    per: 0,
  },
  {
    id: 2,
    title: "Reactjs",
    count: 0,
    per: 0,
  },
  {
    id: 3,
    title: "Nextjs",
    count: 0,
    per: 0,
  },
];

const Poll = () => {
  const [options, setOptions] = useState(data);
  const [tVote, setTVote] = useState(0);
  let totalVote = 0;
  const calculatePer = (count) => {
    totalVote = options.reduce((acc, curr) => acc + curr.count, 0) + 1;

    setTVote(totalVote);
    return (count / totalVote) * 100;
  };
  const voteHandler = (vote) => {
    let newOption = [...options];
    newOption = newOption.map((item) =>
      item.id === vote.id
        ? {
            ...item,
            count: item.count + 1,
            per: Math.floor(calculatePer(item.count + 1)),
          }
        : item
    );

    console.log(newOption, "newOptions");
    setOptions(newOption);
  };
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "50px auto",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Polling
      </h1>

      <div
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

          width: "100%",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px ",
        }}
      >
        {options.map((option) => (
          <div
            key={option.id}
            style={{
              padding: "20px",
              width: "100%",
            }}
          >
            <button
              style={{
                fontSize: "18px",
                textTransform: "capitalize",
                border: "1px solid #ccc",
                width: "100%",
                padding: "10px",
                position: "relative",
              }}
              onClick={() => voteHandler(option)}
            >
              <div
                style={{
                  width: `${option.per}%`,
                  backgroundColor: "green",
                  height: "100%",
                  top: "0",
                  left: "0",
                  zIndex: "1",
                  position: "absolute",
                }}
              ></div>
              <p
                style={{
                  position: "relative",
                  zIndex: "5",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                {option.title} {option.per}
              </p>
            </button>
          </div>
        ))}

        <p>{tVote} total vote casted</p>
      </div>
    </div>
  );
};

export default Poll;
