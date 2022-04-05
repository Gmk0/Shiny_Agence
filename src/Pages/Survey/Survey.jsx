import React, { useContext } from "react";
import { useFetch, useTheme } from "../../StyleGlobal/Hools";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Loader } from "../../StyleGlobal/GlobalStyle";
import { SurveyContext } from "../../StyleGlobal";
import {
  LinkWrapper,
  QuestionContent,
  QuestionTitle,
  ReplyBox,
  ReplyWrapper,
  SurveyContainer,
} from "./SurveyStyle";

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNUmber = questionNumberInt + 1;
  const { theme } = useTheme();
  const { saveAnswers, answers } = useContext(SurveyContext);

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const surveyData = data?.surveyData;

  if (error) {
    return <span>Oups il y a un probleme</span>;
  }

  return (
    <>
      <SurveyContainer>
        <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
        {isLoading ? (
          <Loader />
        ) : (
          <QuestionContent theme={theme}>
            {surveyData && surveyData[questionNumber]}
          </QuestionContent>
        )}
        {answers && (
          <ReplyWrapper>
            <ReplyBox
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}
              theme={theme}
            >
              OUI
            </ReplyBox>
            <ReplyBox
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}
              theme={theme}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
        )}

        <LinkWrapper theme={theme}>
          <Link to={`/survey/${prevQuestionNumber}`}>Precedent</Link>
          {surveyData && surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNUmber}`}> SUIVANT</Link>
          ) : (
            <Link to="/Results">Resulats</Link>
          )}
        </LinkWrapper>
      </SurveyContainer>
    </>
  );
};

export default Survey;
