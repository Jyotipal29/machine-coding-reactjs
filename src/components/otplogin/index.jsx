import { useState, useRef, useEffect } from "react";
import "./style.css";
const OtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length != 10 || regex.test(phoneNumber)) {
      alert("invalid phone number");
      return;
    }

    setShowOtpInput(true);

  };

  const loginHandler = () => {};

  const otpChangeHandler = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    //allow only one input

    setOtp(newOtp);
    const combine = newOtp.join("");
    if (combine.length === 4) {
      loginHandler(combine);
    }
    //move to next input if current filed is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "30px" }}>OTP Login</h1>

      {showOtpInput ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <h1>Enter OTP sent to {phoneNumber}</h1>{" "}
          <div>
            {otp.map((item, index) => (
              <input
                className="input-otp "
                key={index}
                type="text"
                ref={(input) => (inputRefs.current[index] = input)}
                value={item}
                onChange={(e) => otpChangeHandler(index, e)}
                tabIndex={index + 1}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          {/* <input
            placeholder="enter otp"
            style={{
              border: "1px solid black ",
              maxWidth: "600px",
              padding: "20px",
              margin: "20px 0px",
            }}
            maxLength={4}
          /> */}
          {/* <button
            style={{
              border: "1px solid black",
              backgroundColor: "blue",
              maxWidth: "600px",
              marginTop: "20px",
              padding: "10px",
              color: "white",
              fontSize: "20px",
            }}
            onClick={loginHandler}
          >
            login
          </button> */}
        </div>
      ) : (
        <form
          onSubmit={submitHandler}
          style={{
            border: "1px solid black ",
            maxWidth: "600px",
            padding: "20px",
            margin: "20px 0px",
          }}
        >
          <div
            style={{
              width: "100%",
              // padding: "20px ",
            }}
          >
            <input
              type="text"
              value={phoneNumber}
              placeholder="enter phone number"
              style={{
                padding: "10px",
                border: "1px solid black",
                width: "100%",
                // outline: "none",
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              border: "1px solid black",
              backgroundColor: "blue",
              width: "100%",
              marginTop: "20px",
              padding: "10px",
              color: "white",
              fontSize: "20px",
            }}
          >
            submit
          </button>
        </form>
      )}
    </div>
  );
};

export default OtpLogin;
