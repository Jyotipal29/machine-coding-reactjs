// import { useState } from "react";
// import "./style.css";

// const data = [
//   {
//     id: 1,
//     heading: "heading one ",
//     text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
//   },
//   {
//     id: 2,
//     heading: "heading two ",

//     text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
//   },
//   {
//     id: 3,
//     heading: "heading three",

//     text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
//   },
// ];
// const Accordian = () => {
//   const [open, setOpen] = useState({});
//   return (
//     <div>
//       <p>accordina</p>
//       <div>
//         {data.map((item) => (
//           <div key={item.id} className="acc">
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <h2>{item.heading}</h2>

//               <button
//                 onClick={(prev) =>
//                   setOpen({
//                     ...prev,
//                     [item.id]: !open[item.id],
//                   })
//                 }
//               >
//                 {open[item.id] ? "-" : "+"}
//               </button>
//             </div>
//             {open[item.id] && <p>{item.text}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accordian;

import { useState } from "react";
import "./style.css";

const data = [
  {
    id: 1,
    heading: "I acknowledge that i should  stop the click event propagation",
    text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
  },
  {
    id: 2,
    heading: "I acknowledge that i should  stop the focus event propagation ",

    text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
  },
  {
    id: 3,
    heading:
      "I acknowledge that i should  provide an aria-label on each action that i add",

    text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
  },
];
const Accordian = () => {
  const [openId, setOpenId] = useState("");
  const [selected, setSelected] = useState([]);

  const checkHandler = (id) => {
    console.log(id);
    if (selected.includes(id)) {
      let newSelected = selected.filter((item) => item !== id);
      setSelected(newSelected);
    } else {
      setSelected([...selected, id]);
    }
  };
  console.log(selected, "selected");
  return (
    <div className="container">
      <div
        style={{
          maxWidth: "1000px",
          backgroundColor: "white",
          border: "1px solid gray",
          // padding: "20px 0px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",

                  border: "1px solid gray",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ padding: "10px", width: "30px" }}
                    onClick={() => checkHandler(item.id)}
                    checked={selected.includes(item.id)}
                  />

                  <h1
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {item.heading}
                  </h1>
                </div>

                <button
                  onClick={() => {
                    // setOpen((open) => !open);
                    setOpenId((prevId) =>
                      prevId === item.id ? null : item.id
                    );
                  }}
                >
                  {"V"}
                </button>
              </div>
              {openId === item.id && <div>{item.text}</div>}
            </div>
          );
        })}
      </div>

      <button
        style={{
          border: "1px solid black",
          maxWidth: "100px",
          marginTop: "20px",
          padding: "10px 0px",
        }}
        disabled={selected.length !== data.length}
        onClick={() => console.log("clicked")}
      >
        proceed
      </button>
    </div>
  );
};

export default Accordian;
