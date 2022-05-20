import React from 'react'
import Bulb from "../../images/bulb.png"
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./content.css"
import Button from '../button/Button';
export default function Content() {
  return (
    <main className="allContent">
      <FadeIn2 className="topContent">
        Unlock to <span> Power your dreams!</span>
      </FadeIn2>
      <FadeIn2 className="midContent">
        Stand a chance to win
        <span>
          <strong> N3,000,000 </strong> everyday for the next 5 days
        </span>
      </FadeIn2>
      <FadeIn className="bottomContent">
        <h3>🚀 How To Play</h3>
        <div className="topHowto">
          <ol>
            <li>Guess the right combination of numbers</li>
            <li>
              Win <strong>N3,000,000</strong> instantly
            </li>
          </ol>
          <p className="midText">
            Sounds unbelievable? Well, guess right & see for yourself!
          </p>
        </div>
        <div className="bottomInnerContent">
          <p>
            <img src={Bulb} alt="" />
          </p>
          <p className="smallText">
            Think well before you guess. You have only <strong>2 </strong>
            attempts per day and even after you wi, you can come back the next
            day to try for another jackpot!
          </p>
        </div>
      </FadeIn>
      <Button/>
    </main>
  );
}

const FadeAnimation = keyframes`${fadeInUp}`;

const FadeIn = styled.div`
  animation: 1s ${FadeAnimation};
`;

const FadeIn2 = styled.div`
  animation: 2s ${FadeAnimation};
`;