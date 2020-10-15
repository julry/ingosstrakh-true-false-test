import React, { useContext } from "react";
import styled from "styled-components";
import { questions } from "../questions.config";
import { ProgressContext } from "../contexts/ProgressContext";
import SharpCallout from "./shared/callouts/SharpCallout";
import { ColorTypes } from "../colorTypes.config";
import checkResult from "../utils/checkResult";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 5vh 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 22px;
  white-space: pre-line;
`;

const Title = styled.h1`
  font-size: 65px;
  @media screen and (max-height: 750px) {
    font-size: 55px;
  }
  @media screen and (max-height: 550px) {
    font-size: 35px;
  }
`;
const Description = styled(SharpCallout)`
  width: 100%;
  height: 35.06vh;
  font-size: 22px;
  line-height: 1em;
  margin-top: 4vh;
  @media screen and (max-height: 750px) {
    height: 35.06vh;
    font-size: 18px;
  }

  @media screen and (max-height: 550px) {
    font-size: 15px;
    @media screen and (max-width: 300px) {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 640px) {
    width: 300px;
    height: 250px;
    font-size: 16px;
    @media screen and (max-height: 700px) {
      width: 40vh;
      height: 33vh;
      font-size: 13px;
    }
    @media (max-height: 550px) {
      .text-wrapper {
        width: 33vh;
      }
    }
  }
`;


const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Text = styled.p`
  margin-top: 5vh;
  text-align: left;
  max-width: 295px;

  @media screen and (max-width: 300px) {
      font-size: 18px;
  }

  @media screen and (max-height: 550px) {
    font-size: 16px;
    margin-top: 5vh;
    @media screen and (max-width: 300px) {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 640px) {
    @media screen and (max-height: 700px) {
      font-size: 16px;
    }
    @media (max-height: 500px) {
    
      font-size: 14px;
    }
  }
`;

const Link = styled.a`
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Final = () => {
  const { score } = useContext(ProgressContext);
  const total = questions.length;
  const result = checkResult(score);

  const INGOSSTRAKH_VK_LINK = "https://vk.com/ingosstart";

  const onSocialMediaClick = () => {
       reachMetrikaGoal('smm'+ result.success);
  }

  return (
    <Wrapper>
      <Title>
        {score} / {total}
      </Title>
      <Description text={result.text} />
      <result.component text={result.buttonText} color={ColorTypes.Common} />
      <TextWrapper>
        <Text>
          Еще больше интересных фактов {"\n"} в официальной группе{" "}
          <Link target={"_blank"} href={INGOSSTRAKH_VK_LINK} onClick={onSocialMediaClick}>
            Ингосстрах VK
          </Link>
          .
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Final;
