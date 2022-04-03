import React from "react";
import { Link } from "react-router-dom";
import logos from "../../assets/dark-logo.png";
import { HomeLogo, StyledLink } from "./headerStyle";
import { NavContainer } from "./headerStyle";
const Header = () => {
  return (
    <>
      <NavContainer>
        <Link to="/">
          <HomeLogo src={logos} />
        </Link>
        <div>
          <StyledLink to="/">ACCUEIL</StyledLink>
          <StyledLink to="/Freelances">Profils</StyledLink>
          <StyledLink $isFullLink to="/Survey/1">
            Faire le test
          </StyledLink>
        </div>
      </NavContainer>
    </>
  );
};

export default Header;
