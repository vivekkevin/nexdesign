import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Container for the Services Section
const ServicesSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #111111;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Services Header with clickable tabs
const ServicesHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 4vw;
    color: #ff0000;
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 2vw;
    color: #f0a500;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #ffdd00;
    }
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
  margin-top: 20px;

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
  height: 300px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

// Text Overlay for the Service Card
const TextOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  font-family: 'MBF Canno', sans-serif;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  .nex {
    font-size: 1.5vw;
    font-weight: 700;
    color: #ff0000;
    margin-right: 5px;
    font: normal normal normal 35px/42px 'MBF Canno', sans-serif;
  }

  .description {
    font-size: 1vw;
    font-weight: 500;
    font: normal normal normal 35px/42px 'MBF Canno', sans-serif;
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Immersive Technology');

  const immersiveTechnologyServices = [
    { image: '/assets/sec_1.png', title: 'Graphics', path: '/3d-modeling' },
    { image: '/assets/sec_2.png', title: 'UI UX', path: '/3d-modeling' },
    { image: '/assets/sec_3.png', title: 'Digital Marketing', path: '/3d-modeling' },
    { image: '/assets/sec_4.png', title: 'Web Design', path: '/3d-modeling' },
    { image: '/assets/sec_5.png', title: 'Video Production', path: '/3d-modeling' },
    { image: '/assets/sec_6.png', title: '3D Modeling', path: '/3d-modeling' },
  ];

  const learningPerformanceServices = [
    { image: '/assets/sec2_1.png', title: 'Web Design', path: '/3d-modeling' },
    { image: '/assets/sec2_2.png', title: 'Video Production', path: '/3d-modeling' },
    { image: '/assets/sec2_3.png', title: '3D Modeling', path: '/3d-modeling' },
    { image: '/assets/sec2_4.png', title: 'Web Design', path: '/3d-modeling' },
    { image: '/assets/sec2_5.png', title: 'Video Production', path: '/3d-modeling' },
    { image: '/assets/sec2_6.png', title: '3D Modeling', path: '/3d-modeling' },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const renderServiceGrid = (services) => (
    <ServiceGrid>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          onClick={() => handleCardClick(service.path)}
        >
          <img src={service.image} alt={`${service.title} Service`} />
          <TextOverlay>
            <span className="nex">NEX</span>
            <span className="description">{service.title}</span>
          </TextOverlay>
        </ServiceCard>
      ))}
    </ServiceGrid>
  );

  return (
    <ServicesSectionContainer>
      <ServicesHeader>
        <h1>SERVICES</h1>
        <span onClick={() => setActiveTab('Immersive Technology')}>
          Immersive Technology
        </span>
        <span onClick={() => setActiveTab('Learning & Performance')}>
          Learning & Performance
        </span>
      </ServicesHeader>

      {activeTab === 'Immersive Technology'
        ? renderServiceGrid(immersiveTechnologyServices)
        : renderServiceGrid(learningPerformanceServices)}
    </ServicesSectionContainer>
  );
};

export default ServicesSection;
