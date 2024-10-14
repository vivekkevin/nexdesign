import React, { useState } from 'react';
import styled from 'styled-components';
import homeImage1 from '../assets/home_1.png';
import homeImage2 from '../assets/home_2.png';
import homeImage3 from '../assets/home_3.png';



// Styled Components for Hero Section
const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ bgImage }) => `url(${bgImage})`} no-repeat center center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

// Center Container for Text Elements
const CenterTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

// Outer Yellow Circle
const YellowCircle = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 30vw;
  height: 25vw;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.darkYellow};
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adjust position for mobile screens */
  @media (max-width: 768px) {
    top: 85%; /* Move the circle further down */
    width: 50vw;
    height: 50vw;
  }
`;


// Inner Gray Circle
const GrayCircle = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: #2b2b2b;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  padding-bottom: 10%;

  @media (max-width: 768px) {
    padding-bottom: 5%; /* Adjust spacing for smaller screens */
  }
`;


// HELLO! Text Styling
const TopText = styled.h1`
  font-size: 4vw; /* Set a base responsive size */
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #ffffff;
  line-height: 5vw; /* Adjust line height relative to font size */
  text-align: center;
  letter-spacing: 0px;
  margin: 0;

  /* Stroke Properties */
  -webkit-text-stroke: 0.1vw #ffffff; /* Responsive stroke width */
  text-stroke: 0.1vw #ffffff;
  -webkit-text-fill-color: transparent; /* Ensure stroke is visible by removing fill */
  text-fill-color: transparent;

  /* Shadow for Better Emphasis */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 7vw; /* Larger size for small screens */
    line-height: 8vw;
    -webkit-text-stroke: 0.4vw #ffffff; /* Increase stroke width for smaller screens */
    text-stroke: 0.1vw #ffffff;
  }

  @media (max-width: 480px) {
    font-size: 9vw; /* Even larger for very small screens */
    line-height: 10vw;
    -webkit-text-stroke: 0.5vw #ffffff; /* Stroke width adjustment */
    text-stroke: 0.1vw #ffffff;
  }
`;

// Folks Text Styling
const BottomText = styled.h2`
  font-size: 2.5vw; /* Base responsive size */
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* Semi-bold for visual hierarchy */
  color: #ffffff;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 5vw; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 7vw; /* Increase font size for very small screens */
  }
`;




// Style for the Toggle Button
const VerticalButton = styled.div`
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    width: 0.5rem;
    height: 2.5rem;
    background: #ffffff;
    margin: 0.5rem 0;
    opacity: 1;
    border-radius: 0.5rem;
  }

  .line.yellow {
    background: #f0a500;
  }
  .line.light-yellow {
    background: #ffcc3f;
  }

  &:hover {
    .line {
      transform: scaleX(1.2);
      transition: all 0.3s ease;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5vw;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserratBold};
  margin: 0;
  font-weight: 100; /* Use regular font weight */
  font-style: normal; /* Regular style */

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const Hero = () => {
  // Define an array of backgrounds, titles, and subtitles
  const slides = [
    {
      bgImage: homeImage1,
      title: 'We DESIGN',
      subtitle: 'HELLO Folks',
    },
    {
      bgImage: homeImage2,
      title: 'We ANIMATE',
      subtitle: 'WELCOME Everyone',
    },
    {
      bgImage: homeImage3,
      title: 'We IDEATE',
      subtitle: 'KEEP GOING',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track the index of the current slide

  // Function to Toggle Background and Text
  const handleToggle = () => {
    const nextIndex = (currentIndex + 1) % slides.length; // Cycle through the array
    setCurrentIndex(nextIndex); // Update the index to the next one
  };

  return (
    <HeroContainer bgImage={slides[currentIndex].bgImage}>
      {/* Centered Text Container */}
      <CenterTextContainer>
        <Title>{slides[currentIndex].title}</Title>
      </CenterTextContainer>

      {/* Yellow and Gray Circles Positioned at the Bottom */}
      <YellowCircle>
        <GrayCircle>
          <TopText>HELLO!</TopText>
          <BottomText>Folks</BottomText>
        </GrayCircle>
      </YellowCircle>

      {/* Toggle Button */}
      <VerticalButton onClick={handleToggle}>
        <div className="line yellow"></div>
        <div className="line"></div>
        <div className="line light-yellow"></div>
      </VerticalButton>
    </HeroContainer>
  );
};

export default Hero;
