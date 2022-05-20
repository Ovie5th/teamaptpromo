import React from "react";
import styled from "styled-components";
import "./light.css";

export default function LightBurst() {
  return (
    <Wrapper>
      <RayOne> </RayOne>
      <Raytwo></Raytwo>
      <Raythree></Raythree>
      <Rayfour></Rayfour>
      <Rayfive></Rayfive>
      <Raysix></Raysix>
      <RaySeven></RaySeven>
      <RayEight></RayEight>
      <RayNine></RayNine>
    </Wrapper>
  );
}

const Ray = styled.div`
  width: 400px;
  height: 700px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform-origin: center bottom;
  clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%);
  background-image: linear-gradient(
    180.68deg,
    rgba(255, 229, 0, 0) -1.18%,
    rgba(255, 230, 9, 0) 3.33%,
    rgba(255, 231, 23, 0.003) 10.55%,
    rgba(255, 233, 36, 0.005) 17.77%,
    rgba(255, 234, 47, 0.009) 25.89%,
    rgba(255, 234, 56, 0.03) 34.01%,
    rgba(255, 235, 62, 0.05) 42.13%,
    rgba(255, 236, 67, 0.09) 51.15%,
    rgba(255, 236, 70, 0.12) 60.17%,
    rgba(255, 236, 71, 0.2) 71.89%
  );

`;

const Wrapper = styled.div`
  z-index: 0;
  position: relative;
  width: 200px;
  height: 100%;
  bottom: 0;
  transform-origin: center bottom;
  animation: rotatemove 45.1s infinite reverse linear;
`;

const RayOne = styled(Ray)`
  transform: translateX(-50%) rotate(0deg);
`;
const Raytwo = styled(Ray)`
  transform: translateX(-50%) rotate(40deg);
`;

const Raythree = styled(Ray)`
  transform: translateX(-50%) rotate(80deg);
`;

const Rayfour = styled(Ray)`
  transform: translateX(-50%) rotate(120deg);
`;

const Rayfive = styled(Ray)`
  transform: translateX(-50%) rotate(160deg);
`;

const Raysix = styled(Ray)`
  transform: translateX(-50%) rotate(200deg);
`;
const RaySeven = styled(Ray)`
  transform: translateX(-50%) rotate(240deg);
`;
const RayEight = styled(Ray)`
  transform: translateX(-50%) rotate(280deg);
`;
const RayNine = styled(Ray)`
  transform: translateX(-50%) rotate(320deg);
`;
