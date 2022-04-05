import styled from "styled-components";

import { colors } from "../../StyleGlobal/GlobalStyle";

export const CardsContainer = styled.div`
  margin: 60px;
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;
export const PageSubtile = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
