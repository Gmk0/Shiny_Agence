import styled from "styled-components";
import { StyledLink } from "../../Components/Header/headerStyle";
import { colors } from "../../StyleGlobal/GlobalStyle";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 60px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;
export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;
export const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;
export const Illustration = styled.img`
  flex: 1;
`;
