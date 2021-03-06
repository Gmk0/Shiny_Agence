import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../StyleGlobal/GlobalStyle";

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({ theme }) => (theme === "light" ? "#8186a0" : "#ffffff")};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  ${(props) =>
    props.$isFullLink &&
    `color:white; border-radius:30px;background-color:${colors.primary}`}
`;
export const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeLogo = styled.img`
  height: 70px;
`;
