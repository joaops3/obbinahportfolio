import "../style/Header.scss";
import disc from "../images/disc.PNG";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={disc} alt="discord" />
      </div>

      <nav className="nav">
        <ul className="items">
          <li>
            <a href="https://www.artstation.com/obbinah">
              <i className="fa-brands fa-artstation"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/obbinah_/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Obbinah_">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
