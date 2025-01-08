import React, { useState } from 'react';
import styled from 'styled-components';
import homeImage1 from '../assets/Nexbg1.png';
import homeImage2 from '../assets/Nexbg2.png';
import homeImage3 from '../assets/Nexbg3.png';
import homeImage4 from '../assets/Nexbg4.png';
import homeImage5 from '../assets/Nexbg5.png';
import homeImage6 from '../assets/Nexbg6.png';


// Styled Components for Hero Section
const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ bgImage }) => `url(${bgImage})`} no-repeat center center;
  background-size: cover; /* Ensures full-screen coverage */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media (max-width: 1024px) {
    background-size: fixed; /* Adjust for smaller screens */
    background-attachment: scroll; /* Prevents fixed positioning on smaller devices */
  }
`;


// Center Container for Text Elements
const CenterTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
    top: 25%;
    left: unset;
    transform: none;
    margin-top: 20px;
    order: 3; /* Push below the toggle button */
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

  @media (max-width: 768px) {
    position: relative;
    top: 17%;
    left: unset;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
  }

  .line {
    width: 0.5rem;
    height: 2.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    transition: background 0.3s ease-in-out;
    background: #ffffff; /* Default color */

    @media (max-width: 768px) {
      width: 2rem;
      height: 0.5rem;
      margin: 0 5px;
    }
  }

  .line.active {
    background: #f0a500; /* Active tab color */
  }

  .line:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;



const Title = styled.h1`
  font-size: 2.5vw;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserratBold};
  margin-top: 20%;
  font-weight: 5px; /* Use regular font weight */
  font-style: normal; /* Regular style */

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const slides = [
    {
        bgImage: homeImage1,
        title: 'NEX - GRAPHIC DESIGN',
        subtitle: 'Where Creativity Meets Learning & Performance',
    },
    {
        bgImage: homeImage2,
        title: 'NEX - UI | UX DESIGN',
        subtitle: 'Where Creativity Meets Learning & Performance',
    },
    {
        bgImage: homeImage3,
        title: 'NEX - GAME DESIGN & DEVEOPLMENT',
        subtitle: 'Where Creativity Meets Learning & Performance',
    },
    {
        bgImage: homeImage4,
        title: 'NEX - AR | VR',
        subtitle: 'Where Creativity Meets Learning & Performance',
    },
    {
        bgImage: homeImage5,
        title: 'NEX - 3D ANIMATION',
        subtitle: 'Where Creativity Meets Learning & Performance',
    },
    {
        bgImage: homeImage6,
        title: 'NEX - UNREAL ENGINE',
        subtitle: 'Where Creativity Meets Learning & Performance',
    }
];

const SShead = ({ currentIndex, handleSlideChange }) => {
    return (
                <HeroContainer bgImage={slides[currentIndex].bgImage}>
                    <CenterTextContainer>
                        <Title>{slides[currentIndex].title}</Title>
                        <Title>{slides[currentIndex].subtitle}</Title>
                    </CenterTextContainer>
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
 export default SShead;
