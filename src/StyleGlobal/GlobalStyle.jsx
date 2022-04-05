import styled, { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./index";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family:'Trebuchet MS', Helvetica, sans-serif;
    }

    body{
        background-color:${({ isDarkMode }) =>
          isDarkMode ? "#2F2E41" : "white"};
        margin:0;
        
       
    }

`;

export const colors = {
  primary: "#5843E4",
  secondary: "#8186A0",
  backgroundLight: "#F9F9FC",
  backgroundDark: "#4f4c6b",
  dark: "#2F2E41",
};

const rotate = keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg)
    }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

export const GlobalStyles22 = () => {
  const { theme } = useContext(ThemeContext);
  return <GlobalStyle isDarkMode={theme === "dark"} />;
};
