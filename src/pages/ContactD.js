import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import Contact from '../components/Contact_1';
import Sfoot from '../components/Sfoot_1';
import Portfolio from '../components/Portfolio';

// Container for the Work Page
const ContactDContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #111111;
`;

const ContactD = () => {
  return (
    <ContactDContainer>
      <MainHead
        mainTextParts={[
          { text: 'GET IN', color: 'white' },
          { text: 'TOUCH', color: 'red' },
        ]}
        subText="Reach Out to Us"
        pageName="Nexbg8" // Ensure this matches the key in MainHead
      />
      <div>
    </div>
      <Sfoot />
      <Contact />
    </ContactDContainer>
  );
};

export default ContactD;
