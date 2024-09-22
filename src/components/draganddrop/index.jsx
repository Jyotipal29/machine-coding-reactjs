import "./style.css";
import { useState } from "react";
const initialData = {
  todo: [
    { id: "1", content: "Todo 1" },
    { id: "2", content: "Todo 2" },
    { id: "3", content: "Todo 3" },
  ],
  doing: [{ id: "4", content: "Doing 1" }],
  done: [{ id: "5", content: "Done 1" }],
};
const DragAndDrop = () => {
  const [newTodo, setNewTodo] = useState("");
  const [columns, setColumns] = useState(initialData);
  const [draggingItem, setDraggingItem] = useState(null);
  const [draggingColumn, setDraggingColumn] = useState(null);

  // Handle drag start
  const handleDragStart = (e, item, column) => {
    setDraggingItem(item);
    setDraggingColumn(column);
  };

  // Allow drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop event
  const handleDrop = (e, targetColumn, targetIndex) => {
    e.preventDefault();

    if (!draggingItem || !draggingColumn) return;

    const newColumns = { ...columns };
    const sourceItems = newColumns[draggingColumn];
    const targetItems = newColumns[targetColumn];

    // Remove the item from the source column
    const [item] = sourceItems.splice(
      sourceItems?.findIndex((i) => i?.id === draggingItem?.id),
      1
    );

    // Add the item to the target column at the specified index
    if (targetIndex === undefined) {
      targetItems.push(item);
    } else {
      targetItems.splice(targetIndex, 0, item);
    }

    setColumns(newColumns);
    setDraggingItem(null);
    setDraggingColumn(null);
  };

  const handleAddTodo = () => {
    if (!newTodo?.trim()) return; // Do nothing if input is empty

    const newItem = {
      id: Date.now().toString(), // Unique ID based on timestamp
      content: newTodo,
    };

    const newColumns = { ...columns };
    newColumns?.todo?.push(newItem); // Add new item to 'todo' column

    setColumns(newColumns);
    setNewTodo(""); // Clear input field
  };

  const renderColumn = (columnName) => {
    return (
      <div
        className="column"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, columnName)}
      >
        {/* <h2>{columnName.charAt(0).toUpperCase() + columnName.slice(1)}</h2> */}
        <h2>{columnName}</h2>
        {columns[columnName]?.map((item, index) => {
          return (
            item && (
              <div
                key={item?.id}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, columnName)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, columnName, index)}
              >
                {item?.content}
              </div>
            )
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
          style={{
            padding: "10px",
            border: "1px solid black",
          }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="kanban-board">
        {renderColumn("todo")}
        {renderColumn("doing")}
        {renderColumn("done")}
      </div>
    </div>
  );
};

export default DragAndDrop;
