import styled from "styled-components";
import React from "react";
import StartTitle from "../svg/StartTitle";

const Wrapper = styled.div`
  position: relative;
  line-height: 1em;
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 63.2vw;
  max-width: 225px;
  height: 18.6vh;
  max-height: 180px;
  font-size: 34px;
  @media screen and (max-width: 360px) {
    font-size: 26px;
  }

  @media screen and (max-height: 550px) {
    font-size: 20px;
  }
  @media screen and (max-height: 350px) {
    font-size: 14px;
  }

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
  width: 70%;
  text-align: left;
  z-index: 3;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  margin-top: -5%;
  text-align: center;
  width: min-content;
`;
const TitleWrapper = styled.div`
  position: absolute;
  height: inherit;
  width: 100%;
  top: 0;
  z-index: 2;
`;

const TestTitleCallout = (props) => {
  return (
    <Wrapper className={props.className}>
      <TitleWrapper>
        <StartTitle />
      </TitleWrapper>
      <TextWrapper>
        <Text>{props.text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default TestTitleCallout;
