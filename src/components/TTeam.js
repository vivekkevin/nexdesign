import React from 'react';
import styled from 'styled-components';
import bgservice from '../assets/bgservice.png';
import image1 from '../assets/client1.png';
import image2 from '../assets/client1.png';
import image3 from '../assets/client1.png';
import image4 from '../assets/client1.png';


// Styled components
const PortfolioContainer = styled.div`
  text-align: center;
  background-color: #000;
  background-image: url(${bgservice});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const PortfolioHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HeaderContent = styled.div`
  flex: 1;
  text-align: left;
`;

const PortfolioHeading = styled.h1`
  font-size: 70px;
  font-family: 'Poppins', sans-serif;
  line-height: 90px;
  color: #fff;
  margin-left: 40%;
  margin-top: 50px;
`;

const PortfolioLinks = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1rem;
  color: #fff;
  margin-right: 30%;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Changed to 2 for simplicity
  padding: 70px;
`;

const PortfolioCard = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`;

const PortfolioCardContent = styled.div`
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  margin-bottom: 40px;
`;

const RectToggle = styled.div`
  width: 50px;
  height: 5px;
  background-color: #666;
  border-radius: 5px;
  cursor: pointer;
  transition: width 0.3s ease, background-color 0.3s ease;

  &.active {
    width: 100px;
    background-color: #FFBB00;
  }
`;

// Sample data for team members
const teamMembers = [
  { name: "Sachin Kumar", role: "Chief Executive Officer", slogan: "We Create, You Succeed", image: image1 },
  { name: "Sahana R Shindhe", role: "Chief Operating Officer", slogan: "Your Story, Our Animation", image: image2 },
  { name: "Rashmi Hegde", role: "Lead Motion Graphics Designer", slogan: "Animating Your Ideas", image: image3 }
];

const Team = () => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <HeaderContent>
          <PortfolioHeading>Meet <span>Our Team</span></PortfolioHeading>
        </HeaderContent>
        <PortfolioLinks>
          <span>Nex Design Studio Is a Blend Of Creativity, Innovation, and Expertise.</span>
        </PortfolioLinks>
      </PortfolioHeader>
      <PortfolioGrid>
        {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
            <PortfolioCard>
              <Image src={member.image} alt={member.name} />
            </PortfolioCard>
            <PortfolioCard bgColor="#222">
              <PortfolioCardContent>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.slogan}</p>
              </PortfolioCardContent>
            </PortfolioCard>
          </React.Fragment>
        ))}
      </PortfolioGrid>
      <ToggleContainer>
        <RectToggle className="active" />
        <RectToggle />
      </ToggleContainer>
    </PortfolioContainer>
  );
};

export default Team;
