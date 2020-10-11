import React from "react";
import styled from "styled-components";
import SmoothComment from "../svg/SmoothComment";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 92vw;
  max-width: 360px;
  line-height: 1em;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const CalloutWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 2;
`;

const TextWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-right: 14%;
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 300px;
  text-align: left;
  z-index: 3;
  @media screen and (max-width: 360px) {
    width: 70vw;
  }
  @media screen and (max-height: 550px) {
    width: 55vw;
    @media screen and (max-width: 300px) {
      width: 50vw;
    }
    @media screen and (max-width: 300px) and (max-height: 350px) {
      padding-right: 7%;
      width: 43vw;
    }
  }
`;

const Text = styled.p`
  margin-top: -25%;
`;

const SmoothCallout = (props) => {
  return (
    <Wrapper className={props.className}>
      <CalloutWrapper>
        <SmoothComment />
      </CalloutWrapper>
      <TextWrapper className={"text-wrapper"}>
        <Text>{props.text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default SmoothCallout;
