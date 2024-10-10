import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Main Container for the Contact Section
const ContactContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: url('/assets/backgroundImage.png') no-repeat center center/cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

// Left Container for Contact Information
const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  h1 {
    font-size: 3vw;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }

  p {
    font-size: 1.2vw;
    margin-bottom: 20px;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #f0a500;
    }
  }
`;

// Contact Details Container
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

// Social Icons Container
const SocialIconsContainer = styled.div`
  margin-top: 20px;

  a {
    color: #ffffff;
    font-size: 24px;
    margin-right: 20px;

    &:hover {
      color: #f0a500;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Styled Input and Textarea
const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 150px;
  font-size: 16px;
  margin-bottom: 20px;
`;

// Styled Select
const Select = styled.select`
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;
`;

// Submit Button
const SubmitButton = styled.button`
  padding: 15px 30px;
  background: #f0a500;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #ffcc3f;
  }
`;

// Footer Container
const Footer = styled.footer`
  background: #111111;
  padding: 40px 0;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 4vw;
  }

  a {
    color: #ffffff;
    margin: 0 15px;
    text-decoration: none;

    &:hover {
      color: #f0a500;
    }
  }
`;

// Contact Component
const Contact = () => {
  return (
    <>
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
              <FaPhoneAlt /> +91 9353759335, +91 6361695271
            </p>
          </ContactDetails>
          <SocialIconsContainer>
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
        </ContactInfo>

        {/* Right Section: Contact Form */}
        <ContactForm>
          <Input type="text" placeholder="Enter Your Name*" required />
          <Input type="tel" placeholder="Enter Your Phone Number*" required />
          <Input type="email" placeholder="Enter Your Email ID*" required />
          <Select required>
            <option>Choose Service</option>
            <option value="Web Design">Web Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Brand Strategy">Brand Strategy</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </Select>
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
    </>
  );
};

export default Contact;
