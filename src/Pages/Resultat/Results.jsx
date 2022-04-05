import React, { useContext } from "react";
import { SurveyContext } from "../../StyleGlobal";
import { useTheme, useFetch } from "../../StyleGlobal/Hools";
import { Loader } from "../../StyleGlobal/GlobalStyle";
import { StyledLink } from "../../Components/Header/headerStyle";
import {
  DescriptionWrapper,
  JobbDescription,
  JobTitle,
  LoaderWrapper,
  ResultsContainer,
  ResultTitle,
} from "./ResultatStyle";

function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0;
    const separator = isFirstParam ? "" : "&";
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
  }, "");
}

const Results = () => {
  const { theme } = useTheme();
  const answers = useContext(SurveyContext);
  const fetchParams = formatFetchParams(answers);
  console.log(fetchParams);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results/?${fetchParams}`
  );
  const resultsData = data?.resultsData;
  if (error) {
    return <span>il y a un probleme</span>;
  }
  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultTitle theme={theme}>
        Les competences dont vous avez besoin :{" "}
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              theme={theme}
              key={`result-title-${index}-${result.title}`}
            >
              {result.title}
              {index === resultsData.length - 1 ? "" : ","}
            </JobTitle>
          ))}
      </ResultTitle>
      <StyledLink $isFullLink to="/Freelances">
        Decouvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobbDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}> {result.title}</JobTitle>
              {result.title}
              <p>{result.description}</p>
            </JobbDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  );
};

export default Results;
