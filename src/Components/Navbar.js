import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import hackernoonIcon from "../assets/hn-icon.png";
import twitter from "../assets/twitter-new.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/email.png";

import { FaSun, FaMoon } from "react-icons/fa";

import data from "../data.json";

const Navbar = ({ isDarkTheme, changeDarkTheme }) => {
  const [scrollHeight, setScrollHeight] = useState();

  setInterval(() => {
    setScrollHeight(window.pageYOffset);
  }, 1000);

  return (
    <>
      {scrollHeight > 500 ? (
        <div
          className="scroll__nav"
          style={{ backgroundColor: isDarkTheme && "#00ff00" }}
        >
          <div className="left">
            <img className="logo" src={hackernoonIcon} />
            <h1>
              {data.title} by{" "}
              <a href={data.profile.adLink} target="_blank">
                @{data.profile.handle}
              </a>
            </h1>
          </div>

          <div className="right">
            <img src={twitter} />
            <img src={facebook} />
            <img src={linkedin} />
            <img src={gmail} />
          </div>
        </div>
      ) : (
        <div className="nav">
          <div
            className="navbar"
            style={{ backgroundColor: isDarkTheme && "rgb(0, 187, 0)" }}
          >
            <div className="navbar__container">
              <div className="logo">
                <img src={logo} />
              </div>

              <div className="links">
                <div className="search">
                  <input placeholder="Search..." />
                  <img src={searchIcon} />
                </div>

                <button
                  className="primary__nav__button"
                  style={{ color: isDarkTheme && "white" }}
                >
                  Start Writing
                </button>
                <button
                  className="secondary__nav__button"
                  style={{ color: isDarkTheme && "white" }}
                >
                  Log in
                </button>

                <div className="toggle__theme">
                  {isDarkTheme ? (
                    <FaMoon
                      className="icon"
                      onClick={() => changeDarkTheme()}
                      style={{ color: isDarkTheme && "white" }}
                    />
                  ) : (
                    <FaSun
                      className="icon"
                      onClick={() => changeDarkTheme()}
                      style={{ color: isDarkTheme && "white" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="announcement__bar"
            style={{ color: isDarkTheme && "red" }}
          >
            <a>Read</a>
            <a>Top Stories</a>
            <a>Write</a>
            <a>Listen</a>
            <a>Advertise</a>
            <a>About</a>
            <a>Tech companies</a>
            <a>Careers</a>
            <a>Slogging</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
