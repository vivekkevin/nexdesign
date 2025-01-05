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

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12-column grid */
  grid-auto-rows: minmax(200px, auto); /* Ensures row height adapts */
  gap: 10px;
  padding: 20px;
  width: 90%;
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
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #f0a500;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #f0a500;
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
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-left: 5px solid #f0a500;
  font-size: 18px;
  color: ${props => props.isLast ? 'red' : 'white'};
`;

const Sfoot = ({ currentIndex, setCurrentIndex, slides }) => {
  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(slides.length - 1, currentIndex + 1));
  };

  if (!slides || slides.length === 0 || currentIndex >= slides.length) {
    return <Container>No Data Available</Container>;
  }

  const { title, subtitle, services, bgImage } = slides[currentIndex];

  return (
    <Container bgImage={bgImage}>
      <Title>{title}</Title>
      <Header>
        <Button onClick={handlePrev}>Previous</Button>
        <Title>{subtitle}</Title>
        <Button onClick={handleNext}>Next</Button>
      </Header>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceItem key={index} isLast={service === '............Many More'}>
            {service}
          </ServiceItem>
        ))}
      </ServiceList>
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
      <LargeImage src={galleryImage8} alt="Large Image 8" style={{ gridColumn: "span 6", gridRow: "span 1", marginTop:'-7%' }} />
      <LargeImage src={galleryImage9} alt="Large Image 9" style={{ gridColumn: "span 3", gridRow: "span 2", marginLeft:'-33%', marginTop:'-8%' }} />
    </GalleryContainer>
    </Container>
  );
};

export default Sfoot;
