import styled from "styled-components";
import { colors } from "../../StyleGlobal/GlobalStyle";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

export const NightModeButton = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;
