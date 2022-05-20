import React from "react";
import stroke from "../../images/buttonstroke.png";
import gold from "../../images/gold.png";
import coinleft from "../../images/coinleft.png";
import coinright from "../../images/coinright.png";
import goldLights from "../../images/lights.png";
import star1 from "../../images/star1.png";
import star2 from "../../images/star2.png";
import star3 from "../../images/star3.png";
import "./bottom.css";

export default function Bottom() {
  return (
    <div>
      <button className="button">
        <p>Play The Game</p>
        <img src={stroke} alt="" />
      </button>
      <div className="goldDiv">
        <img className="goldcoinLeft" src={coinleft} alt="" />
        <img className="goldPot" src={gold} alt="" />
        <img className="goldcoinRight" src={coinright} alt="" />
        <img className="goldLight" src={goldLights} alt="" />
        <img className="star1" src={star1} alt="" />
        <img className="star2" src={star2} alt="" />
        <img className="star3" src={star3} alt="" />
        <div id="grad"></div>
      </div>
    </div>
  );
}
