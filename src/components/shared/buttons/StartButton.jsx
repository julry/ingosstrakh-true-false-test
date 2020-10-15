import React, { useContext } from "react";
import { ProgressContext } from "../../../contexts/ProgressContext";
import Button from "./Button";
import styled from 'styled-components';
import {reachMetrikaGoal} from "../../../utils/reachMetrikaGoal";

const StyledButton = styled(Button)`
  margin: 0;
`
const StartButton = (props) => {
  const { setNext } = useContext(ProgressContext);

  const onStart = () => {
    reachMetrikaGoal('starttest');
    setTimeout(() => setNext(), 300);
  };

  return <StyledButton text={props.text} onClick={onStart} color={props.color} />;
};

export default StartButton;
