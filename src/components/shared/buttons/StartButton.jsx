import React, { useContext } from "react";
import { ProgressContext } from "../../../contexts/ProgressContext";
import Button from "./Button";

const StartButton = (props) => {
  const { setNext } = useContext(ProgressContext);

  const onStart = () => {
    setTimeout(() => setNext(), 300);
  };

  return <Button text={props.text} onClick={onStart} color={props.color} />;
};

export default StartButton;
