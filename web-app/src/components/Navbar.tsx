import { useState, useContext, ChangeEventHandler } from "react";
import NxtwatchContext from "../context/NxtWatchContext";
import { FaAlignJustify, FaMoon } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { NavigateFunction, Link } from "react-router-dom";
import { withRouter } from "../components/withRouter";
import "../styles/Navbar.css";

interface NavbarProps {
  navigate: NavigateFunction;
}

const Navbar = (props: NavbarProps) => {
  const { darkModeFunc, darkMode } = useContext(NxtwatchContext);
  const [menu, setMenu] = useState<boolean>(false);

  const menuFunc = () => {
    setMenu((prevState) => !prevState);
  };

  const logoutFunc = () => {
    Cookies.remove("jwt_token");
    props.navigate("/login");
    localStorage.removeItem("savedVideosList");
  };
  const closeFunc = () => {
    setMenu(false);
  };

  const sidebarBg = darkMode ? "sidebar-dark-bg" : "sidebar-light-bg";
  const buttonsBg = darkMode ? "button-dark-bg" : "button-light-bg";
  const logoutBg = darkMode ? "darkLogout" : "logout";
  const closeBg = darkMode ? "darkClose" : "close";
  const menuBg = darkMode
    ? "menuStyle sidebar-dark-bg"
    : "menuStyle sidebar-light-bg";
  const linkColor = darkMode ? "linkStyle-dark-Font " : "linkStyle-light-Font";

  return (
    <>
      <div className={`navbar ${sidebarBg}`}>
        <button
          type="button"
          className={`sm-logout ${buttonsBg}`}
          onClick={darkModeFunc}
          aria-label="dark-mode-btn"
        >
          {darkMode ? (
            <IoSunnyOutline className="sun" />
          ) : (
            <FaMoon className="moon" />
          )}
        </button>

        <img
          className="profile-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <button onClick={logoutFunc} type="button" className={`${logoutBg}`}>
          Logout
        </button>
      </div>
      {/* SMALL DEVICES NAVBAR */}
      <div className={`sm-navbar ${sidebarBg}`}>
        <img
          className="nxtWatch-sm-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <div>
          <button
            type="button"
            aria-label="theme-Changer"
            className={`sm-logout ${buttonsBg}`}
            onClick={darkModeFunc}
          >
            {darkMode ? (
              <IoSunnyOutline className="sunny" />
            ) : (
              <FaMoon className="moonny" />
            )}
          </button>
          <button
            type="button"
            aria-label="menu"
            className={`sm-logout ${buttonsBg}`}
            onClick={menuFunc}
          >
            <FaAlignJustify className={darkMode ? "sunny" : "moonny"} />
          </button>

          <button
            onClick={logoutFunc}
            aria-label="logout"
            type="button"
            className={`sm-logout ${buttonsBg}`}
          >
            <IoIosLogOut className={darkMode ? "sunny" : "moonny"} />
          </button>
          {menu && (
            <div className={menuBg}>
              <ul className="listStyle">
                <li>
                  <Link to="/" className={`linkStyle ${linkColor}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className={`linkStyle ${linkColor}`}>
                    Trending
                  </Link>
                </li>
                <li>
                  <Link to="/gaming" className={`linkStyle ${linkColor}`}>
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link to="/saved-videos" className={`linkStyle ${linkColor}`}>
                    Saved Videos
                  </Link>
                </li>
                <button
                  onClick={closeFunc}
                  aria-label="close"
                  className={`sm-logout ${closeBg}`}
                >
                  close
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(Navbar);
