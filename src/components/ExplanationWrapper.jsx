import React, { useContext } from "react";
import styled from "styled-components";
import { ProgressContext } from "../contexts/ProgressContext";
import { ColorTypes } from "../colorTypes.config";
import Next from "./shared/svg/Next";
import ExplanationTitle from "./ExplanationTitle";
import { questions } from "../questions.config";
import { reachMetrikaGoal } from "../utils/reachMetrikaGoal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-top: 5vh;
`;

const Background = styled.div`
  background: ${(props) => props.backgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ButtonWrapper = styled.div`
  z-index: 10;
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: flex-end;
  margin-right: 20vw;
  margin-top: -8vh;
  @media screen and (min-width: 640px) {
    margin-right: 90px;
    @media (max-height: 700px) {
      margin-right: 10vh;
    }
  }
`;

const ExplanationWrapper = (props) => {
  const { setNext, answer } = useContext(ProgressContext);
  const isCorrect = answer === props.correct;
  const color = isCorrect ? ColorTypes.Truth : ColorTypes.Falsity;
  const onNext = () => {
    if (+props.id === questions.length) {
      reachMetrikaGoal("finishtest");
    }
    setNext();
  };

  return (
    <Wrapper>
      <Background backgroundColor={color} />
      <ExplanationTitle text={props.correct} color={color} />
      {props.children}
      <ButtonWrapper onClick={onNext}>
        <Next />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ExplanationWrapper;
