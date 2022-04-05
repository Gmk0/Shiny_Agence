import React from "react";
import { useTheme } from "../../StyleGlobal/Hools";
import error from "../../assets/404.svg";
import {
  ErrorSubtiltle,
  ErrorTitle,
  ErrorWrapper,
  Illustration,
} from "./ErrorStyle";

const Error = () => {
  const { theme } = useTheme();
  return (
    <>
      <ErrorWrapper theme={theme}>
        <ErrorTitle theme={theme}> Oups ...</ErrorTitle>
        <Illustration src={error} />
        <ErrorSubtiltle theme={theme}>
          il semblerait que la page vous cherchez n'existe pas
        </ErrorSubtiltle>
      </ErrorWrapper>
    </>
  );
};

export default Error;
