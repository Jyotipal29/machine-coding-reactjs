import "./style.css";
import { useState } from "react";

const useGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (checkBox, charLength) => {
    let charset = "";
    let generatedPassword = "";
    console.log(checkBox);
    const valueToInlcude = checkBox.filter((item) => item.state);

    console.log(valueToInlcude);

    if (valueToInlcude.length === 0) {
      setError("select at least one options");
      setPassword("");

      return;
    }

    valueToInlcude.forEach((item) => {
      switch (item.title) {
        case "Include Uppercase":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include Lowercase":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Numbers":
          charset += "0123456789";
          break;

        case "Include symbols":
          charset += "!@#$%^&*";
          break;

        default:
          break;
      }
    });

    for (let i = 0; i < charLength; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);

      generatedPassword += charset[randomIndex];
      console.log(generatedPassword);
    }

    setPassword(generatedPassword);
  };

  return {
    password,
    error,
    generatePassword,
    setError,
  };
};

const Password = () => {
  const [isCoped, setIsCoped] = useState(false);
  const [charLength, setCharLength] = useState(4);
  const [checkBox, setCheckBox] = useState([
    {
      title: "Include Uppercase",
      state: false,
    },
    {
      title: "Include Lowercase",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include symbols",
      state: false,
    },
  ]);

  const { password, generatePassword, error, setError } = useGeneratePassword();
  const copyHandler = async () => {
    const password = document.getElementById("password");
    navigator.clipboard.writeText(password.innerText);
    setIsCoped(true);

    setTimeout(() => {
      setIsCoped(false);
    }, 2000);
  };

  const rangeHandler = (e) => {
    setCharLength(e.target.value);
  };

  const checkboxHandler = (index) => {
    const newCheckBox = [...checkBox];
    newCheckBox[index].state = !newCheckBox[index].state;
    setCheckBox(newCheckBox);
  };

  const passwordHandler = () => {
    setError("");
    generatePassword(checkBox, charLength);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
        }}
      >
        Generate Password
      </h1>

      <div style={{ width: "100%", backgroundColor: "gray", padding: "20px" }}>
        <div style={{ color: "red", fontSize: "20px" }}>{error}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "white",
          }}
        >
          <p
            id="password"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {password}
          </p>
          <button
            style={{
              backgroundColor: "green",
              padding: "5px 10px",
              textTransform: "uppercase",
              borderRadius: "5px",
            }}
            onClick={copyHandler}
          >
            {isCoped ? "copied" : "copy"}
          </button>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <p style={{ fontSize: "20px" }}>character length</p>
            <p style={{ fontSize: "20px" }}>{charLength}</p>
          </div>

          <div
            style={{
              height: "50px",
              width: "100%",
            }}
          >
            <input
              type="range"
              min="0"
              max="15"
              value={charLength}
              onChange={rangeHandler}
              style={{
                width: "100%",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "100%",
              padding: "10px",
              gap: "20px",
            }}
          >
            {checkBox.map((item, index) => (
              <div
                key={index}
                style={{
                  color: "white",
                }}
              >
                <input
                  type="checkbox"
                  checked={item.state}
                  onChange={() => checkboxHandler(index)}
                  style={{
                    padding: "10px",
                    width: "30px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
                <label style={{ fontSize: "20px" }}>{item.title}</label>
              </div>
            ))}
          </div>

          <button
            onClick={passwordHandler}
            style={{
              width: "100%",
              backgroundColor: "green",
              color: "white",
              height: "40px",
              fontSize: "20px",
              borderRadius: "20px",
            }}
          >
            Gnerate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
