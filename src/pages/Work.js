import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import ServiceSection from '../components/ServiceSection';
import Contact from '../components/Contact';

// Container for the Work Page
const WorkContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #111111;
`;

const Work = () => {
  return (
    <WorkContainer>
      <MainHead
        mainTextParts={[
          { text: 'OUR', color: 'white' },
          { text: 'WORK', color: 'red' },
        ]}
        subText="Check Out Our Stuffs"
        pageName="work" // Ensure this matches the key in MainHead
      />
      <ServiceSection />
      <Contact />
    </WorkContainer>
  );
};

export default Work;
