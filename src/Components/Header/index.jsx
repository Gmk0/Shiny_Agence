import React from "react";
import { Link } from "react-router-dom";
import DarkLogo from "../../assets/dark-logo.png";
import LightLogo from "../../assets/dark-logo.png";
import { useTheme } from "../../StyleGlobal/Hools";
import { HomeLogo, StyledLink } from "./headerStyle";
import { NavContainer } from "./headerStyle";
const Header = () => {
  const { theme } = useTheme();
  return (
    <>
      <NavContainer>
        <Link to="/">
          <HomeLogo src={theme === "light" ? DarkLogo : LightLogo} />
        </Link>
        <div>
          <StyledLink theme={theme} to="/">
            ACCUEIL
          </StyledLink>
          <StyledLink theme={theme} to="/Freelances">
            Profils
          </StyledLink>
          <StyledLink $isFullLink to="/Survey/1">
            Faire le test
          </StyledLink>
        </div>
      </NavContainer>
    </>
  );
};

export default Header;
