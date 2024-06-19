import { useEffect, useState } from "react";
const useDebounce = (value, delay = 1000) => {
  const [debouncedText, setDebouncedText] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedText;
};
const Debounce = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text);
  // const [debounceText, setDebounceText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={text} onChange={changeHandler} />
      </div>
      <div>
        <p>default:{text}</p>
        <p>debounce:{debouncedText}</p>
      </div>
    </div>
  );
};

export default Debounce;
