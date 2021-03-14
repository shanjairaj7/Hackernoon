import React from "react";

import twitter from "../assets/twitter-new.png";
import github from "../assets/github-new.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/email.png";

const Footer = ({ isDarkTheme }) => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: !isDarkTheme && "rgb(246, 247, 249)",
        color: !isDarkTheme && "#212528",
      }}
    >
      <div className="links">
        <a>
          <strong>Help</strong>
        </a>
        <a>
          <strong>About</strong>
        </a>
        <a>
          <strong>Start Writing</strong>
        </a>
        <a>
          <strong>Sponsor:</strong>
        </a>
        <a>Brand-as-Author</a>
        <a>Sitewide Billboard</a>
        <a>Ad by tag</a>
        <a>Newsletter</a>
        <a>Noonies</a>
        <a>Contact Us</a>
        <a>Terms</a>
        <a>Privacy</a>
        <a>Cookies</a>
        <a>Stories published yesterday</a>
        <a>Leaderboard</a>
        <a>Contributor's Club</a>
        <a>Chrome Extension</a>
      </div>

      <div className="socials">
        <img src={twitter} />
        <img src={github} />
        <img src={facebook} />
        <img src={linkedin} />
        <img src={gmail} />
      </div>
    </div>
  );
};

export default Footer;
