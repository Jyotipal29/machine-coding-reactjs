import "./style.css";
import { useState } from "react";
const data = [
  {
    name: "India",
    value: "IN",
    citites: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    citites: ["Lahour", "Islamabad"],
  },
  {
    name: "USA",
    value: "US",
    citites: ["NYC", "Texas"],
  },
];
const Dropdown = () => {
  const [country, setCountry] = useState(data[0].name);

  return (
    <div className="container">
      <h1>Cities and Countries</h1>
      <div className="list-dropdown">
        <div className="dropdown-wrapper">
          <select
            className="dropdown"
            onChange={(e) => setCountry(e.target.value)}
          >
            {data.map((country) => (
              <option
                key={country.value}
                value={country.name}
                className="dropdown-option"
              >
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown-wrapper">
          <select className="dropdown">
            {data
              ?.filter((value) => value.name === country)[0]
              ?.citites.map((city, index) => (
                <option key={index} className="dropdown-option">
                  {city}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
