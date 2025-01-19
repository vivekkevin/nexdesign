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
import borimage from '../assets/borimage.png'
import Slider from 'react-slick';

// Container for the whole About Section
const AboutContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 0px; /* Add padding to prevent overlap with navbar */

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {

  }
  @media (max-width: 425px) and (min-width: 310px) {

  }

`;


const StyledNexImage = styled.img`
  width: 80%;
  height: auto;
  margin-top: auto; /* Push to the bottom */
  opacity: 0.7; /* Subtle effect */

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
    width: 90%; /* Adjust size for mobile */
    margin-top:10%;
  }

  @media (max-width: 991px) and (min-width: 426px) {
    width: 60%;  // Adjust the width for smaller devices
    height: auto;  // Maintain natural aspect ratio
    position: relative;  // Fix position relative to the viewport
    top: 30%;  // Position from the top of the viewport
    left: 20%;  // Position from the left of the viewport
    z-index: -1;  // Place it behind other content
  }
  @media (max-width: 425px) and (min-width: 310px) {
    display:none;
  }
  
`;


// Section Wrapper for Each Part
const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content:center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  text-align: left;
  

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    height: auto; /* Allow sections to expand based on content */
    flex-direction: column;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    height: auto; /* Allow sections to expand based on content */
    flex-direction: column;
  }

`;

const SectionWrapper1 = styled(SectionWrapper)`
  height: 40vh;
  flex-wrap: wrap;
  @media (max-width: 1440px) and (min-width: 1281px) {
    height: 40vh;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    height: 30vh;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    height: auto; 
  }
  @media (max-width: 425px) and (min-width: 310px) {

  }
`;

const SectionWrapper2 = styled(SectionWrapper)`
  height: 60vh;
  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    height: auto; /* Allow sections to expand based on content */
    padding: 20px; /* Reduced padding for mobile */
  }
  @media (max-width: 425px) and (min-width: 310px) {
  height: 50vh;
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

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    width: 100vw;
    height: 90vh; /* Adjust image height for mobile */
    top:-30px;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    width: 100vw;
    height: 90vh; /* Adjust image height for mobile */
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
  z-index: 1;
  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    width: 100%;
    padding: 10px; /* Reduced padding for mobile */
    min-height: 500px;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    width: 100%;
    padding: 10px; /* Reduced padding for mobile */
    min-height: 400px;
  }
`;

const WelcomeText = styled.h1`
  font-size: 60px;
  color: #f0a500;
  text-align: center;
  position: absolute; /* Allow absolute positioning */
  bottom: 15%; /* 75% from the top */

  @media (max-width: 1440px) and (min-width: 1281px) {
    bottom: 17%;
    font-size: 45px;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    bottom: 20%;
    font-size: 28px;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    bottom: 16%;
    font-size: 45px; /* Adjust font size for mobile */
  }
  @media (max-width: 425px) and (min-width: 310px) {
    bottom: 12%;
    font-size: 35px; /* Adjust font size for mobile */
  }
`;

const StudioText = styled.h2`
  font-size: 50px;
  color: #ffffff;
  text-align: center;
  position: absolute; /* Allow absolute positioning */
  bottom: 7%; /* Adjust position for spacing */

  @media (max-width: 1440px) and (min-width: 1281px) {
    bottom: 10%;
    font-size: 40px;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    bottom: 14%;
    font-size: 32px;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    bottom: 8%;
    font-size: 42px;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    bottom: 4%;
    font-size: 30px;
  }
`;


// Right Section Heading
const RightHeading = styled.h1`
  font-size: 50px;
  color: #ffcc3f;
  margin-top: 100px;
  margin-bottom: 60px;

  @media (max-width: 1440px) and (min-width: 1281px) {
  margin-top:100px;
  font-size: 40px;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
  margin-top:100px;
  font-size: 30px;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    font-size: 35px; /* Reduced font size for mobile */
    text-align: center; /* Center align for better visibility */
    margin-top: 20px;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    font-size: 20px; /* Reduced font size for mobile */
    text-align: center; /* Center align for better visibility */
    margin-top: 20px;
  }
`;

// Paragraph Text in the Right Section
const ParagraphText = styled.p`
  font-size: 20px;
  line-height: 2.5;
  color: #ffffff;
  margin-bottom: 20px;
  width: 80%; /* Ensures paragraph width is 75% */
  text-align: justify; /* Justifies text */
  word-wrap: break-word; /* Ensures text wraps properly */
  overflow-wrap: break-word; /* Prevents text overflow */
  hyphens: auto; /* Adds hyphenation if needed */

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
  font-size: 16px;
  width: 99%;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    font-size: 20px; /* Reduced font size for mobile */
    width: 99%; /* Slightly wider for smaller screens */
    text-align: center; /* Keeps justification */
    padding: 0 10px; /* Adds padding for better readability */
  }
  @media (max-width: 425px) and (min-width: 310px) {
   font-size: 14px; /* Reduced font size for mobile */
    width: 100%; /* Slightly wider for smaller screens */
    text-align: center; /* Keeps justification */
     /* Adds padding for better readability */
    margin-top:-30px;
  }
`;



// Main Section Wrapper for the "Why Choose Us" layout
const WhyChooseUsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  gap:100px;


  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  gap:10px;
  margin-top:-60px;
  height:50vh;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    display: grid;  // Switch to grid layout on mobile
    grid-template-columns: 1fr;  // Single column layout for simplicity
    grid-template-rows: auto auto auto;  // Adjust based on number of items
    grid-gap: 20px;  // Space between grid items
    padding: 20px;  // Adjusted padding for mobile
  }
  @media (max-width: 425px) and (min-width: 310px) {
    display: grid;  // Switch to grid layout on mobile
    grid-template-columns: 1fr;  // Single column layout for simplicity
    grid-template-rows: auto auto auto;  // Adjust based on number of items
    grid-gap: 10px;  // Space between grid items
    padding: 5px;  // Adjusted padding for mobile
  }
`;

const SecondColumn1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  // Two columns in this container
  align-items: center;
`;

// Left Column: Service Icons in Two Rows
const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  grid-gap: 60px;
  justify-content: center;

  @media (max-width: 1440px) and (min-width: 1281px) {
    grid-gap: 30px;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    grid-gap: 4px;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    grid-template-columns: repeat(3, 1fr); /* Show 2 items per row on mobile */
    grid-gap: 30px; /* Smaller gaps on mobile */
  }
  @media (max-width: 425px) and (min-width: 310px) {
    grid-template-columns: repeat(3, 1fr); /* Show 2 items per row on mobile */
    grid-gap: 3px; /* Smaller gaps on mobile */
    
  }
`;

// Center Column: Large Creative Idea Icon
const CenterColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:50px;

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    margin-top: 20px; /* Add margin for spacing */
  }
  @media (max-width: 425px) and (min-width: 310px) {

  }
`;

// Large Icon Styling
const LargeIcon = styled.img`
  width: 500px;
  height: 450px;

  @media (max-width: 1440px) and (min-width: 1281px) {
    width: 250px;
    height: 250px;
    margin-bottom:50px;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    width: 200px;
    height: 200px;
    margin-bottom:30px;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    width: 175px; /* Adjust icon size for mobile */
    height: 150px;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    width: 120px; /* Adjust icon size for mobile */
    height: 110px;
    margin-left:-20px;
  }
`;

// Right Column: Why Choose Us Text
const RightColumn = styled.div`
  text-align: right; /* Ensures right alignment */
  font: normal normal normal 24px/68px Montserrat;
  h1 {
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
  font: normal normal normal 20px/68px Montserrat;
    h1 {
    font-weight: bold;
    line-height: 1;
    margin-bottom: 20px;
    }
  }
  @media (max-width: 991px) and (min-width: 426px) {

  }
  @media (max-width: 425px) and (min-width: 310px) {
    font: normal normal normal 12px/68px Montserrat;
    margin-right:40px;
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
  padding: 20px;
  gap:110px;
  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    display: grid;
    grid-template-columns: 2fr 1fr;  // Two columns in the first row
    grid-template-rows: auto auto;  // Automatic row height
    grid-gap: 10px;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    display: grid;
    grid-template-columns: 2fr 1fr;  // Two columns in the first row
    grid-template-rows: auto auto;  // Automatic row height
    grid-gap: 10px;
  }
`;

const FirstColumn = styled.div`
  width:40%;
  @media (max-width: 1440px) and (min-width: 1281px) {
    width:60%;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    width:100%;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    width:100%;
    grid-column: 1;
  }
  @media (max-width: 425px) and (min-width: 310px) {
    display: flex;
    align-items: center; /* Centers content horizontally in the flex container */
    justify-content: center; /* Centers content vertically */
    width: 260%; /* Full width */
  }
`;

const SecondColumn = styled.div`

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {

  }
  @media (max-width: 991px) and (min-width: 426px) {
    grid-column: 2;
  }
  @media (max-width: 425px) and (min-width: 310px) {

  }
`;

const FullWidthColumn = styled.div`
  @media (max-width: 991px) and (min-width: 426px) {
    grid-column: 1 / -1;  // Spans from the first to the last column in the grid
  }
  @media (max-width: 425px) and (min-width: 310px) {
    grid-column: 1 / -1;  // Spans from the first to the last column in the grid
  } 
`;


const LeftText = styled.div`
  margin-left:50px;
  text-align: left;
  font: normal normal normal 24px/68px Montserrat;
  h1 {
    margin: 0;
    line-height: 1.2; /* Adjust line height for proper spacing */
    }
  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
    margin-left:10px;
    font: normal normal normal 20px/68px Montserrat;
  h1 {
    margin: 0;
    line-height: 1.2; /* Adjust line height for proper spacing */
    }
  }
  @media (max-width: 991px) and (min-width: 426px) {
    margin-left: 0;
    font: normal normal normal 18px/68px Montserrat;
  h1 {
    margin: 0;
    line-height: 1.2;
    }
  }
  @media (max-width: 425px) and (min-width: 310px) {
    margin-left: -10px;
    font: normal normal normal 12px/68px Montserrat;

  }
`;

const ImageSection1 = styled.div` 
  display: flex;
  justify-content: center;
  margin-left:80px;
  
  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
    margin-left:10px;
    width: 40%; /* Adjusted width for the image section */
    display: flex;
    justify-content: flex-start; /* Align image to the start */
    margin-bottom: 10px; /* Extra bottom margin for spacing between elements */
  }
  @media (max-width: 991px) and (min-width: 426px) {
    width: 15%; /* Adjusted width for the image section */
    display: flex;
    justify-content: flex-start; /* Align image to the start */
    margin-bottom: 10px; /* Extra bottom margin for spacing between elements */
  }
  @media (max-width: 425px) and (min-width: 310px) {
    width: 15%; /* Adjusted width for the image section */
    display: flex;
    justify-content: flex-start; /* Align image to the start */
    margin-bottom: 10px; /* Extra bottom margin for spacing between elements */
  }

`;

const StyledImage1 = styled.img`
  width: 200%; 
  height: auto;
  border-radius: 10px;

  @media (max-width: 1280px) and (min-width: 992px){
  width: 280%; 
  height: auto;
  }
  @media (max-width: 426px){
  margin-right:200px;
   width: 150%; 
  }
  
`;

const RightText = styled.div`
  font-size: 1vw;
  line-height: 2.5;
  color: #333;

  @media (max-width: 1440px) and (min-width: 1281px) {

  }
  @media (max-width: 1280px) and (min-width: 992px) {
    font-size: 12px;
  }
  @media (max-width: 991px) and (min-width: 426px) {
    width: 100%; /* Full width for mobile */
    font-size: 2vw; /* Increase font size for readability */
    margin-right: 0; /* Remove right margin on mobile */
  }
  @media (max-width: 425px) and (min-width: 310px) {
    display:flex;
    
    text-align:center;
    font-size: 2.8vw;
     line-height: 2;
     padding: 0 5px;
    
    
  }
`;
// Individual Service Icon Box Styling
const ServiceBox = styled.div`
  text-align: center;
  width: 150px;
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 0.8vw;
    color: #000;
    margin: 10px 0;
  }

  p {
    font-size: 0.9vw;
    color: #555;
  }
  @media (max-width: 1440px) and (min-width: 1281px) {
  img {
    width: 70px;
    height: 70px;
  }
  }
  @media (max-width: 1280px) and (min-width: 992px) {
  margin-left:5px;
  img {
    width: 40px;
    height: 40px;
  }
  h3 {
    font-size: 1.2vw;
  }
  }
  @media (max-width: 991px) and (min-width: 426px) {
  margin-left:5px;
  img {
    width: 50px;
    height: 50px;
  }
  h3 {
    font-size: 1.8vw;
  }
  }
  @media (max-width: 425px) and (min-width: 310px) {
  margin-left:15px;
  width: 40px;
  img {
    width: 40px;
    height: 40px;
  }
  h3 {
    font-size: 2.8vw;
  }
  }
`;

const ProcessSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  background: url(${bgimage}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 1280px) and (min-width: 992px) {
  margin-top:-150px;
  height: 80vh;
  }

  @media (max-width: 768px) {
    padding: 40px 20px; /* Adjust padding for mobile */
  }
  @media (max-width: 426px){
    display:none;
  }   
`;


// Section Title
const SectionTitle = styled.h1`
  font-size: 2vw;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  text-align: left;
  margin-left:90px;
  span {
    color: #ff0000; /* Red color for emphasis */
    font-size: 3vw;
  }
  @media (max-width: 1024px) {
  font-size: 3vw;
  }
  span {
    font-size: 4vw;
  }
   } 
`;

const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 30px; /* Spacing between cards */
  width: 90%;
  margin-top: 40px;
  margin-left:90px;

  @media (max-width: 1280px) and (min-width: 992px) {
  margin-top: 10px;
  }
  @media (max-width: 768px) {
    display: none; // Hide the grid layout on small screens
  }
`;

const ProcessCard = styled.div`
  position: relative;
  background: url(${borimage}) no-repeat center center;
  background-size: cover; // Cover the entire area of the div, adjust as necessary
  width: 80%;
  height: 53.5%;
  padding: 30px; // Adjust padding to prevent content from overlapping the border in the image
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, top 0.5s ease;
  overflow: visible;
  z-index: 10; // Maintain higher z-index

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .number {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 3em;
    color: #ccc;
    font-weight: 700;
  }

  .icon {
    width: 80px;
    margin-top: 20px;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 15px;
    color: #111;
  }

  p {
    color: #000;
    font-size: 0.9em;
    font-weight: 500;
  }
  @media (max-width: 1280px) and (min-width: 992px) {
    width: 89%;
    height: 52%;
  .number {
    font-size: 2em;
  }
  .icon {
    width: 50px;
    margin-top:-10px;
  }
  h3 {
    font-size: 1em;
    margin-bottom: 15px;
    color: #111;
  }

  p {
    color: #555;
    font-size: 0.7em;
    font-weight: 600;
  }
  }


  @media (max-width: 768px) {
    position: relative; // Only apply absolute positioning on mobile
    left: 0;
    width: 60%;
    height: 60%;
    transition: top 0.5s ease-out; // Smooth transition for sliding effect

  .number {
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 4em;
    color: #ccc;
    font-weight: 700;
  }

  .icon {
    width: 90px;
    margin-top: 20px;
  }

  h3 {
    font-size: 2em;
    margin-bottom: 15px;
    color: #111;
  }

  p {
    color: #555;
    font-size: 1.3em;
    font-weight: 600;
  }
  }
`;



const GrayText = styled.span`
  color: #ccc; /* Light gray */
  text-align: left;
  display: inline-block;
  font-weight: 300; /* Reduce weight */
`;

const GrayText1 = styled.span`
  color: #ccc; /* Light gray */
  text-align: right;
  display: inline-block;
  font-weight: 300; /* Reduce weight */
`;

const RedText = styled.span`
  color: red;
  font-weight: 700; /* Ensure "ARE" is bold */
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

const MobileProcessContainer = styled.div`
  display: none; // Hide by default

  @media (max-width: 768px) {
    display: block; // Show only on mobile
    padding: 20px;
  }
`;

// Configure settings for react-slick
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const steps = [
  { number: 1, title: "Initial Consultation", description: "We begin by understanding your needs and the scope of your project." },
  { number: 2, title: "Strategy Development", description: "Developing a strategy that aligns with your business goals." },
  { number: 3, title: "Design & Development", description: "Creating engaging designs and development solutions tailored to your needs." },
  { number: 4, title: "Implementation", description: "Rolling out your project in phases, ensuring optimal performance." },
  { number: 5, title: "Feedback & Support", description: "Continuous support and adjustments based on feedback to ensure success." }
];


// About Component Implementation
const About = () => {
  return (
    <AboutContainer>
      {/* First Section: Welcome Section with Image on Left and Text on Right */}
      <SectionWrapper bgColor="rgb(15, 15, 15)">
        <LeftSection>
          <WelcomeText>Welcome to</WelcomeText>
          <StudioText>Nex Design Studio</StudioText>
        </LeftSection>
        <RightSection>
          <RightHeading>Your Vision, Our Expertise</RightHeading>
          <ParagraphText>
            Where creativity meets innovation. We are a dynamic design studio committed to bringing your vision to life through exceptional design solutions.
            Our team of talented designers, developers, and strategists work collaboratively to deliver unique and impactful designs that elevate your brand and captivate your audience.
          </ParagraphText>
          <StyledNexImage src={NexImage} alt="Nex Logo" />
        </RightSection>
      </SectionWrapper>

      <SectionWrapper1 bgColor="#ffffff">
        <WhoWeAreContainer>
        <FirstColumn>
          <LeftText>
            <h1><GrayText>who </GrayText>
              <br /> {/* Line break */}<RedText>ARE </RedText><GrayText1>we</GrayText1></h1>
          </LeftText>
          </FirstColumn>
          <SecondColumn>
          <ImageSection1>
            <StyledImage1 src={MiddleImage} alt="Who We Are" />
          </ImageSection1>
          </SecondColumn>
          <FullWidthColumn>
          <RightText>
            At Nex Design Studio, we are a team of passionate designers, strategists, and creative thinkers with a shared goal to bring your brand’s vision to life. 
            With years of experience in the industry, we have honed our skills in various aspects of design and branding, enabling us to deliver high-quality, tailored solutions that meet your unique needs.
          </RightText>
          </FullWidthColumn>
        </WhoWeAreContainer>
      </SectionWrapper1>


      {/* Third Section: Why Choose Us */}
      <SectionWrapper2 bgColor="#ffffff">
      <WhyChooseUsSection>
      <FullWidthColumn>
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
        </FullWidthColumn>
        <SecondColumn1>
        <CenterColumn>
          <LargeIcon src={idea} alt="Creative Idea" />
        </CenterColumn>

        
        {/* Right Column: Why Choose Us Text */}
        
        <RightColumn>
        <h1>
              <GrayText>why </GrayText>
              <br /> {/* Line break */}
              <RedText>CHOOSE <GrayText>us</GrayText></RedText>
              
            </h1>
        </RightColumn>
        </SecondColumn1>
      </WhyChooseUsSection>
      </SectionWrapper2>

      <ProcessSection>
        <SectionTitle>
          our<br /><span>PROCESS</span>
        </SectionTitle>
        <ProcessContainer>
        <div style={{
            gridColumn: 'span 1',
            position: 'relative',  // Ensures that child positioning is relative to this div
          }}>
            <ProcessCard style={{
              position: 'absolute',  // Allows absolute positioning within the div
              top: '20%',         // Positions the ProcessCard 10% from the bottom of the div
            }}>
              <div className="number">01</div>
              <img src={Icon_1} alt="Consultation" className="icon" />
              <h3>Consultation</h3>
              <p>We start by understanding your needs, goals, and vision.</p>
            </ProcessCard>
          </div>

          <div style={{ gridColumn: 'span 1' }}>
            <ProcessCard >
              <div className="number">02</div>
              <img src={Icon_2} alt="Research & Strategy" className="icon" />
              <h3>Research & Strategy</h3>
              <p>We conduct thorough research to create a strategic design plan.</p>
            </ProcessCard>
          </div>

          <div style={{
            gridColumn: 'span 1',
            position: 'relative',  // Ensures that child positioning is relative to this div
          }}>
            <ProcessCard style={{
              top: '-20%',         // Positions the ProcessCard 10% from the bottom of the div
            }}>
              <div className="number">03</div>
              <img src={Icon_3} alt="Design & Development" className="icon" />
              <h3>Design & Development</h3>
              <p>Our creative team gets to work, bringing ideas to life</p>
            </ProcessCard>

            <ProcessCard style={{
              top: '-10%',         // Positions the ProcessCard 10% from the bottom of the div
            }}>
              <div className="number">04</div>
              <img src={Icon_5} alt="Launch & Support" className="icon" />
              <h3>Review & Feedbacks</h3>
              <p>We present the design for your review and incorprate your feedback.</p>
            </ProcessCard>
          </div>

          <div style={{
            gridColumn: 'span 1',
            position: 'relative',  // Ensures that child positioning is relative to this div
          }}>
            <ProcessCard style={{
              top: '-10%',         // Positions the ProcessCard 10% from the bottom of the div
            }}>
              <div className="number">05</div>
              <img src={Icon_4} alt="Continuous Growth" className="icon" />
              <h3>Launch & Support</h3>
              <p>We ensure a smooth launch and provide ongoing support as needed.</p>
            </ProcessCard>
          </div>
        </ProcessContainer>
        {/* Mobile Slider */}
        <MobileProcessContainer>
          <Slider {...settings}>
            {steps.map((step) => (
              <ProcessCard key={step.number}>
                <div className="number">{`0${step.number}`}</div>
                <img src={require(`../assets/Icon_${step.number}.svg`)} alt={`Step ${step.number}`} className="icon" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ProcessCard>
            ))}
          </Slider>
        </MobileProcessContainer>
      </ProcessSection>
    <Contact />
    </AboutContainer>
  );
};

export default About;
