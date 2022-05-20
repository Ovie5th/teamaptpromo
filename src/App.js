import './App.css';
import Bottom from './components/bottomContent/Bottom';
import Nav from './components/Navbar/Nav';
import Content from './components/textcontent/Content';
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import img from "./images/background.jpeg"
require('typeface-poppins');
require('typeface-inter');

function App() {
  return (
    <Wrapper>
      <FadeDiv>
        <Nav />
        <Content />
        <Bottom />
      </FadeDiv> 
    </Wrapper>
     
  );
}

export default App;

const FadeAnimation = keyframes`${fadeInUp}`;

const FadeDiv = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* animation: 4s ${FadeAnimation}; */
`;

const Wrapper = styled.main`
 background-image: url(${img});
`