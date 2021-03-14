import React, { useEffect, useState } from "react";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import "./scss/style.scss";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(
      localStorage.getItem("isDarkTheme")
        ? localStorage.getItem("isDarkTheme")
        : localStorage.setItem("isDarkTheme", false)
    );
  }, []);

  const changeDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", !isDarkTheme);
  };

  return (
    <div style={{ backgroundColor: isDarkTheme && "#212528" }}>
      <Navbar
        isDarkTheme={isDarkTheme}
        changeDarkTheme={() => changeDarkTheme()}
      />
      <Blog
        isDarkTheme={isDarkTheme}
        changeDarkTheme={() => changeDarkTheme()}
      />
      <Footer
        isDarkTheme={isDarkTheme}
        changeDarkTheme={() => changeDarkTheme()}
      />
    </div>
  );
};

export default App;
