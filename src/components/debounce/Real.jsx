import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useDebounce from "./useDebounce";
const Real = () => {
  const [text, setText] = useState("");

  const debouncedText = useDebounce(text);

  const getData = async () => {
    if (debouncedText.trim() === "") {
      return;
    }
    const { data } = await axios.get(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos`,
      {
        params: {
          q: debouncedText,
          numResults: 50,
        },
      }
    );

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [debouncedText]);

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <input placeholder="search..." value={text} onChange={changeHandler} />
      </div>
    </div>
  );
};

export default Real;
