import React from "react";
import styled from "styled-components";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import ExplanationWrapper from "../../ExplanationWrapper";
import SmoothCallout from "../../shared/callouts/SmoothCallout";

const FirstDescription = styled(SmoothCallout)`
  font-size: 18px;
  height: 34.5vh;
  width: 100vw;
  margin: 12vh 0 17vh;

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
  @media screen and (min-height: 720px) {
    height: 34.5vh;
    margin-bottom: 21vh;
  }

  .text-wrapper {
    width: 70vw;
    @media screen and (max-width: 360px) {
      width: 89vw;
    }
    @media screen and (max-height: 550px) {
      width: 77vw;
      @media (min-width: 360px) {
        width: 67vw;
      }
    }
    @media screen and (max-width: 300px) and (max-height: 350px) {
      width: 62vw;
    }

    @media screen and (min-width: 640px) {
      width: 250px;
      @media (max-height: 700px) {
        width: 34vh;
      }
    }
  }

  @media screen and (min-width: 640px) {
    margin: 100px 0 120px;
    height: 250px;
    width: 300px;
    .text-wrapper {
      width: 250px;
    }
    @media (max-height: 700px) {
      width: 41vh;
      margin: 10vh 0 11vh;
      font-size: 15px;

      .text-wrapper {
        width: 34vh;
      }
    }
    @media (max-height: 550px) {
      font-size: 12px;
      margin: 2vh 0 8vh;
    }
  }
`;

const QuestionExplanation11 = () => {
  const question = getQuestionById("11");
  return (
    <ExplanationWrapper correct={question.correct} id={question.id}>
      <FirstDescription text={question.description[0]} />
    </ExplanationWrapper>
  );
};

export default QuestionExplanation11;
