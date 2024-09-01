import { useState } from "react";
import "./style.css";
const MultiSelectSearch = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const getUser = async () => {
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }
    fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data.users))
      .catch((err) => console.log(err));
  };

  const keyDownHandler = () => {
    getUser();
  };
  console.log(suggestions);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user.firstName + user.lastName]);
    setSuggestions([]);
  };

  console.log(selectedUsers, "selected users");

  const removeHandler = (user) => {
    let newSelectedUsers = selectedUsers.filter((item) => item != user);

    setSelectedUsers(newSelectedUsers);
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>
        Multi Select Search
      </h1>
      <div
        style={{
          width: "100%",
        }}
      >
        {/* pills */}
        {/* input filed and search suggestions */}
        <div style={{ width: "100%" }}>
          <div className="input-search">
            {selectedUsers.map((user, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "green",
                  margin: "5px",
                  padding: "5px",
                  color: "white",
                }}
              >
                {user}
                <button
                  style={{ padding: "5px" }}
                  onClick={() => removeHandler(user)}
                >
                  x
                </button>
              </span>
            ))}
            <input
              className=""
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="enter user name"
              onKeyDown={keyDownHandler}
              style={{ outline: "none" }}
            />
          </div>

          {/* search suggestions */}
          {suggestions.length > 0 && (
            <div className="sug-list">
              {suggestions.map((item) => (
                <div key={item.id} style={{ margin: "10px" }}>
                  <p onClick={() => handleSelectUser(item)}>
                    {item.firstName} {item.lastName}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectSearch;
