import React from 'react';
import styled from 'styled-components';
import Nexbgstr from '../assets/nexbgs.png'; // Unused import, consider removing if not needed elsewhere
import galleryImage1 from '../assets/gallery-image1.png'; // Check if these are used elsewhere or remove
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
  gap: 40px;
`;

const Title = styled.h1`
  font: normal 600 40px/82px Poppins;
`;

const TitlePart = styled.span`
  color: ${props => props.color}; // Uses a color prop to determine text color
`;

const Subtitle = styled.h2` // Changed from h1 for better semantic structure
  text-align: center;
  font: normal 300 25px/60px Poppins;
  color: #FFFFFF;
  opacity: 1;
`;

const Htitle = styled.h1`
  text-align: center;
  font: normal 600 40px/129px Poppins;
  color: #E8001A;
  text-transform: capitalize;
  opacity: 1;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0);
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  &:hover {
    background-color: rgba(240, 165, 0, 0.5); // Added alpha value for transparency
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 20px;
`;

const ServiceItem = styled.li`
  padding: 8px 0;
  margin-left: 10%;
`;

const HeadingWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const Dash = styled.span`
  display: inline; // Display inline to keep it on the same line as the heading
  color: red;
  font-size: 30px; // Adjust size as needed
  margin-right: 10px; // Adds a small space between the dash and the heading
  font-weight: bold; // Makes the dash thicker
`;


const Heading = styled.h2`
  display: inline; // Ensure the heading is also inline to stay on the same line as the dash
  color: #FFCF4D;
  margin: 4px 0;
  font: normal 600 35px/53px Poppins;
`;

const Description = styled.p`
  color: white;
  font: normal 300 28px/42px Poppins;
  margin-left:35px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows items to wrap onto the next line
  justify-content: space-between; // Distributes space between items on the same line
  padding: 20px;
  color: white;
  font-family: Poppins, sans-serif;
  width: 70%; // Full width of the container
`;

const InfoItem = styled.div`
  font: normal normal normal 22px/63px Poppins;
  margin-bottom: 10px; // Adds space below each item
  flex: 1 1 50%; // Takes up half of the line by default

  &:last-child {
    flex-basis: 100%; // Makes the last item take the full line
  }
`;



const SSfoot = ({ currentIndex, setCurrentIndex, sslides }) => {
  if (!sslides || sslides.length === 0 || currentIndex < 0 || currentIndex >= sslides.length) {
    return <Container>No Data Available</Container>;
  }

  const { title, subtitle, learningTopics, htitle, bgImage, infoitem, infoitem1, infoitem2, infoitem3 } = sslides[currentIndex];
  const titleParts = title.split(" - "); // Splitting the title on " - "

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(sslides.length - 1, currentIndex + 1));
  };

  return (
    <Container bgImage={bgImage}>
      <Header>
        <Button onClick={handlePrev} image={previous} />
        <Title>
          <TitlePart color="red">{titleParts[0]}</TitlePart>
          <TitlePart color="white"> - {titleParts[1]}</TitlePart>
        </Title>
        <Button onClick={handleNext} image={next} />
      </Header>
      <Subtitle>{subtitle}</Subtitle>
      <Htitle>{htitle}</Htitle>
      <ServiceList>
        {learningTopics.map((topic, index) => (
          <ServiceItem key={index}>
            <HeadingWrapper>
              <Dash>—</Dash>
              <Heading>{topic.heading}</Heading>
            </HeadingWrapper>
            <Description>{topic.description}</Description>
          </ServiceItem>
        ))}
          <InfoSection>
            <InfoItem>{infoitem}</InfoItem>
            <InfoItem>{infoitem1}</InfoItem><br/>
            <InfoItem>{infoitem2}</InfoItem>
          </InfoSection>
      </ServiceList>
    </Container>
  );
};

export default SSfoot;
