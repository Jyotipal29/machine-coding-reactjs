import { useState, useRef } from "react";

const Trello = () => {
  const [text, setText] = useState("");
  const [cat, setCat] = useState("");

  const [tasks, setTask] = useState({
    todo: [
      {
        id: 1,
        text: "todo task 1",
        category: "todo",
      },
    ],
    progress: [
      {
        id: 1,
        text: "progress task 1",
        category: "progress",
      },
    ],
    done: [
      {
        id: 1,
        text: "done task 1",
        category: "done",
      },
    ],
  });

  const categories = Object.keys(tasks);
  const [isEditing, setIsEditing] = useState(null);
  const [dragingItem, setDragingItem] = useState(null);
  const prevCategory = useRef();

  prevCategory.current = isEditing?.category;

  const addTask = () => {
    if (isEditing) {
      let newTask = { ...tasks };

      newTask[isEditing.category].push({
        id: Date.now(),
        text: isEditing.text,
        category: isEditing.category,
      });
      setTask(newTask);
      setIsEditing(null);
    } else {
      let newTask = { ...tasks };
      newTask[cat].push({ id: Date.now(), text, category: cat });
      setTask(newTask);
      setText("");
    }
  };

  // const editHandler = (task, id) => {
  //   setIsEditing(true);
  // };
  const deleteHandler = (task) => {
    let newTasks = { ...tasks };

    newTasks[task.category] = newTasks[task.category].filter(
      (item) => item.id != task.id
    );

    setTask(newTasks);
  };

  const handleDragStart = (e, task) => {
    setDragingItem(task);
    console.log("draging", task);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, cat) => {
    let newTasks = { ...tasks };
    newTasks[dragingItem.category] = newTasks[dragingItem.category].filter(
      (item) => item.text !== dragingItem.text
    );

    newTasks[cat].push({
      id: dragingItem.id,
      text: dragingItem.text,
      category: dragingItem.category,
    });

    console.log(newTasks, "newTasks");

    setTask(newTasks);
  };

  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            // maxWidth: "400px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            value={isEditing ? isEditing.text : text}
            placeholder="add tasks"
            onChange={(e) => {
              if (isEditing) {
                setIsEditing((prev) => ({ ...prev, text: e.target.value }));
              } else {
                setText(e.target.value);
              }
            }}
            style={{
              border: "1px solid gray",
              padding: "10px",
              outline: "none",
              width: "100%",
              maxWidth: "300px",
              fontSize: "20px",
            }}
          />

          <select
            style={{
              width: "100%",
              maxWidth: "200px",
              border: "1px solid black",
            }}
            value={isEditing ? isEditing.category : cat}
            onChange={(e) => {
              if (isEditing) {
                // setNewCat(e.target.value);
                setIsEditing((prev) => ({ ...prev, category: e.target.value }));
              } else {
                setCat(e.target.value);
              }
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            style={{
              border: "1px solid gray",
              padding: "10px",
              fontSize: "20px",
            }}
            onClick={addTask}
          >
            {isEditing ? "edit" : "add"}
          </button>
        </div>

        {/* <div
          style={{
            margin: "20px 0px",
            width: "300px",
            border: "1px solid black",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              textAlign: "center",
              borderBottom: "1px solid black",
              padding: "5px 0px",
              backgroundColor: "#fca5a5",
              //   borderRadius: "10px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            Doing
          </h2>
          <div>
            {tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  fontSize: "18px",
                  padding: "0px 10px",
                  textTransform: "capitalize",
                  margin: "10px 0px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {isEditing ? (
                  <div>
                    {" "}
                    <input value={task} />
                    <button>update</button>
                    <button onClick={() => setIsEditing(false)}>cancle</button>
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: "18px",
                      padding: "0px 10px",
                      textTransform: "capitalize",
                      margin: "10px 0px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{task}</p>
                    <button onClick={() => editHandler(task, index)}>
                      edit
                    </button>
                    <button onClick={() => deleteHandler(task)}>delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}

        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "24px",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {categories.map((cat, index) => (
            <Category
              key={index}
              cat={cat}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            >
              {tasks[cat].map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    task={task}
                    setIsEditing={setIsEditing}
                    deleteHandler={deleteHandler}
                    handleDragStart={handleDragStart}
                  />
                );
              })}
            </Category>
          ))}
        </div>
      </div>
    </div>
  );
};

const Category = ({ cat, children, handleDragOver, handleDrop }) => {
  return (
    <div
      key={cat}
      style={{
        minWidth: "400px",

        border: "1px solid gray",
      }}
      onDrop={(e) => handleDrop(e, cat)}
      onDragOver={handleDragOver}
    >
      <div style={{ textAlign: "center", padding: "10px", fontSize: "24px" }}>
        {cat}
      </div>
      {children}
    </div>
  );
};

const TaskCard = ({ task, setIsEditing, deleteHandler, handleDragStart }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "18px",
        alignItems: "center",
        padding: "0px 5px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        margin: "10px 5px",
      }}
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
    >
      <p
        style={{
          textTransform: "capitalize",
        }}
      >
        {task.text}
      </p>
      <button
        style={{
          padding: "5px 10px",
          textTransform: "capitalize",
        }}
        onClick={() => setIsEditing(task)}
      >
        edit
      </button>
      <button
        style={{
          padding: "5px 10px",
          textTransform: "capitalize",
        }}
        onClick={() => deleteHandler(task)}
      >
        delete
      </button>
    </div>
  );
};
export default Trello;

// const [board, setBoard] = useState([
//   {
//     category: [
//       {
//         id: 1,
//         name: "Todo",
//         tasks: [
//           {
//             id: 2,
//             text: " todo task 1",
//           },
//         ],
//       },
//       {
//         id: 3,
//         name: "In Progress",
//         tasks: [
//           {
//             id: 4,
//             text: " progress task 1",
//           },
//         ],
//       },
//       {
//         id: 5,
//         name: "Done",
//         tasks: [
//           {
//             id: 6,
//             text: " done task 1",
//           },
//         ],
//       },
//     ],
//   },
// ]);
