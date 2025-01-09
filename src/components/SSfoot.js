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

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12-column grid */
  grid-auto-rows: minmax(200px, auto); /* Ensures row height adapts */
  gap: 10px;
  padding: 20px;
  width: 100%;
  margin-left:250px;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const LargeImage = styled(Image)`
  grid-column: span 3; /* Large images take half width */
  grid-row: span 2; /* Take up two rows */
`;

const MediumImage = styled(Image)`
  grid-column: span 4; /* Medium images take 4 columns */
  grid-row: span 2;
`;

const SmallImage = styled(Image)`
  grid-column: span 3; /* Small images take 3 columns */
  grid-row: span 1;
`;

const Container = styled.div`
  background-color: #121212;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Nexbgstr});
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

const Sub = styled.h1`
  position: relative; // Ensures the pseudo-element positions correctly
  font: normal normal normal 25px/82px Poppins; // Verify Poppins is loaded
  color: #E8001A;
  margin-top: -150px; // Be cautious with this in your layout

  &:after {
    content: '→'; // Simple right arrow character
    position: absolute;
    right: -20px; // Adjust positioning as needed
    top: 50%;
    transform: translateY(-50%); // Centers the arrow vertically
    color: #f0a500; // Arrow color, corrected to include '#'
    font-size: 18px; // Arrow size
    font-weight: 700; // Increases the thickness of the arrow
  }
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

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 20px;
  margin-top: 10px;
`;

const ServiceItem = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0);
  padding: 10px;
  padding-left: 30px; /* Adjust padding to position text as needed */
  font: normal normal normal 26px/82px Poppins;
  color: ${props => props.isLast ? 'red' : 'white'};

  &:before {
    content: '-';
    position: absolute;
    left: 7px; /* Position of the hyphen */
    color: #E8001A; /* Color of the hyphen */
    font-size: 30px; /* Size of the hyphen */
  }

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

  const { title, subtitle, services, bgImage } = sslides[currentIndex];

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
        {services.map((service, index) => (
          <ServiceItem key={index} isLast={service === '............Many More'}>
            {service}
          </ServiceItem>
        ))}
      </ServiceList>
      <Title>Explore These Examples Of Our Work To See How We Can Help You!</Title>
      <Subtitle>Nex Graphics Samples</Subtitle>
      <GalleryContainer>
      {/* First Row */}
      <LargeImage src={galleryImage1} alt="Large Image 1" style={{ gridColumn: "span 3", gridRow: "span 3" }} />
      <MediumImage src={galleryImage2} alt="Medium Image 2" style={{ gridColumn: "span 3", gridRow: "span 1" }} />
      <SmallImage src={galleryImage3} alt="Small Image 3" style={{ gridColumn: "span 2", gridRow: "span 1" }} />
      <MediumImage src={galleryImage4} alt="Medium Image 4" style={{ gridColumn: "span 3", gridRow: "span 1" }} />

      {/* Second Row */}
      <MediumImage src={galleryImage5} alt="Medium Image 5" style={{ gridColumn: "span 3", gridRow: "span 1", marginTop:'-25%' }} />
      <SmallImage src={galleryImage6} alt="Small Image 6" style={{ gridColumn: "span 2", gridRow: "span 1", marginTop:'-40%' }} />
      <MediumImage src={galleryImage7} alt="Medium Image 7" style={{ gridColumn: "span 3", gridRow: "span 1", marginTop:'2%' }} />

      {/* Third Row */}
      <LargeImage src={galleryImage8} alt="Large Image 8" style={{ gridColumn: "span 6", gridRow: "span 1", marginTop:'-4%' }} />
      <LargeImage src={galleryImage9} alt="Large Image 9" style={{ gridColumn: "span 3", gridRow: "span 2", marginLeft:'-33%', marginTop:'-4%' }} />

    </GalleryContainer>
    <Sub>View All Graphics Samples</Sub>
    </Container>
  );
};

export default SSfoot;
