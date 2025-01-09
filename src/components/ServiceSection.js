import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sec1 from '../assets/sec_5.png'
import sec2 from '../assets/sec_3.png'
import sec3 from '../assets/sec_2.png'
import sec4 from '../assets/sec_1.png'
import sec5 from '../assets/sec_4.png'
import sec6 from '../assets/sec_6.png'
import sec2_1 from '../assets/sec2_3.png'
import sec2_2 from '../assets/sec2_2.png'
import sec2_3 from '../assets/sec2_4.png'
import sec2_4 from '../assets/sec2_5.png'
import sec2_5 from '../assets/sec2_1.png'
import sec2_6 from '../assets/sec2_6.png'
import bgservice from '../assets/bgservice.png'
import lg1 from '../assets/lg_graphics.png'
import lg2 from '../assets/lg_graphics_1.png'
import lg3 from '../assets/lg_graphics_2.png'
import lg4 from '../assets/lg_graphics_3.png'
import lg5 from '../assets/lg_graphics_4.png'
import lg6 from '../assets/lg_graphics_5.png'
import lg7 from '../assets/lg_graphics_6.png'
import lg8 from '../assets/lg_graphics_7.png'
import lg9 from '../assets/lg_graphics_8.png'
import lg10 from '../assets/lg_graphics_9.png'
import lg11 from '../assets/lg_graphics_10.png'
import lg12 from '../assets/lg_graphics_11.png'


// Container for the Services Section
const ServicesSectionContainer = styled.div`
  width:100%;
  background: url(${bgservice}) no-repeat center center/cover; /* Add bgservice here */
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
  align-items: normal;
  

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 70px;
    color: #ff0000;
    margin-top: 0px;
  }
  h2 {
    font: normal normal normal 45px/82px Poppins;
    font-size: 45px;
    color:rgb(255, 255, 255);
    margin-bottom: 0px;
  }

  span {
      margin-top: 10%;
      font-family: 'Montserrat', sans-serif;
      font-size: 30px;
      color: rgb(255, 255, 255); /* Normal state */
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
          color: #ffdd00; /* Bright yellow on hover */
      }

      &.active {
          color: #f0a500; /* Stay yellow when active */
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
  grid-gap: 10px;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.6);

  
  @media (max-width: 1428px) {
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
  height: 400px;
  cursor: pointer;
  background: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;  // Ensure the overlay is above the image but below the text overlay
  }

  &:hover:before {
    opacity: 1;
  }

  .service-logo {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 2;  // Ensures the logo stays above the overlay
    width: 170px; // Adjust width as needed
    height: auto;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: 30px; // Adjust size for mobile
    }
  }
`;



const TextOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;

  .service-logo {
    width: 320px; /* Adjust width as needed */
    height: auto;
  }

  @media (max-width: 768px) {
    .service-logo {
      width: 30px; /* Adjust size for mobile */
    }
  }
`;


// Main Services Section Component
const ServicesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Immersive Technology');

  const immersiveTechnologyServices = [
    { image: sec1, logo: lg1, path: '/Service1' },
    { image: sec2, logo: lg2, path: '/Service1' },
    { image: sec3, logo: lg3, path: '/Service1' },
    { image: sec4, logo: lg4, path: '/Service1' },
    { image: sec5, logo: lg6, path: '/Service1' },
    { image: sec6, logo: lg5, path: '/Service1' },
  ];
  

  const learningPerformanceServices = [
    { image: sec2_1, logo: lg8, path: '/SService1' },
    { image: sec2_2, logo: lg7, path: '/SService1' },
    { image: sec2_3, logo: lg9, path: '/SService1' },
    { image: sec2_4, logo: lg11, path: '/SService1' },
    { image: sec2_5, logo: lg12, path: '/SService1' },
    { image: sec2_6, logo: lg10, path: '/SService1' },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const renderServiceGrid = (services) => (
    <ServiceGrid>
      {services.map((service, index) => (
        <ServiceCard key={index} onClick={() => handleCardClick(service.path)}>
          <img src={service.image} alt={`${service.logo} Service`} />
          <TextOverlay>
            <img 
              src={service.logo} 
              alt={`${service.logo} Logo`} 
              className="service-logo"
            />
          </TextOverlay>
        </ServiceCard>
      ))}
    </ServiceGrid>
  );
  

  return (
    <ServicesSectionContainer>
      <ServicesHeader>
      <div class="header-section">
        <h2>our</h2>
        <h1>SERVICES</h1>
      </div>
      <span
        className={activeTab === 'Immersive Technology' ? 'active' : ''}
        onClick={() => setActiveTab('Immersive Technology')}
      >
        Immersive Technology
      </span>
      <span
        className={activeTab === 'Learning & Performance' ? 'active' : ''}
        onClick={() => setActiveTab('Learning & Performance')}
      >
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
