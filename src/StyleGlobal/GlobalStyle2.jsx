import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./index";

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family:'Trebuchet MS', Helvetica, sans-serif;
    }

    body{
        background-color:${({ isDarkMode }) =>
          isDarkMode ? "#2F2E41" : "white"};

        margin:0;
    }

`;

const GlobalStyle2 = () => {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
};

export default GlobalStyle2;
