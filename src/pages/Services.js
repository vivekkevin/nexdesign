import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import ServiceSection from '../components/ServiceSection';
import Contact from '../components/Contact';

// Container for the Services Page
const ServicesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #111111;
`;


// Services Page Component
const Services = () => {
  return (
    <ServicesContainer>
      {/* Main Head Section with Dynamic Colors */}
      <MainHead
        mainTextParts={[
          { text: 'UNL', color: 'white' },
          { text: 'IMI', color: 'red' },
          { text: 'TED', color: 'white' },
        ]}
        subText="Creative Services, Come Grab Them !"
      />

      <ServiceSection />
      <Contact />
    </ServicesContainer>
  );
};

export default Services;
