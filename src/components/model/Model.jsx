import { useState } from "react";
import "./model.css";
const Model = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <button className="open" onClick={() => setOpen(!open)}>
        open
      </button>

      {open && (
        <div className="wrap" onClick={() => setOpen(!open)}>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              laborum consequatur, at necessitatibus sequi alias. Laboriosam,
              placeat! Cupiditate, repudiandae praesentium.
            </p>
            <button onClick={() => setOpen(!open)}>x</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
