import React from "react";
import stroke from "../../images/buttonstroke.png";
import gold from "../../images/gold.png";
import coinleft from "../../images/coinleft.png";
import coinright from "../../images/coinright.png";
import goldLights from "../../images/lights.png";
import star1 from "../../images/star1.png";
import star2 from "../../images/star2.png";
import star3 from "../../images/star3.png";
import starshine1 from "../../images/shine.png";
import { fadeInUp, fadeOutUpBig , merge, fadeOut } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./bottom.css";
import LightBurst from "../lightspin/LightBurst";

export default function Bottom() {
  return (
    <div>
      <FadeDiv className="button">
        <p>Play The Game</p>
        <img src={stroke} alt="" />
      </FadeDiv>
      <div className="goldDiv">
        <img className="goldcoinLeft" src={coinleft} alt="" />
        <img className="goldPot" src={gold} alt="" />
        <img className="goldcoinRight" src={coinright} alt="" />
        {/* <img className="goldLight" src={goldLights} alt="" />
        <img className="goldLight2" src={goldLights} alt="" /> */}
        <img className="star1" src={star1} alt="" />
        <img className="star2" src={star2} alt="" />
        <img className="star3" src={star3} alt="" />
        <ShineDiv className="star4" src={star1} alt="" />
        <ShineDiv className="star4" src={star2} alt="" />
        <ShineDiv className="star4" src={star3} alt="" />
        {/* <div id="grad">
          <LightBurst/>
        </div> */}
      </div>
    </div>
  );
}

const tadaFlip = merge(fadeOut, fadeOutUpBig);
const FadeAnimation = keyframes`${fadeInUp}`;

const ShineAni = keyframes`${tadaFlip}`;

const FadeDiv = styled.div`
  animation: 2s ${FadeAnimation};
`;

const ShineDiv = styled.img`
  animation: 20s ${ShineAni};
`;