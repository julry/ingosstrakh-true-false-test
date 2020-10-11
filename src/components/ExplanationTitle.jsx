import React from "react";
import styled from "styled-components";
import Button from "./shared/buttons/Button";

const Title = styled(Button)`
  &:hover {
    cursor: initial;
  }
`;

const ExplanationTitle = (props) => {
  return <Title text={props.text} color={props.color} />;
};

export default ExplanationTitle;
