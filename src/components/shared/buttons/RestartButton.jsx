import React, { useContext } from "react";
import { ProgressContext } from "../../../contexts/ProgressContext";
import Button from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  text-align: center;
  font-size: 20px;
  white-space: pre-line;
  margin: 0;
  text-shadow: 0.5px -0.5px 0px ${(props) => props.color};
  @media screen and (max-height: 750px) {
    font-size: 16px;
  }
  @media screen and (max-height: 550px) {
    font-size: 12px;
    @media screen and (max-width: 300px) {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 640px) {
    font-size: 16px;
    @media (max-height: 700px) {
      font-size: 12px;
    }
  }
`;

const RestartButton = (props) => {
  const { setScore, setAnswer, setCurrentScreenIndex } = useContext(
    ProgressContext
  );

  const onRestart = () => {
    setTimeout(() => {
      setScore(0);
      setAnswer(null);
      setCurrentScreenIndex(1);
    }, 300);
  };

  return (
    <StyledButton text={props.text} onClick={onRestart} color={props.color} />
  );
};

export default RestartButton;
