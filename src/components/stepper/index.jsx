// import { useState } from "react";
// import "./style.css";
// const data = [
//   {
//     name: "Customer Info",
//     Component: () => <div>Provide you contact details</div>,
//   },
//   {
//     name: "shipping Info",
//     Component: () => <div>Enter you shippinh address</div>,
//   },
//   {
//     name: "payment Info",
//     Component: () => <div>Complete paymenty for your order</div>,
//   },
//   {
//     name: "Delivered Info",
//     Component: () => <div>Your order has been delivered</div>,
//   },
// ];

// const Stepper = () => {
//   const [currStep, setCurrStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);

//   const handleClick = () => {
//     setCurrStep((prev) => {
//       if (prev === data.length) {
//         setIsComplete(true);
//         return prev;
//       } else {
//         return prev + 1;
//       }
//     });
//   };

//   const ActiveComponent = data[currStep - 1].Component;

//   const calculateWidth = () => {
//     return ((currStep - 1) / (data.length - 1)) * 100;
//   };
//   return (
//     <div className="container">
//       {/* <h1
//         style={{
//           textAlign: "center",
//           fontSize: "20px",
//         }}
//       >
//         checkout
//       </h1> */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           position: "relative",
//         }}
//       >
//         {data.map((step, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               flexDirection: "column",
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "20px",
//                 // backgroundColor: "gray",
//                 borderRadius: "50%",
//                 width: "50px",
//                 height: "50px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontWeight: "bolder",
//               }}
//               className={` ${
//                 currStep > index + 1 || isComplete ? "complete" : ""
//               } ${currStep === index + 1 ? "active" : ""}`}
//             >
//               {index + 1}
//             </div>
//             <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
//               {step.name}
//             </div>
//           </div>
//         ))}
//         <div className="progress-bar">
//           <div
//             className="progress"
//             style={{ width: `${calculateWidth()}%` }}
//           ></div>
//         </div>
//       </div>

//       <ActiveComponent />
//       <div>
//         {!isComplete && (
//           <button
//             onClick={handleClick}
//             style={{
//               border: "1px solid black",
//               padding: "5px 30px",
//               backgroundColor: "blue",
//               color: "white",
//             }}
//           >
//             {currStep === data.length ? "finish" : "Next"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Stepper;
import { useState } from "react";
const data = [
  {
    name: "fill information",
    Component: () => <div>please provide you informtion</div>,
  },
  {
    name: "ship information",
    Component: () => <div>please provide your shiping informtion</div>,
  },
  {
    name: "payment information",
    Component: () => <div>please provide your payment informtion</div>,
  },
  {
    name: "Order completed",
    Component: () => <div>your order has been delivered</div>,
  },
];
const Stepper = () => {
  const [currStep, setCurrStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const ActiveComponent = data[currStep].Component;
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
          fontSize: "40px",
          textTransform: "uppercase",
        }}
      >
        stepper
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#ccc",
            height: "4px",
            top: "25px",
            left: "0",
            right: "0",
          }}
        >
          <div
            style={{
              width: `${(currStep / (data.length - 1)) * 100}%`,
              backgroundColor: "green",
              height: "100%",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: "5",
            }}
          >
            <p
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#ccc",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              {index + 1}
            </p>
            <p
              style={{
                fontSize: "24px",
                textTransform: "capitalize",
              }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <ActiveComponent />
      {!isCompleted && (
        <button
          style={{
            border: "1px solid black",
            width: "100px",
            height: "50px",
          }}
          onClick={() => {
            // setCurrStep(currStep + 1);
            setCurrStep((prev) => {
              if (prev === data.length - 1) {
                setIsCompleted(true);
                return prev;
              } else {
                return prev + 1;
              }
            });
          }}
        >
          {currStep === data.length - 1 ? "finish" : "next"}
        </button>
      )}
    </div>
  );
};

export default Stepper;
