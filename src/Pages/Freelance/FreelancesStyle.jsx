import styled from "styled-components";

import { colors } from "../../StyleGlobal/GlobalStyle";

export const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 35=0px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;
export const PageSubtile = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;
