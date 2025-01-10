import React from 'react';
import styled from 'styled-components';
import Nexbgstr from '../assets/nexbgs.png';
import galleryImage1 from '../assets/gallery-image1.png';
import galleryImage2 from '../assets/gallery-image2.png';
import galleryImage3 from '../assets/gallery-image3.png';
import galleryImage4 from '../assets/gallery-image4.png';
import galleryImage5 from '../assets/gallery-image5.png';
import galleryImage6 from '../assets/gallery-image6.png';
import galleryImage7 from '../assets/gallery-image7.png';
import galleryImage8 from '../assets/gallery-image8.png';
import galleryImage9 from '../assets/gallery-image9.png';
import next from '../assets/next.png';
import previous from '../assets/previous.png';

const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;


const Container = styled.div`
  background-color: #121212;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;


const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap:40px;
`;

const Title = styled.h1`
  font: normal normal normal 40px/82px Poppins;
  color:rgb(255, 255, 255);
`;

const Subtitle = styled.h1`
text-align: center;
font: normal normal normal 25px/60px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`;

const Htitle = styled.h1`
text-align: left;
font: normal normal 600 40px/129px Poppins;
letter-spacing: 0px;
color: #E8001A;
text-transform: capitalize;
opacity: 1;
`;





const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Specific width for the buttons
  height: 50px; // Specific height for the buttons
  padding: 0; // No padding needed if images fit button size
  border: none;
  background: rgba(255, 255, 255, 0);
  border-radius:50%;
  cursor: pointer;
  background-image: url(${props => props.image}); // Use image prop for background
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; // Ensure image fits within the button without distortion
  &:hover {
    background-color: #f0a500; // Change on hover
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 20px;
`;

const ServiceItem = styled.li`
  padding: 8px 0;
  margin-left: 40px; // Adjust according to your design needs
  &:before {
    content: '— '; // Adds a dash before each item
    color: red; // Orange dash color
    margin-top:10px;
  }
`;

const Heading = styled.h2`
  color: #E8001A; // Red color for heading
  margin: 0 0 4px 30px; // Space between heading and description
`;

const Description = styled.p`
  color: white; // White color for description
`;



const SSfoot = ({ currentIndex, setCurrentIndex, sslides }) => {
  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(sslides.length - 1, currentIndex + 1));
  };

  if (!sslides || sslides.length === 0 || currentIndex >= sslides.length) {
    return <Container>No Data Available</Container>;
  }

  const { title, subtitle, learningTopics, bgImage } = sslides[currentIndex];

  return (
    <Container bgImage={bgImage}>
      <Header>
        <Button onClick={handlePrev} image={previous} />
        <Title>{title}</Title>
        <Button onClick={handleNext} image={next} />
      </Header>
      <Subtitle>{subtitle}</Subtitle>
      <Htitle>Mastering Graphic Design, You Will Learn:</Htitle>
      <ServiceList>
        {learningTopics.map((topic, index) => (
          <ServiceItem key={index}>
            <Heading>{topic.heading}</Heading>
            <Description>{topic.description}</Description>
          </ServiceItem>
        ))}
      </ServiceList>
    </Container>
  );
};

export default SSfoot;
