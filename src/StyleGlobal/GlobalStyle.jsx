import styled, { createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family:'Trebuchet MS', Helvetica, sans-serif;
    }

    body{
        margin:0;
       
    }

`;

export const colors = {
  primary: "#5843E4",
  secondary: "#8186A0",
  backgroundLight: "#F9F9FC",
};
