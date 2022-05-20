import React from "react";
import gold from "../../images/gold.png";
import coinleft from "../../images/coinleft.png";
import coinright from "../../images/coinright.png";
import star1 from "../../images/star1.png";
import star2 from "../../images/star2.png";
import star3 from "../../images/star3.png";
import "./bottom.css";

export default function Bottom() {
  return (
    <div>
      <div className="bottomWrapper">
        <img className="leftCoin" src={coinleft} alt="" />
        <img className="goldPot" src={gold} alt="" />
        <img className="rightCoin" src={coinright} alt="" />
        <img className="star1" src={star1} alt="" />
        <img className="star2" src={star2} alt="" />
        <img className="star3" src={star3} alt="" />
        <img className="shootingstar one" src={star3} alt="" />
        <img className="shootingstar two" src={star3} alt="" />
        <img className="shootingstar three" src={star3} alt="" />
        <img className="shootingstar four" src={star3} alt="" />
      </div>
    </div>
  );
}
