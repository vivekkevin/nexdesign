import React from 'react';
import styled from 'styled-components';

// Container for the Main Head Section
const MainHeadContainer = styled.h1`
  width: 100%;
  height: 100vh;
  left: 5%;
  background: url('/assets/your-background-image.jpg') no-repeat center center/cover; /* Background image */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  align-content: flex-start;
  flex-wrap: wrap;
`;

// Container for Text Overlays
const TextOverlay = styled.div`
  text-align: center;
  color: #ffffff;
`;

// Container for Dynamic Text
const DynamicTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 3vw;
  font-weight: 700;
  background: #f0a500;

  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;

// Yellow Text Styling
const WhiteText = styled.span`
  color: #ffffff;
  padding: 5px 5px;
`;

// Red Text Styling
const RedText = styled.span`
  color: #ff0000;
  padding: 5px 5px;
`;

// Subtext Styling
const SubText = styled.h2`
  font-size: 1.5vw;
  font-family: 'Poppins', sans-serif; /* Use Poppins Regular */
  margin-top: 20px;
  font-weight: 400; /* Regular weight */
  text-transform: capitalize;
  line-height: 60px; /* Adjusted line-height */
  
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;


// MainHead Component
const MainHead = ({ mainTextParts, subText }) => {
  return (
    <MainHeadContainer>
      <TextOverlay>
        {/* Dynamic Main Text with different color styles */}
        <DynamicTextContainer>
          {mainTextParts.map((part, index) =>
            part.color === 'white' ? (
              <WhiteText key={index}>{part.text}</WhiteText>
            ) : (
              <RedText key={index}>{part.text}</RedText>
            )
          )}
        </DynamicTextContainer>
      </TextOverlay>
              <SubText>{subText}</SubText>
    </MainHeadContainer>
  );
};

export default MainHead;
