import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import ServiceSection from '../components/ServiceSection';
import Contact from '../components/Contact';
import Team from '../components/TTeam';

// Container for the Work Page
const TeamContainer = styled.div`
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
    <TeamContainer>
      <MainHead
        mainTextParts={[
          { text: 'OUR', color: 'white' },
          { text: 'TEAM', color: 'red' },
        ]}
        subText="Meet the Nex Team"
        pageName="Nexbg9" // Ensure this matches the key in MainHead
      />
      <Team />
      <Contact />
    </TeamContainer>
  );
};

export default Work;
