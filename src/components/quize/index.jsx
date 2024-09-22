import { useState } from "react";

const data = [
  {
    id: 1,
    question: "who is the pm",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: true,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "Rahul",
        isCorrect: false,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "who is the cm of cg",
    ansOption: [
      {
        text: "say ji",
        isCorrect: true,
      },
      {
        text: "bhupesh ji",
        isCorrect: false,
      },
      {
        text: "sinhdev",
        isCorrect: false,
      },
      {
        text: "ajit jogi",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: "who is the cm of delhi",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: false,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "kejriwal",
        isCorrect: true,
      },
      {
        text: "Mamata",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: "who is the cm of up",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: false,
      },
      {
        text: "Yogi ji",
        isCorrect: true,
      },
      {
        text: "Rahul",
        isCorrect: false,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: "who is the  congress leader",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: false,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "Rahul",
        isCorrect: true,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    question: "who is the cm of wb",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: false,
      },
      {
        text: "Mamata",
        isCorrect: true,
      },
      {
        text: "Rahul",
        isCorrect: false,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question: "who is the  defence minister",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: false,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "rajanath ji",
        isCorrect: true,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question: "who is the  home minister",
    ansOption: [
      {
        text: "Modi ji",
        isCorrect: false,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "Rahul",
        isCorrect: false,
      },
      {
        text: "shah ji",
        isCorrect: true,
      },
    ],
  },
  {
    id: 9,
    question: "who is the james bond of india",
    ansOption: [
      {
        text: "dobhal ji",
        isCorrect: true,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "Rahul",
        isCorrect: false,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    question: "who is the fm of india",
    ansOption: [
      {
        text: "sitaraman ji",
        isCorrect: true,
      },
      {
        text: "Yogi ji",
        isCorrect: false,
      },
      {
        text: "Rahul",
        isCorrect: false,
      },
      {
        text: "Kejriwal",
        isCorrect: false,
      },
    ],
  },
];

const Quiz = () => {
  //   const [quizData, setQuizData] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAns, setUserAns] = useState([]);

  const ansHandler = (ans) => {
    setUserAns([...userAns, ans]);

    setCurrentQuestion(currentQuestion + 1);
  };

  console.log(userAns);

  const resetQuiz = () => {
    console.log("reset quiz");
    setCurrentQuestion(0);
    setUserAns([]);
  };
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Quiz
      </h1>
      <div>
        {currentQuestion < data.length ? (
          <Question question={data[currentQuestion]} ansHandler={ansHandler} />
        ) : (
          <Results answere={userAns} question={data} resetQuiz={resetQuiz} />
        )}
      </div>
    </div>
  );
};

export default Quiz;

const Question = ({ question, ansHandler }) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: " 100px auto",
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          width: "100%",
          textTransform: "uppercase",
        }}
      >
        {question.question}
      </h1>
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          width: "100%",
          gap: "20px",
        }}
      >
        {question.ansOption.map((item, index) => (
          <li
            key={index}
            style={{
              listStyle: "none",
            }}
          >
            <button
              onClick={() => ansHandler(item.isCorrect)}
              style={{
                fontSize: "20px",
                textAlign: "center",
                border: "1px solid gray",
                width: "100%",
                padding: "10px",
                backgroundColor: "#eee",
              }}
            >
              {item.text}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

const Results = ({ answere, question, resetQuiz }) => {
  const correctAns = answere.filter((item) => item === true);
  //   const getIndex = answere.findIndex((item) => item === true);
  //   console.log(getIndex, "index");
  console.log(correctAns, "corects");
  console.log(question);

  return (
    <div>
      <h1>Results</h1>
      <p>
        you have answered {correctAns.length} out of {question.length} questions
      </p>
      <p>
        click here to reset the quize{" "}
        <button
          onClick={resetQuiz}
          style={{
            fontSize: "20px",
            textAlign: "center",
            border: "1px solid gray",
            width: "100%",
            padding: "10px",
            backgroundColor: "#eee",
          }}
        >
          reset
        </button>
      </p>

      {question.map((q, index) => (
        <p
          key={q}
          style={{
            color: answere[index] === true ? "green" : "red",
          }}
        >
          {q.question}
        </p>
      ))}
    </div>
  );
};
