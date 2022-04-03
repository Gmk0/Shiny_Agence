import styled from "styled-components";
import { colors } from "../../StyleGlobal/GlobalStyle";

export const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`;

export const ErrorTitle = styled.h1`
  font-weight: 300;
`;
export const Illustration = styled.img`
  max-width: 800px;
`;
export const ErrorSubtiltle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;
