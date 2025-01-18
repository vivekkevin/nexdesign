import React, { useState, useEffect } from 'react'; // Import useEffect here
import styled from 'styled-components';
import homeImage1 from '../assets/home_1.png';
import homeImage2 from '../assets/home_2.png';
import homeImage3 from '../assets/home_3.png';
import backgroundMusic from '../assets/Sound.mp3';



// Styled Components for Hero Section
const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ bgImage }) => `url(${bgImage})`} no-repeat center center;
  background-size: cover; /* Ensures full-screen coverage */
  background-attachment: fixed; /* Keeps image fixed on desktop screens */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media (max-width: 1440px) and (min-width: 1281px) {
  background-size: fixed;
  background-attachment: scroll;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
  background-size: fixed;
  background-attachment: scroll;
  }
  @media (max-width: 991px) and (min-width: 425px) {
  background-size: fixed;
  background-attachment: scroll;
  }
  @media (max-width: 424px) and (min-width: 320px) {

  }
`;


// Center Container for Text Elements
const CenterTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 425px) {

  }
  @media (max-width: 424px) and (min-width: 320px) {
    position: relative;
    top: 18%;
    left: unset;
    transform: none;
    margin-top: 20px;
    order: 3;
  }
`;


// Outer Yellow Circle
const YellowCircle = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  width: 27vw;
  height: 30vw;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.darkYellow};
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) and (min-width: 1281px) {
    top: 73%;
    width: 30vw;
    height: 30vw;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    top: 73%;
    width: 30vw;
    height: 30vw;
  }
  @media (max-width: 991px) and (min-width: 425px) {
    top: 80%;
    width: 50vw;
    height: 50vw;
  }
  @media (max-width: 424px) and (min-width: 320px) {
    top: 83%;
    width: 50vw;
    height: 50vw;
  }
`;


// Inner Gray Circle
const GrayCircle = styled.div`
  width: 75%;
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
  @media (max-width: 1440px) and (min-width: 1281px) {
    width: 70%;
    height: 80%;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    width: 70%;
    height: 80%;
  }
  @media (max-width: 991px) and (min-width: 425px) {
    padding-bottom: 5%;
    position: absolute;
    top: 10%;
    width: 75%;
    height: 90%;
  }
  @media (max-width: 424px) and (min-width: 320px) {
    padding-bottom: 5%;
  }
`;


// HELLO! Text Styling
const TopText = styled.h1`
  position: absolute;
  top: 25%;
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

  @media (max-width: 1440px) and (min-width: 1281px) {
    position: absolute;
    top: 25%;
    font-size: 3.2vw; /* Larger size for small screens */
    line-height: 0.05vw;
    -webkit-text-stroke: 0.05vw #ffffff; /* Increase stroke width for smaller screens */
    text-stroke: 0.1vw #ffffff;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    position: absolute;
    top: 32%;
    font-size: 4vw; /* Larger size for small screens */
    line-height: 0.05vw;
    -webkit-text-stroke: 0.1vw #ffffff; /* Increase stroke width for smaller screens */
    text-stroke: 0.1vw #ffffff;
  }
  @media (max-width: 991px) and (min-width: 425px) {
    position: absolute;
    top: 13%;
    font-size: 6vw; /* Larger size for small screens */
    line-height: 5vw;
    -webkit-text-stroke: 0.1vw #ffffff; /* Increase stroke width for smaller screens */
    text-stroke: 0.1vw #ffffff;
  }
  @media (max-width: 424px) and (min-width: 320px) {
    font-size: 8vw; 
    line-height: 15vw;
    -webkit-text-stroke: 0.1vw #ffffff;
    text-stroke: 0.01vw #ffffff;
  }
`;

// Folks Text Styling
const BottomText = styled.h2`
  font-size: 2vw; /* Base responsive size */
  line-height: 17vw;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* Semi-bold for visual hierarchy */
  color: #ffffff;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding-bottom: 0.5rem;

  @media (max-width: 1440px) and (min-width: 1281px) {
    font-size: 2vw;
    line-height: 23vw;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    font-size: 3vw;
    line-height: 18vw;
  }
  @media (max-width: 991px) and (min-width: 425px) {
    font-size: 4vw; 
    line-height: 54vw;
  }
  @media (max-width: 424px) and (min-width: 320px) {
    font-size: 4vw; 
    line-height: 15vw;
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
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    transition: background 0.3s ease-in-out;
    background: #ffffff; /* Default color */
  }

  .line.active {
    background: #f0a500; /* Active tab color */
  }

  .line:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 425px) {
    position: relative;
    top: 10%;
    left: unset;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
    .line {
      width: 2rem;
      height: 0.5rem;
      margin: 0 5px;
    }
  }
  @media (max-width: 424px) and (min-width: 320px) {
    position: relative;
    top: 26%;
    left: unset;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
    z-index: 1;
    .line {
      width: 2rem;
      height: 0.5rem;
      margin: 0 5px;
    }
  }
  
`;



const Title = styled.h1`
  font: normal normal normal 45px/68px Poppins;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserratBold};
  margin: 0;
  font-weight: 100; /* Use regular font weight */
  font-style: normal; /* Regular style */
  margin-top: 150px;

  @media (max-width: 1440px) and (min-width: 1281px) {
    font: normal normal normal 32px/68px Poppins;
    margin-top: 250px;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    margin-top: 300px;
  }
  @media (max-width: 991px) and (min-width: 425px) {
    margin-top: 400px;
    font: normal normal normal 32px/68px Poppins;
  }
  @media (max-width: 424px) and (min-width: 320px) {
    margin-top: 100px;
    font: normal normal normal 22px/68px Poppins;
    z-index: 0;
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

  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    audio.volume = 0; // Set volume to 30%
    audio.loop = false; // Enable looping
  
    // Play the audio and handle potential errors
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.error('Failed to play:', err);
      }
    };
  
    playAudio();
  
    // Cleanup function to pause the music when the component unmounts
    return () => {
      audio.pause();
    };
  }, []);
  
  

  // Function to Toggle Background and Text
  const handleSlideChange = (index) => {
    setCurrentIndex(index);
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
      <VerticalButton>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`line ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </VerticalButton>
    </HeroContainer>
  );
};

export default Hero;
