import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { preloadImage } from "../utils/preloadImage";
import { screens } from "../screens.config";
import { ProgressProvider } from "../contexts/ProgressContext";
import { iphone } from "../constants/images";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background: #1f49b6;
  @media screen and (min-width: 640px) {
    max-height: 770px;
    background: #fff;
    width: 51.948vh;
  }
`;
const Image = styled.img`
  display: none;
  @media screen and (min-width: 640px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    height: 770px;
    max-height: 100%;
    width: 400px;
    max-width: 51.948%;
    display: block;
    z-index: 100;
    pointer-events: none;
  }
`;

const ComponentWrapper = styled.div`
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  @media screen and (min-width: 640px) {
    width: 45vh;
    background: #1f49b6;
    max-height: 700px;
    height: 90vh;
    max-width: 375px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
export function ScreenWrapper() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isExplanation, setIsExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);

  const { component, explanation, preloadImages, ...screen } =
    screens[currentScreenIndex] || {};

  const setNext = () => {
    const canSet = currentScreenIndex < screens.length - 1;
    if (canSet) {
      setCurrentScreenIndex(currentScreenIndex + 1);
      setIsExplanation(false);
    }
  };

  const setExplanation = () => {
    const canSet = currentScreenIndex < screens.length - 1;
    if (canSet) {
      setIsExplanation(true);
    }
  };

  useEffect(() => {
    const clears =
      preloadImages && preloadImages.map((img) => preloadImage(img));
    return () => clears && clears.forEach((clear) => clear());
  }, [preloadImages]);

  const Component = isExplanation ? explanation : component || null;

  const progressProviderValue = {
    screen,
    score,
    answer,
    setAnswer,
    setNext,
    setExplanation,
    setCurrentScreenIndex,
    setScore,
  };

  return (
    <Wrapper>
      <ProgressProvider value={progressProviderValue}>
        <Image src={iphone} />
        <ComponentWrapper>
          <Component />
        </ComponentWrapper>
      </ProgressProvider>
    </Wrapper>
  );
}
