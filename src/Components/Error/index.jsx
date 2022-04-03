import React from "react";
import {
  ErrorSubtiltle,
  ErrorTitle,
  ErrorWrapper,
  Illustration,
} from "./ErrorStyle";

const Error = () => {
  return (
    <>
      <ErrorWrapper>
        <ErrorTitle> Oups ...</ErrorTitle>
        <Illustration src="htpps://github.com/atoulmet/assets/blob/master/404.svg?eaw=true" />
        <ErrorSubtiltle>
          il semblerait que la page vous cherchez n'existe pas
        </ErrorSubtiltle>
      </ErrorWrapper>
    </>
  );
};

export default Error;
