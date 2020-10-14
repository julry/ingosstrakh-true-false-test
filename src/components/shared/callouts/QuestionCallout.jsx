import React from "react";
import styled from "styled-components";
import QuestionField from "../svg/QuestionField";

const Wrapper = styled.div`
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
  z-index: 1;
  white-space: pre-line;
   @media screen and (min-width: 640px) {
    height: 105px;
    font-size: 30px;
    line-height: 0.9em;
    width: 220px;
    
    @media (max-height:700px) {
          height: 13.5vh;
          width: 28vh;
          font-size: 24px;
    }
    @media (max-height:500px) {
        font-size: 18px;
    }
  }
  
`;

const TextWrapper = styled.div`
  position: relative;
  height: inherit;
  width: 82%;
  text-align: left;
  z-index: 3;
  @media screen and (min-width: 640px) {
    
    @media (max-height:700px) {
        width: 80%;
    }
  }
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  margin-top: -5%;
  ${({ styles }) => styles};
`;
const QuestionWrapper = styled.div`
  position: absolute;
  height: inherit;
  width: 100%;
  top: 0;
  z-index: 2;
`;

const QuestionCallout = (props) => {
  return (
    <Wrapper className={props.className}>
      <QuestionWrapper>
        <QuestionField />
      </QuestionWrapper>
      <TextWrapper>
        <Text>{props.text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default QuestionCallout;
