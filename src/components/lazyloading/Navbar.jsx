import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
