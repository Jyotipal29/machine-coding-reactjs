import { useEffect, useState } from "react";

import "./style.css";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setWidth(width + 10);
  //     }, 1000);

  //     if (width >= 100) {
  //       clearInterval(timer);
  //       setWidth(0);
  //     }
  //   }, [width]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevWidth + 1;
      });
    }, 100);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container">
      <h2>progress bar</h2>
      {/* <div
        style={{
          border: "2px solid black",
          height: "30px",
          width: "600px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${width}%`,
            backgroundColor: "green",
            height: "100%",
            position: "relative",
          }}
        >
          <p
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   position: "absolute",
            //   top: "0",
            //   left: "300px",
            //   color: `${width > "300px" ? "white" : "black"}`,
            // }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              // margin: 0,
              color: width >= 50 ? "white" : "black",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              fontWeight: "bold",
            }}
          >
            {width}%
          </p>
        </div>
      </div> */}

      <div
        style={{
          border: "2px solid black",
          height: "30px",
          width: "600px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${width}%`,
            backgroundColor: "green",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "20px 0 0 20px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <p
            style={{
              margin: 0,
              color: width >= 50 ? "white" : "black",
              fontWeight: "bold",
            }}
          >
            {width}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
