import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <>
      <header>
        <img src="./404_logo_alpha.png" alt="logo da 404" />
        <nav>
          <ul>
            <li>
              <Link to={""}></Link>About
            </li>
            <li>
              <Link to={""}></Link>Members
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
