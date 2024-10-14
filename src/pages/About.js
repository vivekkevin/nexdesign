import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import About1 from '../assets/About_1.png';
import NexImage from '../assets/About_2.png'; 
import idea from '../assets/About_3.png';// Update with your image path
import MiddleImage from '../assets/M_question.png'; 
import creative from '../assets/creative.svg'; 
import clock from '../assets/clock.svg'; 
import hand from '../assets/hand-shake.svg'; 
import experience from '../assets/experience.svg'
import g4305 from '../assets/g4305.svg'
import quality from '../assets/quality.svg'
import Icon_1 from '../assets/Icon_1.svg'
import Icon_2 from '../assets/Icon_2.svg'
import Icon_3 from '../assets/Icon_3.svg'
import Icon_4 from '../assets/Icon_4.svg'
import Icon_5 from '../assets/Icon_5.svg'
import bgimage from '../assets/bg_image.png'

// Container for the whole About Section
const AboutContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 80px; /* Add padding to prevent overlap with navbar */
`;


const StyledNexImage = styled.img`
  width: 450px;
  height: auto;
  margin-top: auto; /* Push to the bottom */
  opacity: 0.7; /* Subtle effect */
  
  @media (max-width: 768px) {
    width: 150px; /* Adjust size for mobile */
  }
`;


// Section Wrapper for Each Part
const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  text-align: left;

  @media (max-width: 768px) {
    height: auto; /* Allow sections to expand based on content */
    flex-direction: column; /* Stack sections vertically */
    padding: 30px; /* Reduced padding for mobile */
  }
`;

const SectionWrapper1 = styled(SectionWrapper)`
  height: 30vh;

  @media (max-width: 768px) {
    height: auto; /* Allow sections to expand based on content */
  }
`;

const SectionWrapper2 = styled(SectionWrapper)`
  height: 70vh;

  @media (max-width: 768px) {
    height: auto; /* Allow sections to expand based on content */
    padding: 20px; /* Reduced padding for mobile */
  }
`;

// Left Section for Image and Text
const LeftSection = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  background: url(${About1}) no-repeat center center/cover; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh; /* Adjust image height for mobile */
  }
`;

// Right Section for Content
const RightSection = styled.div`
  height: 100%;
  width: 50vw;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px; /* Reduced padding for mobile */
  }
`;

const WelcomeText = styled.h1`
  font-size: 36px;
  color: #f0a500;
  text-align: center;
  position: absolute; /* Allow absolute positioning */
  bottom: 15%; /* 75% from the top */

  @media (max-width: 768px) {
    font-size: 28px; /* Adjust font size for mobile */
  }
`;

const StudioText = styled.h2`
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  position: absolute; /* Allow absolute positioning */
  bottom: 10%; /* Adjust position for spacing */

  @media (max-width: 768px) {
    font-size: 24px; /* Reduced font size for mobile */
  }
`;


// Right Section Heading
const RightHeading = styled.h1`
  font-size: 32px;
  color: #ffcc3f;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduced font size for mobile */
    text-align: center; /* Center align for better visibility */
  }
`;

// Paragraph Text in the Right Section
const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduced font size for mobile */
    text-align: center; /* Center align text */
  }
`;

// Main Section Wrapper for the "Why Choose Us" layout
const WhyChooseUsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 40px 0;
  background: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on mobile */
    padding: 20px;
  }
`;

// Left Column: Service Icons in Two Rows
const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  grid-gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Show 2 items per row on mobile */
    grid-gap: 20px; /* Smaller gaps on mobile */
  }
`;

// Center Column: Large Creative Idea Icon
const CenterColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px; /* Add margin for spacing */
  }
`;

// Large Icon Styling
const LargeIcon = styled.img`
  width: 300px;
  height: 250px;

  @media (max-width: 768px) {
    width: 175px; /* Adjust icon size for mobile */
    height: 150px;
  }
`;

// Right Column: Why Choose Us Text
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 10px;

  @media (max-width: 768px) {
    text-align: center; /* Center align text for mobile */
    margin-top: 20px; /* Add margin for spacing */
  }
`;

// Text Column Items for "Why Choose Us"
const TextColumnItem = styled.div`
  font-size: 3vw;
  font-family: 'Montserrat', sans-serif;
  color: ${({ color }) => color || '#333'};
  text-transform: uppercase;
`;

// Bold NEX Text
const NexText = styled.h1`
  font-size: 100px;
  color: #ffffff;
  text-align: right;
  margin-top: auto; /* Push to the bottom */
  opacity: 0.1; /* Faint opacity for a subtle effect */
`;

// Container for "Who We Are" Section
const WhoWeAreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  padding: 10px; /* Reduce padding to avoid overflow */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on mobile */
    align-items: center;
  }
`;

const LeftText = styled.div`
  width: 15%;
  text-align: center;

  h1 {
    font-size: 3vw;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    line-height: 1.2; /* Adjust line height for proper spacing */
  }


  @media (max-width: 768px) {
    h1 {
      font-size: 5vw; /* Adjust font size for smaller screens */
    }
  }
`;

const ImageSection1 = styled.div`
  width: 10%; 
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 50%; 
    margin-bottom: 10px;
  }
`;

const StyledImage1 = styled.img`
  width: 80%; 
  height: auto;
  border-radius: 10px;
`;

const RightText = styled.div`
  width: 70%; /* Reduced width slightly to prevent overflow */
  font-size: 1.2vw;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    width: 100%; 
  }
`;


// Individual Service Icon Box Styling
const ServiceBox = styled.div`
  text-align: center;
  width: 150px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.1vw;
    color: #000;
    margin: 10px 0;
  }

  p {
    font-size: 0.9vw;
    color: #555;
  }
`;

const ProcessSection = styled.div`
  width: 100%;
  padding: 60px 0;
  background: url(${bgimage}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px; /* Adjust padding for mobile */
  }
`;


// Section Title
const SectionTitle = styled.h1`
  font-size: 3.5vw;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 40px;

  span {
    color: #ff0000; /* Red color for emphasis */
  }
`;

const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 40px; /* Spacing between cards */
  width: 90%;
  max-width: 1600px;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
`;



const ProcessCard = styled.div`
  position: relative; /* Ensures the pseudo-element aligns correctly */
  background: #ffffff;
  padding: 20px;
  border-radius: 12px; /* Smooth rounded corners */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: visible; /* Ensure the red border can extend outside the card */
  z-index: 1; /* Ensure the card content stays above the red border */

  &:hover {
    transform: translateY(-5px); /* Lift effect */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
  }

  /* Pseudo-element for the red border */
  &::before {
    content: '';
    position: absolute;
    top: 5px; /* Slight offset */
    left: 5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid #ff0000; /* Red border */
    border-radius: 14px; /* Match card’s corners */
    z-index: 0; /* Ensure the red border is behind the card content */
    pointer-events: none; /* Prevent interaction issues */
    background-color: transparent; /* Ensure only the border is visible */
  }

  .number {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 2em;
    color: #ccc; /* Light gray color */
    font-weight: 700;
  }

  .icon {
    width: 70px;
    margin-top: 20px;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #111;
  }

  p {
    color: #555;
    font-size: 0.7em;
    font-weight: 600;
  }
`;



const GrayText = styled.span`
  color: #ccc; /* Light gray */
`;

const RedText = styled.span`
  color: #ff0000; /* Red */
  font-weight: bold;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;

  @media (max-width: 768px) {
    padding: 1px; /* Adjust padding for mobile */
  }
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 50px; /* Adjust size for mobile */
  }
`;



// About Component Implementation
const About = () => {
  return (
    <AboutContainer>
      {/* First Section: Welcome Section with Image on Left and Text on Right */}
      <SectionWrapper bgColor="#000">
        <LeftSection>
          <WelcomeText>Welcome to</WelcomeText>
          <StudioText>Nex Design Studio</StudioText>
        </LeftSection>
        <RightSection>
          <RightHeading>Your Vision, Our Expertise</RightHeading>
          <ParagraphText>
            Where creativity meets innovation. We are a dynamic design studio committed to bringing your vision to life through exceptional design solutions.
          </ParagraphText>
          <ParagraphText>
            Our team of talented designers, developers, and strategists work collaboratively to deliver unique and impactful designs that elevate your brand and captivate your audience.
          </ParagraphText>
          <StyledNexImage src={NexImage} alt="Nex Logo" />
        </RightSection>
      </SectionWrapper>

      <SectionWrapper1 bgColor="#ffffff">
        <WhoWeAreContainer>
          <LeftText>
            <h1>
              <GrayText>who </GrayText>
              <br /> {/* Line break */}
              <RedText>ARE </RedText>
              <GrayText>we</GrayText>
            </h1>
          </LeftText>
          <ImageSection1>
            <StyledImage1 src={MiddleImage} alt="Who We Are" />
          </ImageSection1>

          <RightText>
            At Nex Design Studio, we are a team of passionate designers, strategists, and creative thinkers with a shared goal to bring your brand’s vision to life. 
            With years of experience in the industry, we have honed our skills in various aspects of design and branding, enabling us to deliver high-quality, tailored solutions that meet your unique needs.
          </RightText>
        </WhoWeAreContainer>
      </SectionWrapper1>


      {/* Third Section: Why Choose Us */}
      <SectionWrapper2 bgColor="#ffffff">
      <WhyChooseUsSection>
        {/* Left Column: Service Icons */}
        <LeftColumn>
          <ServiceBox>
            <img src={creative} alt="Creativity & Innovation" />
            <h3>Creativity & Innovation</h3>
          </ServiceBox>
          <ServiceBox>
            <img src={hand} alt="Client-Centric Approach" />
            <h3>Client-Centric Approach</h3>
          </ServiceBox>
          <ServiceBox>
            <img src={quality} alt="Quality and Precision" />
            <h3>Quality and Precision</h3>
          </ServiceBox>
          <ServiceBox>
            <img src={clock} alt="Timely Delivery" />
            <h3>Timely Delivery</h3>
          </ServiceBox>
          <ServiceBox>
            <img src={experience} alt="Versatile Expertise" />
            <h3>Versatile Expertise</h3>
          </ServiceBox>
          <ServiceBox>
            <img src={g4305} alt="Long-Term Partnership" />
            <h3>Long-Term Partnership</h3>
          </ServiceBox>
        </LeftColumn>

        {/* Center Column: Large Icon */}
        <CenterColumn>
          <LargeIcon src={idea} alt="Creative Idea" />
        </CenterColumn>

        {/* Right Column: Why Choose Us Text */}
        <RightColumn>
        <h1>
              <GrayText>why </GrayText>
              <br /> {/* Line break */}
              <RedText>CHOOSE </RedText>
              <GrayText>us</GrayText>
            </h1>
        </RightColumn>
      </WhyChooseUsSection>
      </SectionWrapper2>

      <ProcessSection>
        <ProcessContainer>
          <div style={{ gridColumn: 'span 1' }}>
            <SectionTitle>
              our <span>PROCESS</span>
            </SectionTitle>
              <ProcessCard>
                <div className="number">01</div>
                <img src={Icon_1} alt="Consultation" className="icon" />
                <h3>Consultation</h3>
                <p>We start by understanding your needs, goals, and vision.</p>
              </ProcessCard>
          </div>

          <div style={{ gridColumn: 'span 1' }}>
              <ProcessCard>
                <div className="number">02</div>
                <img src={Icon_2} alt="Research & Strategy" className="icon" />
                <h3>Research & Strategy</h3>
                <p>We conduct thorough research to create a strategic design plan.</p>
              </ProcessCard>
          </div>

          <div style={{ gridColumn: 'span 1' }}>
              <ProcessCard>
                <div className="number">03</div>
                <img src={Icon_3} alt="Review & Feedback" className="icon" />
                <h3>Review & Feedback</h3>
                <p>We present the design for your review and incorporate your feedback.</p>
              </ProcessCard>

              <ProcessCard>
                <div className="number">04</div>
                <img src={Icon_4} alt="Launch & Support" className="icon" />
                <h3>Launch & Support</h3>
                <p>We ensure a smooth launch and provide ongoing support as needed.</p>
              </ProcessCard>
          </div>

          <div style={{ gridColumn: 'span 1' }}>
              <ProcessCard>
                <div className="number">05</div>
                <img src={Icon_5} alt="Continuous Growth" className="icon" />
                <h3>Continuous Growth</h3>
                <p>We constantly innovate to help your business grow.</p>
              </ProcessCard>
          </div>
        </ProcessContainer>
      </ProcessSection>




    <Contact />
    </AboutContainer>
  );
};

export default About;
