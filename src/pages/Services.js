import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import ServiceSection from '../components/ServiceSection';
import Contact from '../components/Contact';

const ServicesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #111111;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <MainHead
        mainTextParts={[
          { text: 'UNL', color: 'white' },
          { text: 'IMI', color: 'red' },
          { text: 'TED', color: 'white' },
        ]}
        subText="Creative Services, Come Grab Them!"
        pageName="services"
      />
      <ServiceSection />
      <Contact />
    </ServicesContainer>
  );
};

export default Services;
