import React from "react";
import SharpComment from "../svg/SharpComment";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 92vw;
  max-width: 360px;
  line-height: 1em;
  z-index: 1;
  color: black;
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
  display: flex;
  height: 100%;
  align-items: center;
  text-align: left;
  z-index: 3;
  width: 80%;
  max-width: 250px;
  margin: 0 auto;
  @media screen and (max-width: 360px) {
    width: 70vw;
  }
  @media screen and (max-height: 550px) {
    width: 47vw;
    @media screen and (max-width: 300px) {
      width: 50vw;
    }
  }
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 53.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  margin-top: -15%;
  @media screen and (max-height: 550px) {
    margin-top: -20%;
  }
  @media screen and (max-width: 320px) {
    margin-top: -15%;
  }
  
   @media screen and (min-width:640px) and (max-height: 500px) {
      margin-top: -16%;
   }
`;
const SharpCallout = (props) => {
  return (
    <Wrapper className={props.className}>
      <CalloutWrapper>
        <SharpComment />
      </CalloutWrapper>
      <TextWrapper className={"text-wrapper"}>
        <Text>{props.text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default SharpCallout;
