import "./style.css";
import { useState } from "react";
const Like = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const likeHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsActive(true);
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="container">
      <p>like button</p>
      <button
        className={`border border-black w-[150px] py-2  rounded-xl  text-xl hover:border-red-600  hover:text-red-600   ${
          isActive && !isLoading ? "bg-red-600 text-white border-none" : ""
        }`}
        onClick={likeHandler}
      >
        {isLoading ? "Loading...." : ""}
        like
      </button>
    </div>
  );
};

export default Like;
