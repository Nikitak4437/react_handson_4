import { Outlet, Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/studentDetails">Contact Us</Link>
          </li>
          <li>
            <Link to="/nikita">Nikita </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationLinks;
