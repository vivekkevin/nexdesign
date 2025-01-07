import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import Contact from '../components/Contact';
import Sfoot from '../components/Sfoot_2';
import Portfolio from '../components/Portfolio';

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

const Carrer = () => {
  return (
    <WorkContainer>
      <MainHead
        mainTextParts={[
          { text: 'WORK', color: 'white' },
          { text: 'WITH US!', color: 'red' },
        ]}
        subText="Join Our Team"
        pageName="Nexbg7" // Ensure this matches the key in MainHead
      />
      <div>
    </div>
      <Sfoot />
      <Contact />
    </WorkContainer>
  );
};

export default Carrer;
