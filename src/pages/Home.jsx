import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Home = () => {
    const theme = useContext(ThemeContext);
  return (
    <div style={{background: theme.background, color: theme.textColor}}>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </div>
  );
};

export default Home;
