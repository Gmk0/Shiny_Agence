import React from "react";
import { useTheme } from "../../StyleGlobal/Hools";
import { FooterContainer, NightModeButton } from "./FooterStyle";

const Footer = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <FooterContainer>
        <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode: {theme === "light" ? "jour" : "nuit"}
        </NightModeButton>
      </FooterContainer>
    </>
  );
};

export default Footer;
