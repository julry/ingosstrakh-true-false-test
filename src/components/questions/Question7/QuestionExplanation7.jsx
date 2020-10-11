import React from "react";
import styled from "styled-components";
import SharpCallout from "../../shared/callouts/SharpCallout";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import ExplanationWrapper from "../../ExplanationWrapper";

const FirstDescription = styled(SharpCallout)`
  width: 100vw;
  height: 37.5vh;
  font-size: 14px;
  margin: 12vh 0 17vh;

  @media screen and (min-height: 720px) {
    height: 34.5vh;
    font-size: 18px;
    margin-bottom: 21vh;
  }

  @media screen and (max-height: 550px) {
    font-size: 12px;

    @media (max-width: 300px) {
      font-size: 10px;
      line-height: 1em;
      @media (max-height: 350px) {
        font-size: 8px;
      }
    }
  }

  .text-wrapper {
    width: 70vw;
    @media screen and (max-width: 360px) {
      width: 65vw;
    }
    @media screen and (max-height: 550px) {
      width: 53vw;
    }
    @media screen and (max-width: 300px) and (max-height: 350px) {
      padding-right: 7%;
      width: 43vw;
    }
  }

  @media screen and (min-width: 640px) {
    width: 320px;
    margin: 95px 0;

    @media (max-height: 700px) {
      margin: 12vh 0;
      width: 41vh;
      font-size: 14px;
      .text-wrapper {
        width: 32vh;
      }
    }

    @media (max-height: 550px) {
      font-size: 11px;
    }
  }
`;

const QuestionExplanation7 = () => {
  const question = getQuestionById("7");
  return (
    <ExplanationWrapper correct={question.correct}>
      <FirstDescription text={question.description[0]} />
    </ExplanationWrapper>
  );
};

export default QuestionExplanation7;
