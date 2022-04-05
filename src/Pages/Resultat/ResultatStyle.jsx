import styled from "styled-components";

import { colors } from "../../StyleGlobal/GlobalStyle";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

export const ResultTitle = styled.h2`
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;
export const DescriptionWrapper = styled.div`
  padding: 60px;
`;
export const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === "light" ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`;
export const JobbDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === "light" ? colors.secondary : "#ffffff")};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
