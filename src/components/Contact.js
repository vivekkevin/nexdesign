import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import contact from '../assets/contact.png'
import ArrowIcon from './Arrowicon';

// Main Container for the Contact Section
// Main Container for the Contact Section
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  color: #ffffff;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 20px;
    
  }
`;


// Left Container for Contact Information
const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-left: 80px;

  h1 {
    font-size: 50px;
    font-family: 'Poppins';
    margin-bottom: 20px;

    @media (max-width: 1280px) and (min-width: 992px) {
      font-size: 2.6vw;
      margin-top:-30px;
    }

    @media (max-width: 425px) {
      font-size: 5vw;
      margin-top:-20px;
      margin-right:110px;
    }
  }
 
  p {
    font-size: 22px;
    margin-bottom: 20px;
    line-height: 2.2;
    width:90%;

   @media (max-width: 1280px) and (min-width: 992px) {
      font-size: 1.2vw;
    }

    @media (max-width: 768px) {
      font-size: 2vw;
      line-height: 2.6;
    }
     @media (max-width: 425px) {
      font-size: 3vw;
      margin-top:-10px;
     
    } 
  }

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #f0a500;
    }
  }
  @media (max-width: 1024px) {
      margin-left: 60px;
  }
  @media (max-width: 1024px) {
      margin-left: 10px;
  }
`;

// Contact Details Container
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 425px){
  margin-top:130%;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    margin-bottom: 10px;
    gap: 10px; /* Space between the icon and the text */

    @media (max-width: 1024px) {
      font-size: 1.6vw;
    }

    @media (max-width: 768px) {
      font-size: 2vw;
    }
    @media (max-width: 425px) {
      font-size: 3.5vw;
      padding:5px;
      
    }  

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 2px solid #ffffff; /* White border for the circle */
      border-radius: 50%; /* Make it a circle */
      padding: 8px; /* Adjust padding to center the icon */
      color: #ffffff; /* Icon color */
      font-size: 18px; /* Adjust icon size */
      transition: background-color 0.3s, color 0.3s; /* Smooth transition */

      &:hover {
        background-color: #f0a500; /* Background color on hover */
        color: #111111; /* Icon color on hover */
      }
    }
  }
`;


// Social Icons Container
// Social Icons Container
const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center; /* Vertically center align items */
  justify-content: left; /* Horizontally center the content */
  gap: 15px; /* Space between the h2 and icons */
  margin-top: 20px;

  h2 {
    margin: 0; /* Remove default margin */
    font-size: 24px;
    color: #ffffff;

    @media (max-width: 1280px) and (min-width: 992px){
    font-size: 14px;
    color: #ffffff;
  }
    @media (max-width: 425px){
    font-size: 14px;
    color: #ffffff;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px solid #ffffff; /* White border for circle */
    border-radius: 50%; /* Make it a circle */
    color: #ffffff; /* Icon color */
    font-size: 24px;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */

    @media (max-width: 1280px) and (min-width: 992px){
    width: 40px;
    height: 40px;
    font-size: 18px;
    }
    @media (max-width: 425px){
    width: 40px;
    height: 40px;
    font-size: 18px;
    }

    &:hover {
      background-color: #f0a500; /* Background color on hover */
      color: #111111; /* Icon color on hover */

    
    }
}
`;



// Right Container for the Contact Form
const ContactForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap:10px;
  margin-top:40px;
  @media (max-width: 1280px) and (min-width: 992px){
   margin-top:-10px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
     @media (max-width: 425px) {
    width: 100%;
    margin-top:-190%;
    margin-left:15px;
  }
`;

const FooterNav = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 30px; /* Space between links */
  

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;

  @media (max-width: 1280px) and (min-width: 992px){
  font-size: 14px;
  margin-top:20px;
  }

  @media (max-width: 425px){
   font-size: 14px;
  }
    

    &:hover {
      color: #f0a500; /* Highlight on hover */
    }
  }
`;

// Styled Input and Textarea
const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  width: 90%;
  font: normal normal normal 19px/29px Poppins;
  color: #5A5A5A;

  @media (max-width: 1280px) and (min-width: 992px){
  width:80%;
  padding: 10px;
  font: normal normal bold 14px Poppins;
  }
  @media (max-width: 425px){
   width:100%;
  padding: 10px;
  margin-bottom:5px;
  font: normal normal bold 14px Poppins;
  
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 90%;
  height: 150px;
  margin-bottom: 20px;
  font: normal normal normal 19px/29px Poppins;
  color: #5A5A5A;

  @media (max-width: 1280px) and (min-width: 992px){
  height: 100px;
   width: 80%;
   font: normal normal bold 14px Poppins;
  }
   @media (max-width: 425px){
   height: 100px;
   width: 100%;
   font: normal normal bold 14px Poppins;
   margin-top:-10px;
   }
`;

const Container = styled.div`
  position:relative;
  width: 90%;
  @media (max-width: 1280px) and (min-width: 992px){
  position:relative;
  width: 90%;
  }
`;

// Styled Select
const Select = styled.select`
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin-bottom: 20px;
  font: normal normal normal 19px/29px Poppins;
  color: #5A5A5A;
  -webkit-appearance: none; /* Removes default styling for select in Chrome */
  -moz-appearance: none;    /* Removes default styling for select in Firefox */

  @media (max-width: 1280px) and (min-width: 992px){
  width:90%;
  padding:10px;
  font: normal normal bold 14px Poppins;
  }
  @media (max-width: 425px){
    width:110%;
  padding:10px;
  font: normal normal bold 14px Poppins;
  }
`;

const StyledOption = styled.option`
  color: #E8001A;
  background-color: #FFFFFF; /* White background for consistency */
  /* Hover effects will not be applied as :hover is not supported for <option> elements */
`;

// Submit Button
const SubmitButton = styled.button`
  padding: 15px 30px;
  background: #f0a500;
  color:rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  font-size: 100%;
  cursor: pointer;
  width: 15%;
  font-weight:600;

  &:hover {
    background: #ffcc3f;
  }
   
  @media (max-width: 1280px) and (min-width: 992px){
  padding:  10px;
  font-size: 80%;
  }
  @media (max-width: 425px){
  padding:  10px;
  font-size: 80%;
  width:fit-content;
  margin-top:-10px;
  }

`;

// Main Wrapper with Background Image
const BackgroundWrapper = styled.div`
  width: 100%;
  background: url(${contact}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure content is spaced evenly */
`;


// Footer Container
const Footer = styled.footer`
  padding: 10px 0;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  @media (max-width: 425px){
  margin-top:70%;
  }

  a {
    color: #ffffff;
    margin: 0 15px;
    text-decoration: none;

    &:hover {
      color: #f0a500;
    }
     
  }
     
    p{
    @media (max-width: 1280px) and (min-width: 992px){
    margin-top:-20px;
    font: normal normal normal 18px Poppins;
    }
    @media (max-width: 425px){
    margin-top:-20px;
    font: normal normal normal 12px Poppins;
    }
    }
`;
  


// Contact Component
const Contact = () => {

  const [isOpen, setIsOpen] = useState(false);  // Move useState inside the component

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
    <BackgroundWrapper>
      <ContactContainer>
        {/* Left Section: Contact Info */}
        <ContactInfo>
          <h1>Let's Work Together</h1>
          <p>
            Whether you’re launching a new brand or revitalizing an existing one, we’re here to help.
            Reach out to us today and let’s start building something amazing together.
          </p>
          <ContactDetails>
            <p>
              <FaEnvelope /> connect@nexdesignstudio.com
            </p>
            <p>
              <FaPhoneAlt /> +91 9731178024, +91 8660811575
            </p>
          </ContactDetails>
          <SocialIconsContainer>
           <h2>Follow Us</h2>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialIconsContainer>
          <FooterNav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href="/team">Team</a>
          <a href="/career">Career</a>
          <a href="/contact" style={{ color: '#f0a500', textDecoration: 'none' }}>Contact</a>
        </FooterNav>
        </ContactInfo>

        {/* Right Section: Contact Form */}
        <ContactForm>
          <Input type="text" placeholder="Enter Your Name*" required />
          <Input type="tel" placeholder="Enter Your Phone Number*" required />
          <Input type="email" placeholder="Enter Your Email ID*" required />
          <Container>
          <Select
              onChange={toggleDropdown}
              onBlur={() => setIsOpen(false)}
              onFocus={() => setIsOpen(true)}
            >
              <StyledOption value="" hidden>Choose Services</StyledOption>
              <StyledOption value="Graphic Design">Graphic Design</StyledOption>
              <StyledOption value="UI/UX Design">UI/UX Design</StyledOption>
              <StyledOption value="Digital Marketing">Digital Marketing</StyledOption>
              <StyledOption value="Web Development">Web Development</StyledOption>
              <StyledOption value="Video Design">Video Design</StyledOption>
              <StyledOption value="3D Animation">3D Animation</StyledOption>
              <StyledOption value="Workshop & Learning Performance">Workshop & Learning Performance</StyledOption>
            </Select>
            <ArrowIcon isOpen={isOpen} />
          </Container>
          <Textarea placeholder="Message" required></Textarea>
          <SubmitButton type="submit">Send</SubmitButton>
        </ContactForm>
      </ContactContainer>

      {/* Footer Section */}
      <Footer>
        <p>
          © 2024 NEX Design Studio, All Rights Reserved.
        </p>
      </Footer>
      </BackgroundWrapper>
    </>
  );
};

export default Contact;
