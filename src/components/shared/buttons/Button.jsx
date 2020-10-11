import React, { useState } from "react";
import styled from "styled-components";
import ButtonBackground from "../svg/ButtonBackground";

const Wrapper = styled.div`
  margin-bottom: 4vh;
  font-size: 25px;
  position: relative;
  text-shadow: 0.5px -1px 0px ${(props) => props.color};
  color: ${(props) => props.textColor};
   &:hover{
      cursor: pointer;
    }
      }
    @media screen and (max-height:550px){
    font-size: 15px;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 11;
`;

const Button = (props) => {

  const INITIAL_STATE= {
    main: props.color,
    back: '#fff',
    text: '#000',
    index: 0
  }
  const [mainColor, setMainColor] = useState(INITIAL_STATE.main);
  const [backColor, setBackColor] = useState(INITIAL_STATE.back);
  const [textColor, setTextColor] = useState(INITIAL_STATE.text);
  const [index, setIndex] = useState(INITIAL_STATE.index);

  const resetColors = () => {
    setMainColor(INITIAL_STATE.main);
    setBackColor(INITIAL_STATE.back);
    setTextColor(INITIAL_STATE.text);
    setIndex(INITIAL_STATE.index);
  }
  const changeColors = () => {
    const main = mainColor;
    if (main === INITIAL_STATE.main) {
      setMainColor(backColor);
      setBackColor(main);
      setTextColor("#fff");
      setIndex(10);
    }
    else {
      resetColors();
    }
  };

  const onChange = () => {
    if (!!props.onClick) {
      changeColors();
      props.onClick();
    }
  };

  return (
    <Wrapper
      onClick={onChange}
      onBlur={resetColors}
      className={props.className}
      color={props.color}
      textColor={textColor}
    >
      <ButtonBackground
        mainColor={mainColor}
        backColor={backColor}
        index={index}
      />
      <TextWrapper>
        <p>{props.text}</p>
      </TextWrapper>
    </Wrapper>
  );
};
export default Button;
