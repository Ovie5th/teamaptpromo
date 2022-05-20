import React from 'react'
import styled from 'styled-components'
import "./light.css"

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
  transform: translateX(180deg);
  width: 200px;
  height: 1050px;
  clip-path: polygon(0 0, 100% 0, 75% 100%, 31% 100%);
  /* clip-path: polygon(35% 0, 67% 1%, 100% 100%, 0 98%); */
  background-image: linear-gradient(
    180.68deg,
    rgba(255, 229, 0, 0.5) -1.18%,
    rgba(255, 230, 9, 0.435) 3.33%,
    rgba(255, 231, 23, 0.335) 10.55%,
    rgba(255, 233, 36, 0.245) 17.77%,
    rgba(255, 234, 47, 0.17) 25.89%,
    rgba(255, 234, 56, 0.11) 34.01%,
    rgba(255, 235, 62, 0.06) 42.13%,
    rgba(255, 236, 67, 0.025) 51.15%,
    rgba(255, 236, 70, 0.005) 60.17%,
    rgba(255, 236, 71, 0) 71.89%
  );
/* 
  background: linear-gradient(
    180.87deg,
    rgba(255, 236, 71, 0) -1.18%,
    rgba(255, 236, 70, 0.005) 3.33%,
    rgba(255, 236, 67, 0.025) 10.55%,
    rgba(255, 235, 62, 0.06) 17.77%,
    rgba(255, 234, 56, 0.11) 25.89%,
    rgba(255, 234, 47, 0.17) 34.01%,
    rgba(255, 233, 36, 0.245) 42.13%,
    rgba(255, 231, 23, 0.335) 51.15%,
    rgba(255, 230, 9, 0.435) 60.17%,
    rgba(255, 229, 0, 0.5) 71.89%
  ); */
`; 

const Wrapper = styled.div`
    z-index: 0;
  position: relative;
  bottom: -27%;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotatemove 45.1s infinite linear;
`;

const RayOne = styled(Ray)`
  transform: rotate(0deg);
  position: absolute;
`;
const Raytwo = styled(Ray)`
  transform: rotate(40deg);
  position: absolute;
`;

const Raythree = styled(Ray)`
  transform: rotate(80deg);
  position: absolute;
`;

const Rayfour = styled(Ray)`
  transform: rotate(120deg);
  position: absolute;
`;

const Rayfive = styled(Ray)`
  transform: rotate(160deg);
  position: absolute;
`;

const Raysix = styled(Ray)`
  transform: rotate(200deg);
  position: absolute;
`;
const RaySeven = styled(Ray)`
  transform: rotate(240deg);
  position: absolute;
`;
const RayEight = styled(Ray)`
  transform: rotate(280deg);
  position: absolute;
`;
const RayNine = styled(Ray)`
  transform: rotate(320deg);
  position: absolute;
`;