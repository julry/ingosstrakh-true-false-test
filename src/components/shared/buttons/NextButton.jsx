import React from "react";
import Next from "../svg/Next";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 0;
`;

const StyledNext = styled(Next)`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;
const NextButton = () => {
  return (
    <Wrapper>
      <StyledNext />
    </Wrapper>
  );
};

export default NextButton;
