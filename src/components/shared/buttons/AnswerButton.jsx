import React, { useContext } from "react";
import { ProgressContext } from "../../../contexts/ProgressContext";
import Button from "./Button";

const AnswerButton = (props) => {
  const { setExplanation, setScore, setAnswer } = useContext(ProgressContext);

  const onExplanation = () => {
    props.text === props.correct && setScore((prev) => prev + 1);
    setAnswer(props.text);
    setTimeout(() => setExplanation(), 300);
  };

  return (
    <Button text={props.text} onClick={onExplanation} color={props.color} />
  );
};

export default AnswerButton;
