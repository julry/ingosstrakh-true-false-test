import React from "react";
import { introImage } from "../constants/images";
import Logo from "./shared/svg/Logo";
import styled from "styled-components";
import QuestionCallout from "./shared/callouts/QuestionCallout";
import SharpCallout from "./shared/callouts/SharpCallout";
import StartButton from "./shared/buttons/StartButton";
import { ColorTypes } from "../colorTypes.config";
import TestTitleCallout from "./shared/callouts/TestTitleCallout";

const Wrapper = styled.div`
  height: 100%;
`;

const ImagesWrapper = styled.div`
  position: relative;
  padding-top: 2vh;
  height: 30%;
`;
const ImageBackground = styled.div`
  position: absolute;
  height: 30.5vh;
  right: 0;
  top: 0;
  left: 0;
  background-color: white;
  @media screen and (min-width: 640px) {
    height: 35%;
  }
`;
const LogoWrapper = styled.div`
  width: 58.6vw;
  max-width: 200px;
  height: 2.45vh;
  max-height: 30px;
  position: absolute;
  top: 6vh;
  left: 0;
  z-index: 4;
  @media screen and (min-width: 640px) {
    height: 14px;
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 10.45vh;
  height: 27vh;
  z-index: 0;
  width: 100%;
  max-width: 400px;
  @media screen and (min-width: 640px) {
    top: 56px;
    height: initial;
  }
`;
const Image = styled.img`
  width: inherit;
  height: inherit;
  @media screen and (max-width:640px) {
     display: none;
  }
`;

const TitleWrapper = styled.div`
  width: fit-content;
  margin: -15vh auto 0;

  @media screen and (min-width: 640px) {
    margin-top: -1vh;
    @media (max-height: 700px) {
      margin-top: -4vh;
    }
    @media (max-height: 550px) {
      margin-top: -2vh;
    }
  }
`;

const DescriptionField = styled(SharpCallout)`
  font-size: 19px;
  height: 32.86vh;
  max-height: 290px;
  max-width: 320px;
  width: 89.7673vw;
  
  @media screen and (max-height: 750px) {
    height: 39.86vh;
  }
  
  @media screen and (max-width: 360px) {
    height: 36.06vh;
    max-width: 280px;
    max-height: 240px;
    font-size: 14px;
  }
  @media screen and (max-height: 550px) {
    font-size: 10px;
  }
  @media screen and (max-height: 350px) {
    font-size: 8px;
  }
  .text-wrapper {
    width: 100%;
    max-width: 270px;
    @media screen and (max-width: 360px) {
      width: 65vw;
    }
  }

  @media screen and (min-width: 640px) {
    height: 235px;
    width: 275px;
    font-size: 16px;
    .text-wrapper {
      width: 230px;
    }
    @media (max-height: 700px) {
      height: 35vh;
      width: 40vh;
      font-size: 14px;
      .text-wrapper {
        width: 34vh;
        line-height: 0.9em;
      }
    }

    @media (max-height: 500px) {
      font-size: 12px;
      .text-wrapper {
        width: 33vh;
      }
    }
  }
`;

const MotivationText = styled.p`
  color: white;
  margin: -10vh 0 5vh 60%;
  font-size: 20px;
  @media screen and (max-height: 550px) {
    font-size: 15px;
  }
  @media screen and (max-height: 350px) {
    font-size: 12px;
  }
  @media screen and (min-height: 850px) {
    margin-top: -7vh;
  }

  @media screen and (min-width: 640px) {
    margin: -65px 0 45px 190px;
    font-size: 18px;

    @media (max-height: 700px) {
      margin: -11vh 0 8vh 25vh;
      font-size: 16px;
    }
    @media (max-height: 550px) {
      margin: -11vh 0 3vh 25vh;
      font-size: 14px;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Intro = () => {
  return (
    <Wrapper>
      <ImageBackground />
      <ImagesWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ImageWrapper>
          <Image src={introImage} />
        </ImageWrapper>
      </ImagesWrapper>
      <TitleWrapper>
        <TestTitleCallout text={"Правда vs Ложь"} />
      </TitleWrapper>
      <DescriptionField
        text={
          "Ингосстрах собрал для тебя 11 фактов о космической сфере. Угадаешь, какие из них правдивы? Если успешно пройдешь тест, то будут все шансы составить конкуренцию Илону Маску"
        }
      />
      <MotivationText>Не упусти эту возможность!</MotivationText>
      <ButtonWrapper>
        <StartButton text={"Начать"} color={ColorTypes.Common} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Intro;
