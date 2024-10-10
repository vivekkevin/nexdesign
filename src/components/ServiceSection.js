import React from 'react';
import styled from 'styled-components';

// Container for the Services Section
const ServicesSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #111111;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Services Header
const ServicesHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 4vw;
    color: #ff0000; /* Red color for "SERVICES" */
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 2vw;
    color: #f0a500; /* Yellow color for highlighted text */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 8vw;
      margin-bottom: 20px;
    }

    span {
      font-size: 5vw;
    }
  }
`;

// Grid Container for the Service Cards
const ServiceGrid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// Individual Service Card Container
const ServiceCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1); /* Zoom effect on hover */
    }
  }
`;

// Text Overlay for the Service Card
const TextOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  /* Red "NEX" text styling */
  .nex {
    font-size: 1.5vw;
    font-weight: 700;
    color: #ff0000; /* Red Color */
    margin-right: 5px;
  }

  /* Smaller descriptive text styling */
  .description {
    font-size: 1vw;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .nex {
      font-size: 3.5vw;
    }

    .description {
      font-size: 2.5vw;
    }
  }
`;

// Main Services Section Component
const ServicesSection = () => {
  return (
    <ServicesSectionContainer>
      {/* Header for the Services Section */}
      <ServicesHeader>
        <h1>SERVICES</h1>
        <span>Immersive Technology</span>
        <span>Learning & Performance</span>
      </ServicesHeader>

      {/* Services Grid with Cards */}
      <ServiceGrid>
        <ServiceCard>
          <img src="/assets/service-graphics.jpg" alt="Graphics Service" />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">Graphics</span>
          </TextOverlay>
        </ServiceCard>

        <ServiceCard>
          <img src="/assets/service-uiux.jpg" alt="UI/UX Service" />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">UI UX</span>
          </TextOverlay>
        </ServiceCard>

        <ServiceCard>
          <img src="/assets/service-digitalmarketing.jpg" alt="Digital Marketing Service" />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">Digital Marketing</span>
          </TextOverlay>
        </ServiceCard>

        <ServiceCard>
          <img src="/assets/service-webdesign.jpg" alt="Web Design Service" />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">Web Design</span>
          </TextOverlay>
        </ServiceCard>

        <ServiceCard>
          <img src="/assets/service-video.jpg" alt="Video Production Service" />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">Video Production</span>
          </TextOverlay>
        </ServiceCard>

        <ServiceCard>
          <img src="/assets/service-3dmodeling.jpg" alt="3D Modeling Service" />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">3D Modeling</span>
          </TextOverlay>
        </ServiceCard>
      </ServiceGrid>
    </ServicesSectionContainer>
  );
};

export default ServicesSection;
