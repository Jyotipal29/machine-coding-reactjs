import { useState } from "react";
import "./style.css";

const data = [
  {
    id: 1,
    heading: "heading one ",
    text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
  },
  {
    id: 2,
    heading: "heading two ",

    text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
  },
  {
    id: 3,
    heading: "heading three",

    text: "hey chatgpt create a pop over model with a gray background and when i click on the background the model should get close style using css and make it in reactjs",
  },
];
const Accordian = () => {
  const [open, setOpen] = useState({});
  return (
    <div>
      <p>accordina</p>
      <div>
        {data.map((item) => (
          <div key={item.id} className="acc">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>{item.heading}</h2>

              <button
                onClick={(prev) =>
                  setOpen({
                    ...prev,
                    [item.id]: !open[item.id],
                  })
                }
              >
                {open[item.id] ? "-" : "+"}
              </button>
            </div>
            {open[item.id] && <p>{item.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
