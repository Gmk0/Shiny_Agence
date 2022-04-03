import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Survey = () => {



    const {questionNumber}= useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1: questionNumberInt - 1
    const nextQuestionNUmber = questionNumberInt +1 
    return (
        <div>
            <h1>Questionnaire </h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Precedent</Link>
            {questionNumberInt ===10 ? (
                    <Link to="/Results">Resulats</Link>
            ):(    <Link to={`/survey/${nextQuestionNUmber}`}>Precedent</Link>)}
        </div>
    );
};

export default Survey;