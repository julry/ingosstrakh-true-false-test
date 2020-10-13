import React from "react";
import styled from "styled-components";
import QuestionCallout from "./shared/callouts/QuestionCallout";
import AnswerButton from "./shared/buttons/AnswerButton";
import { AnswerTypes } from "../answerTypes.config";
import { ColorTypes } from "../colorTypes.config";

const Wrapper = styled.div`
  background: #1f49b6;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const ImageBackground = styled.div`
  position: absolute;
  height: 45%;
  right: 0;
  top: 0;
  left: 0;
  background-color: white;
`;
const ImageWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: 45%;
  width: 100%;
  @media screen and (max-width: 640px) {
  height: 55%;
  }
`;
const Image = styled.img`
  z-index: 0;
  object-fit: contain;
  height: auto;
  width: 100%;
`;

const Question = styled(QuestionCallout)`
  font-size: 16px;
  width: 90vw;
  max-width: 320px;
  height: 28vh;
  max-height: 222px;
  margin-top: -15vh;

  @media screen and (min-height: 750px) {
    font-size: 18px;
    margin-top: -10vh;
  }

  @media screen and (max-width: 320px) {
    width: 240px;
    height: 170px;
  }

  @media screen and (max-height: 550px) {
    font-size: 12px;
    width: 180px;
    height: 130px;
  }

  @media screen and (min-width: 640px) {
    height: 190px;
    font-size: 22px;
    line-height: 0.9em;
    width: 300px;
    margin-top:-10vh;

    @media (max-height: 700px) {
      height: 29.5vh;
      width: 38vh;
      font-size: 18px;
    }
    @media (max-height: 550px) {
      font-size: 12px;
    }
  }
`;

const ButtonWrapper = styled.div`
  height: fit-content;
  width: 100%;
`;

const QuestionWrapper = (props) => {
  const { question, image } = props;
  return (
    <Wrapper>
      <ImageBackground />
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <Question text={question.text} />
      <ButtonWrapper>
        <AnswerButton
          text={AnswerTypes.Truth}
          correct={question.correct}
          color={ColorTypes.Truth}
        />
        <AnswerButton
          text={AnswerTypes.Falsity}
          correct={question.correct}
          color={ColorTypes.Falsity}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default QuestionWrapper;
