import React from "react";
import styled from "styled-components";
import SmoothCallout from "../../shared/callouts/SmoothCallout";
import SharpCallout from "../../shared/callouts/SharpCallout";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import ExplanationWrapper from "../../ExplanationWrapper";

const FirstDescription = styled(SharpCallout)`
  width: 100vw;
  height: 37.5vh;
  font-size: 14px;

  @media screen and (min-height: 720px) {
    height: 34.5vh;
    font-size: 18px;
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
    height: 270px;

    @media screen and (max-height: 700px) {
      width: 40vh;
      height: 33vh;
      font-size: 14px;
      .text-wrapper {
        width: 33vh;
      }
    }
    @media (max-height: 550px) {
    font-size: 11px;
    }
  }
`;

const SecondDescription = styled(SmoothCallout)`
  font-size: 14px;
  width: 60.6vw;
  max-width: 250px;
  height: 27.6vh;
  margin: -13vh 0 14vh 31vw;

  @media screen and (min-height: 720px) {
    width: 72.6vw;
    height: 36.6vh;
    font-size: 18px;
    margin: -32% 0 24% 27%;
    @media (min-width: 400px) {
      margin: -14vh 0 14vh 23vw;
    }
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
    @media screen and (max-width: 360px) {
      width: 50vw;
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
    width: 380px;
    height: 170px;
    margin: -78px 0 110px 67px;
    
    @media (max-height: 700px) {
        margin: -10vh 0 18vh 15vh;
      width: 27vh;
      font-size: 14px;
      height: 18vh;
    }

    @media (max-height: 550px) {
      font-size: 12px;
      width: 32vh;
      height: 22vh;
      .text-wrapper {
        width: 28vh;
      }
    }
  }
`;

const QuestionExplanation10 = () => {
  const question = getQuestionById("10");
  return (
    <ExplanationWrapper correct={question.correct}>
      <FirstDescription text={question.description[0]} />
      <SecondDescription text={question.description[1]} />
    </ExplanationWrapper>
  );
};

export default QuestionExplanation10;
