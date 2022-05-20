import React from 'react'
import { fadeInUp} from "react-animations";
import styled, { keyframes } from "styled-components";
import stroke from "../../images/buttonstroke.png";


export default function Button() {
  return (
    <FadeDiv className="button">
      <p>Play The Game</p>
      <img src={stroke} alt="" />
    </FadeDiv>
  );
}


const FadeAnimation = keyframes`${fadeInUp}`;


const FadeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ecab03;
  border: none;
  box-shadow: none;
  font-size: 14px;
  width: 225px;
  font-family: "Inter";
  font-weight: 600;
  z-index: 3;
  animation: 2s ${FadeAnimation};
`;