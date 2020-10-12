import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { resolve } from "url";
import { shareImage } from "../../../constants/images";

const StyledButton = styled(Button)`
  text-align: center;
  font-size: 20px;
  text-shadow: 0.5px -0.5px 0px ${(props) => props.color};
  @media screen and (max-height: 750px) {
    font-size: 16px;
  }
  @media screen and (max-height: 550px) {
    font-size: 12px;
    @media screen and (max-width: 300px) {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 640px) {
    font-size: 16px;
    @media (max-height: 700px) {
      font-size: 12px;
    }
  }
`;

const StyledForm = styled.form`
    height: 19vw;
    width: 100%;
`

const ShareButton = (props) => {
  const url = [
    window.location.protocol,
    "//",
    window.location.host,
    window.location.pathname,
  ].join("");

  const image = resolve(url, shareImage);
  const shareText = `Разбираюсь в космической сфере не хуже Илона Маска 😎 Составишь мне конкуренцию? #ingosstart_правда_vs_ложь
`;
  const queryParams = new URLSearchParams();
  queryParams.append("url", url);
  queryParams.append("title", shareText);
  queryParams.append("image", image);
  queryParams.append('description', '#ingosstart_правда_vs_ложь');
  queryParams.append("comment", shareText);

  const link = `http://vk.com/share.php?${queryParams.toString()}`;

  const onShare = () => {
    setTimeout(() => window.open(link, "mywindow"), 300);
  };

  return (
    <StyledForm action={link} target="_blank">
      <StyledButton text={props.text} onClick={onShare} color={props.color} />
    </StyledForm>
  );
};

export default ShareButton;
