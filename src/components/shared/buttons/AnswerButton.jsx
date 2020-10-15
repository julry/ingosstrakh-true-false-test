import React, { useContext } from "react";
import { ProgressContext } from "../../../contexts/ProgressContext";
import Button from "./Button";
import {AnswerTypes} from "../../../answerTypes.config";
import {reachMetrikaGoal} from "../../../utils/reachMetrikaGoal";

const AnswerButton = (props) => {
  const { setExplanation, setScore, setAnswer } = useContext(ProgressContext);

  const onExplanation = () => {
    let goalName = 'q'+props.id;
    props.text === props.correct && setScore((prev) => prev + 1);
    if (props.text=== AnswerTypes.Truth){
        goalName+='true'
    }
    else { goalName+='false'}
    reachMetrikaGoal(goalName);
    setAnswer(props.text);
    setTimeout(() => setExplanation(), 300);
  };

  return (
    <Button text={props.text} onClick={onExplanation} color={props.color} />
  );
};

export default AnswerButton;
