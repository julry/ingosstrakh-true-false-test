import React from "react";
import styled from "styled-components";
import SmoothCallout from "../../shared/callouts/SmoothCallout";
import SharpCallout from "../../shared/callouts/SharpCallout";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import ExplanationWrapper from "../../ExplanationWrapper";

const FirstDescription = styled(SmoothCallout)`
  font-size: 18px;
  height: 28.5vh;
  width: 89vw;
  @media screen and (max-height: 550px) {
    font-size: 10px;
    line-height: 1em;
  }
   @media screen and (min-width: 640px) {
    width: 300px;
    height: 190px;

    @media (max-height: 700px) {
      width: 40vh;
      font-size: 14px;
      height: 25vh;
    }

    @media (max-height: 550px) {
      .text-wrapper {
        width: 34vh;
      }
    }
  }
`;

const SecondDescription = styled(SharpCallout)`
  margin-top: 5%;
  width: 84.6vw;
  height: 34.6vh;
  font-size: 18px;
  @media screen and (max-height: 550px) {
    font-size: 12px;

    @media screen and (max-width: 300px) and (max-height: 350px) {
      font-size: 10px;
      line-height: 1em;
    }
  }

  .text-wrapper {
    @media screen and (max-width: 300px) and (max-height: 350px) {
      padding-right: 7%;
      width: 43vw;
    }
  }
  
  @media screen and (min-width: 640px) {
    width: 300px;
    height: 250px;

    @media screen and (max-height: 700px) {
      width: 40vh;
      height: 33vh;
      font-size: 14px;
    }
    @media (max-height: 550px) {
      .text-wrapper {
        width: 33vh;
      }
    }
  }
`;

const QuestionExplanation9 = () => {
  const question = getQuestionById("9");
  return (
    <ExplanationWrapper correct={question.correct}>
      <FirstDescription text={question.description[0]} />
      <SecondDescription text={question.description[1]} />
    </ExplanationWrapper>
  );
};

export default QuestionExplanation9;
