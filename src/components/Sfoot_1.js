import React from 'react';
import styled from 'styled-components';
import Nexbgstr from '../assets/nexbgs.png';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-image: url(${Nexbgstr});
  color: #fff; /* White text color */
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column; // Stacks children vertically
  align-items: left; // Centers children horizontally
  text-align: left; // Ensures text is centered if more specific alignment is needed
`;

const ContactInfo = styled.div`
  width: 43%;
  margin-left: 5%;
  font: normal normal normal 25px/58px Poppins;
  
  h2{
  display: flex;
  font: normal normal normal 70px/90px Poppins;
  align-items: center;
  color:rgb(255, 255, 255); /* Highlight color for form headings */
  display: inline-block; /* Inline display for side by side */
  margin: 0;
  }
  h3{
  display: flex;
  font: normal normal bold 70px/90px Poppins;
  align-items: center;
  color: #E8001A; /* Highlight color for form headings */
  display: inline-block; /* Inline display for side by side */
  margin: 0;
  }
  h4{
  display: flex;
  align-items: center;
  font: normal normal medium 26px/39px Poppins;
  color: #FFBB00;
  gap: 10px;
  }
  background-size: cover;
  background-position: center;

  p{
  font: normal normal normal 25px/58px Poppins;
  margin-left: 7%;
  }

  svg {
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
`;

const Form = styled.form`
  display: flex; // Enables flexbox properties
  flex-direction: column; // Stacks children vertically
  width: 40%;
  margin-right: 60px;
  background-image: url('https://example.com/path-to-your-image2.jpg'); // Add your background image URL here
  background-size: cover;
  background-position: center;
  gap: 20px; // This will now correctly apply a gap between flex items
  

  h2, h3 {
    display: flex; // Ensures that the content is flexible
    align-items: center; // Centers the content vertically
    font: 70px/90px Poppins; // Font shorthand for both headers
    color: #FFF; // White color for h2
    margin: 0; // Removes default margin
  }

  h3 {
    color: #E8001A; // Highlight color for h3
    font-weight: bold; // Bold font weight for h3
  }
`;


const Input = styled.input`
  width: 100%;
  height: 5%;
  padding: 10px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.8); /* Slightly transparent background for inputs */
  border-radius: 9px;
  
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.8); /* Slightly transparent background for textarea */
  border-radius: 9px;
`;

const Button = styled.button`
    width: 20%; /* Button width relative to form */
    background-color: #f0a500;
    color: #000;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px; /* Rounded corners for the button */

    &:hover {
      background-color: #c68500;
    }
`;

const P1 = styled.div`
display: flex;
text-align: left;
align-item: center;
font: normal normal normal 26px/39px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
gap: 20px;
padding-bottom: 25px;
`;

const P2 = styled.div`
  display: flex;
  align-items: center;
  font: bold 25px/90px Poppins;
  color: #FFBB00;
  gap: 15px;
`;

const Select = styled.select`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.8);
`;

const ContactDetails = () => {
  return (
    <ContactContainer>
      <ContactInfo>
        <TitleContainer>
          <h2>Contact</h2>
          <h3>Us?</h3> 
        </TitleContainer>
        Whether you’re launching a new brand or revitalizing an existing one, we’re here to help. Reach out to us today, and let’s start building something amazing together.
        <P2><FaMapMarkerAlt /><div> Regd:</div></P2>
        <p>#213, 2nd floor Ramanashree Arcade 18, MG Road Bangalore 560001</p>
        <P2><FaMapMarkerAlt /><div> Studio Address:</div></P2>
        <p>Whitefield Main Rd, Near ITPL, Brigade Metropolis, Garudachar Palya, Mahadevapura, Bengaluru, &nbsp; &nbsp; &nbsp; Karnataka 560048</p>
        <P1><FaEnvelope /><div> connect@nexdesignstudio.com</div></P1>
        <P1><FaPhoneAlt /><div> +91 9353759335, +91 8660811575</div></P1>
      </ContactInfo>
      <Form>
        <TitleContainer>
          <h2>Let's</h2><h3>WORK Together</h3>
          </TitleContainer>
        <Input type="text" placeholder="Enter Your Name*" />
        <Input type="text" placeholder="Enter Your Phone Number*" />
        <Input type="email" placeholder="Enter Your Email ID*" />
        <Select id="dropdown" required>
          <option value="" hidden>Choose Services</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Web Development">Web Development</option>
          <option value="Video Design">Video Design</option>
          <option value="3D Animation">3D Animation</option>
          <option value="Workshop & Learning Performance">Workshop & Learning Performance</option>
        </Select>
        <TextArea placeholder="Message"></TextArea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};


export default ContactDetails;
