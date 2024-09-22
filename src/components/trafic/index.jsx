import { useEffect, useState } from "react";

const Trafic = () => {
  const [isActive, setIsActive] = useState("Red");
  const trafic = {
    Red: {
      next: "Yellow",
      timer: 10,
    },
    Yellow: {
      next: "Green",
      timer: 5,
    },
    Green: {
      next: "Red",
      timer: 15,
    },
  };

  useEffect(() => {
    let timeId = setTimeout(() => {
      setIsActive(trafic[isActive].next);
    }, trafic[isActive].timer * 1000);

    return () => clearTimeout(timeId);
  }, [isActive]);

  console.log(isActive);

  const timerChangeHandler = (e) => {
    // (e) => setIsActive({ ...isActive, timer: e.target.value });

    console.log(e.target.value, "keydown");
  };
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Trafic System
      </h1>

      <div>
        <select value={isActive} onChange={(e) => setIsActive(e.target.value)}>
          {Object.keys(trafic).map((light) => (
            <option key={light} value={light}>
              {light}
            </option>
          ))}
        </select>
        <input
          type="number"
          //   value={trafic[isActive].timer}
          onKeyDown={timerChangeHandler}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid black",
            borderRadius: "50%",
            backgroundColor: isActive === "Red" ? "red" : "",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid black",
            borderRadius: "50%",
            backgroundColor: isActive === "Yellow" ? "yellow" : "",
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid black",
            borderRadius: "50%",
            backgroundColor: isActive === "Green" ? "green" : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Trafic;
