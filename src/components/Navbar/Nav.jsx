import React from 'react'
import "./nav.css"
import Logo from "../../images/Vector.png"
import Logo2 from "../../images/coolicon.png";

export default function Nav() {
  return (
    <header className="navbar">
      <p className="leftlogo">
        <img src={Logo} alt="" />
      </p>
      <div className="rightnav">
        <p className="backgLogo">
          <img src={Logo2} alt="" />
        </p>
        <div className="text">
          <p className="text1">Day 1</p>
          <p className='text2'>of 5</p>
        </div>
      </div>
    </header>
  );
}
