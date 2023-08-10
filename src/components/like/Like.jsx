import { AiOutlineHeart } from "react-icons/ai";
import "./like.css";
import { useState } from "react";
const Like = () => {
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("liked");
      setIsLiked(true);
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      <button className={isLiked ? "liked-btn" : "btn"} onClick={likeHandler}>
        Like
        {loading ? (
          "... "
        ) : (
          <AiOutlineHeart className={isLiked ? "liked-heart" : "heart"} />
        )}
      </button>
    </div>
  );
};

export default Like;
