import { useState } from "react";
import "./style.css";
const data = [
  {
    name: "Customer Info",
    Component: () => <div>Provide you contact details</div>,
  },
  {
    name: "shipping Info",
    Component: () => <div>Enter you shippinh address</div>,
  },
  {
    name: "payment Info",
    Component: () => <div>Complete paymenty for your order</div>,
  },
  {
    name: "Delivered Info",
    Component: () => <div>Your order has been delivered</div>,
  },
];

const Stepper = () => {
  const [currStep, setCurrStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
    setCurrStep((prev) => {
      if (prev === data.length) {
        setIsComplete(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const ActiveComponent = data[currStep - 1].Component;

  const calculateWidth = () => {
    return ((currStep - 1) / (data.length - 1)) * 100;
  };
  return (
    <div className="container">
      {/* <h1
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        checkout
      </h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {data.map((step, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                // backgroundColor: "gray",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bolder",
              }}
              className={` ${
                currStep > index + 1 || isComplete ? "complete" : ""
              } ${currStep === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </div>
            <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
              {step.name}
            </div>
          </div>
        ))}
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${calculateWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />
      <div>
        {!isComplete && (
          <button
            onClick={handleClick}
            style={{
              border: "1px solid black",
              padding: "5px 30px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            {currStep === data.length ? "finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
