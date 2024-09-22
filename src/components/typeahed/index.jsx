import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return { debouncedValue };
};
const Typeahead = () => {
  const [suggestions, setSugetions] = useState([]);
  const [name, setName] = useState("");
  const { debouncedValue } = useDebounce(name, 500);

  const getData = async (debouncedValue) => {
    if (name.trim() === "") {
      setSugetions([]);
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${debouncedValue}`
    );
    const data = await response.json();

    setSugetions(data?.users);
  };

  useEffect(() => {
    getData(debouncedValue);
  }, [debouncedValue]);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <input
          value={name}
          type="text"
          placeholder="search user here"
          style={{
            border: "1px solid black",
            outline: "none",
            padding: "20px ",
            maxWidth: "500px",
            width: "100%",
            borderRadius: "20px",
            fontSize: "24px",
            backgroundColor: "white",
            zIndex: 99,
          }}
          onChange={(e) => setName(e.target.value)}
        />
        {suggestions.length > 0 && (
          <div
            style={{
              width: "100%",
              border: "1px solid black",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              // alignItems: "center",
              position: "absolute",
              top: "60px",
              padding: "20px",
            }}
          >
            {suggestions.map((suggestion) => (
              <p
                key={suggestion.id}
                style={{
                  marginTop: "20px",
                  fontSize: "20px",
                }}
                onClick={() =>
                  setName(`${suggestion.firstName} ${suggestion.lastName}`)
                }
              >
                <span></span> {suggestion.firstName} {suggestion.lastName}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Typeahead;
