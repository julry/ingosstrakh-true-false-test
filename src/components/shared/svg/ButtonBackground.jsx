import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 11vh;
  width: 45vw;
  max-width: 180px;
  @media screen and (min-width: 640px) {
    width: 140px;
    height: 70px;
    @media (max-height: 700px) {
      height: 9vh;
      width: 19vh;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  height: 9.4vh;
  width: 43.09vw;
  max-width: 173px;
  top: 1.85vw;
  left: 1.5vw;
  z-index: ${(props) => props.index};

  @media screen and (min-width: 500px) {
    top: 8px;
    left: 6px;
  }
  @media screen and (max-height: 320px) {
    top: 2px;
    left: 3px;
  }

  @media screen and (min-width: 640px) {
    height: 64px;
    width: 128px;
    top: 4px;
    left: 9px;
    
    @media (max-height: 700px) {
      height: 7.75vh;
      top: 0.8vh;
      left: 1.44vh;
      width: 16.6vh;
    }
  }
`;

const Border = styled.div`
  position: absolute;
  height: 10.6vh;
  width: 45vw;
  max-width: 180px;
  top: 0.11vh;
  left: 0;

  @media screen and (min-width: 640px) {
    width: 140px;
    height: 67px;
    top: 1px;
    left: 1px;
    @media (max-height: 700px) {
      height: 9vh;
      width: 17vh;
      top: 0;
      left: 1vh;
    }
  }
`;

const BlackBorder = styled(Border)`
  height: 11vh;
  top: 0;
  @media screen and (min-width: 640px) {
    height: 70px;
    left: 0;
    @media (max-height: 700px) {
      height: 9vh;
      width: 19vh;
    }
  }
`;

const ButtonBackground = (props) => {
  const { index, backColor, mainColor } = { ...props };
  return (
    <Wrapper>
      <Background index={index}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="100%"
          viewBox="0 0 280.000000 130.000000"
          preserveAspectRatio="xMidYMid meet"
          fill={backColor}
        >
          <g
            transform="translate(0.000000,130.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M1135 1294 c-16 -2 -70 -9 -120 -15 -402 -49 -784 -212 -930 -396
                    -25 -32 -54 -82 -65 -111 -27 -70 -27 -174 0 -244 89 -238 463 -429 1000 -510
                    115 -18 645 -18 760 0 359 54 642 155 824 293 81 61 149 146 176 217 27 70 27
                    174 0 244 -86 230 -448 421 -957 504 -93 15 -609 29 -688 18z"
            />
          </g>
        </svg>
      </Background>
      <Border>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="100%"
          viewBox="0 0 290.000000 147.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,147.000000) scale(0.100000,-0.100000)"
            fill={mainColor}
            stroke="none"
          >
            <path
              d="M1090 1449 c-63 -10 -131 -20 -150 -22 -19 -2 -51 -9 -70 -15 -19 -6
                -87 -25 -150 -43 -63 -18 -119 -36 -124 -41 -6 -4 -16 -8 -23 -8 -22 0 -254
                -118 -273 -140 -3 -3 -26 -22 -52 -43 -54 -43 -117 -106 -135 -133 -18 -26
                -76 -147 -78 -159 -7 -50 -19 -95 -26 -95 -5 0 -9 -23 -9 -50 0 -64 44 -157
                105 -223 25 -26 45 -52 45 -57 0 -6 6 -10 13 -10 6 -1 30 -19 52 -40 22 -22
                44 -40 49 -40 4 0 25 -13 45 -29 39 -30 214 -117 296 -146 28 -10 54 -22 59
                -26 6 -5 18 -9 28 -9 10 0 26 -4 36 -9 9 -5 51 -19 92 -31 41 -12 85 -26 98
                -31 13 -5 37 -9 53 -9 17 0 38 -4 48 -10 36 -19 84 -22 416 -27 351 -5 335 -6
                575 37 59 10 157 38 180 50 10 6 28 10 39 10 12 0 21 5 21 10 0 6 7 10 17 10
                33 0 221 92 283 140 19 14 56 42 81 61 25 19 65 57 88 84 22 28 49 58 58 67 9
                10 14 21 10 24 -9 9 -73 -33 -96 -62 -24 -31 -89 -78 -150 -110 -25 -14 -53
                -29 -61 -34 -99 -59 -363 -132 -590 -163 -340 -47 -691 -35 -1005 34 -61 13
                -290 87 -325 104 -226 112 -361 223 -427 352 -24 47 -30 73 -30 119 -1 32 3
                65 7 74 5 8 20 39 35 69 30 61 100 141 123 141 9 0 12 3 9 7 -8 7 150 113 168
                113 7 0 23 9 37 19 37 30 315 119 441 142 344 64 851 44 1195 -46 205 -54 397
                -136 524 -223 80 -55 178 -177 178 -221 0 -11 5 -21 11 -23 6 -2 13 -25 16
                -51 5 -41 8 -47 29 -47 22 0 24 4 24 55 0 30 -4 55 -8 55 -4 0 -14 17 -21 38
                -13 36 -96 154 -113 160 -4 2 -8 10 -8 18 0 8 -6 14 -14 14 -8 0 -26 14 -39
                30 -14 17 -30 30 -34 30 -5 0 -15 9 -23 20 -8 11 -18 20 -23 20 -5 0 -39 20
                -76 44 -92 60 -181 104 -276 137 -22 8 -42 16 -45 19 -7 7 -91 34 -170 55 -36
                9 -81 21 -100 26 -19 5 -113 21 -208 34 -217 31 -473 33 -652 4z"
            />
          </g>
        </svg>
      </Border>
      <BlackBorder>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="100%"
          viewBox="0 0 290.000000 152.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M1096 1504 c-311 -41 -601 -138 -796 -265 -98 -64 -211 -183 -248
                            -260 -17 -36 -36 -85 -41 -109 -55 -240 113 -476 454 -636 694 -326 1577 -304
                            2123 53 96 62 224 198 261 275 88 186 54 352 -107 520 -191 200 -526 351 -917
                            414 -142 23 -582 28 -729 8z m798 -113 c418 -68 691 -182 858 -360 36 -38 78
                            -95 94 -127 26 -52 29 -70 29 -154 0 -87 -3 -101 -32 -160 -99 -200 -350 -348
                            -733 -434 -492 -109 -1064 -95 -1454 36 -332 111 -552 299 -595 510 -64 308
                            361 609 974 692 66 9 134 18 150 20 17 2 154 3 305 1 220 -2 301 -7 404 -24z"
            />
          </g>
        </svg>
      </BlackBorder>
    </Wrapper>
  );
};

export default ButtonBackground;
