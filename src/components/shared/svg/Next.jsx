import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 8.0586vh;
  width: 18.8vw;
`;

const Background = styled.div`
  position: absolute;
  height: 8vh;
  width: 18.5vw;
  left: 1vw;
  top: 0.2vw;
  @media screen and (min-width: 640px) {
    top: 1px;
    left: 3px;
  }
`;

const Border = styled.div`
  position: absolute;
  height: 8.0586vh;
  width: 18.8vw;
  top: 0.11vh;
  left: 0;
`;

const Next = () => {
  return (
    <Wrapper>
      <Background>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="100%"
          viewBox="0 0 117.000000 108.000000"
        >
          <path
            fillRule="evenodd"
            fill="rgb(255, 255, 255)"
            d="M52.500,-0.000 C69.708,-0.000 86.823,9.424 95.432,23.632 C100.224,31.539 103.000,40.929 103.000,51.000 C103.000,51.182 103.000,51.365 102.999,51.547 C102.952,64.392 99.233,76.513 91.675,85.861 C82.794,96.845 66.877,104.000 52.500,104.000 C38.336,104.000 21.591,97.616 12.724,87.434 C8.705,82.820 3.518,75.910 2.338,69.469 C1.198,63.244 -0.000,57.523 -0.000,51.000 C-0.000,22.833 25.714,-0.000 52.500,-0.000 Z"
          />
        </svg>
      </Background>
      <Border>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="100%"
          viewBox="0 0 117.000000 108.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,108.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M382 1060 c-241 -63 -382 -241 -382 -479 1 -165 43 -264 165 -387
                        131 -132 281 -194 466 -194 118 0 199 23 285 79 111 73 196 184 234 310 25 80
                        27 233 4 312 -54 184 -187 310 -380 359 -104 27 -289 27 -392 0z m291 -5 c107
                        -28 187 -83 262 -180 201 -258 123 -605 -167 -743 -162 -78 -302 -81 -440 -11
                        -54 28 -141 110 -171 163 -66 113 -81 279 -38 406 93 271 326 424 554 365z"
            />
            <path
              d="M465 790 c-18 -29 38 -100 144 -182 l34 -26 -77 -82 c-92 -97 -107
                        -124 -84 -146 24 -24 49 -11 110 59 86 97 128 157 128 180 0 23 -71 94 -164
                        163 -58 44 -80 52 -91 34z"
            />
          </g>
        </svg>
      </Border>
    </Wrapper>
  );
};
export default Next;
