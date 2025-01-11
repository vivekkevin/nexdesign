import React from 'react';
import styled from 'styled-components';
import bgservice from '../assets/bgservice.png';
import image1 from '../assets/client1.png';
import image2 from '../assets/client2.png';
import image3 from '../assets/client3.png';
import image4 from '../assets/client4.png';
import image5 from '../assets/client5.png';
import image6 from '../assets/client6.png';

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
  h2, h3 {
    display: flex;
    align-items: center;
    margin: 0;
    font: 75px/58px Poppins;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  h2 { color: #FFFFFF; }
  h3 { color: #E8001A; font-weight: bold; }
`;

const PortfolioLinks = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1rem;
  color: #fff;
  margin-right: 20%;
  font: normal normal normal 25px/82px Poppins;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  background-color: rgba(0, 0, 0, 0.5);  // Added a semi-transparent background
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Subtle shadow for depth
  transition: transform 0.3s ease-in-out; // Smooth transform effect

  h2, h3, p {
    margin: 10px 0; // Uniform margin for all text elements
  }

  h2 {
    font: normal normal medium 40px/130px Poppins;
    color: #FFBB00; // Highlight color for the name
  }

  h3 {
    font-size: 18px; // Smaller font size for role
    color: #CCCCCC; // Grey color for the role
  }

  p {
    font-size: 16px; // Standard font size for descriptions
    text-align: justify; // Justified text for a cleaner look
    line-height: 2; // Improved line height for readability
  }

  &:hover {
    transform: scale(1.05); // Slightly increase size on hover
  }
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
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

const teamMembers = [
  { name: "Sachin Kumar", role: "Chief Executive Officer", slogan: "'' We Create, You Succeed ''", description: "We believe in the power of storytelling through the art of animation and visual effects. As CEO, I am honored to lead a company that not only thrives on innovation but also places a strong emphasis on collaboration, creativity, and client success.", image: image1, bgColor: "#222" },
  { name: "Sumedha NR", role: "Chief Creative Officer", slogan: "'' Immersive Digital Artistry Mastery ''", description: "As CCO, I am driven by the vision of bringing imagination to life through animation and visual effects, blending artistry with cutting-edge technology to create experiences that captivate, inspire and place creativity at the core of everything.", image: image6, bgColor: "#E8001A" },
  { name: "Sahana R Shindhe", role: "Chief Operating Officer", slogan: "'' Your Story, Our Animation ''", description: "As COO drives operational excellence, ensuring seamless collaboration and innovation. With a passion for fostering creativity, they empower teams to deliver captivating animation and visual effects, transforming imaginative concepts into impactful experiences.", image: image2, bgColor: "#222" },
  { name: "Rashmi Hegde", role: "Lead - Motion Graphics Designer", description: "As Lead Motion Graphics Designer at Nex Design Studio, I craft visually stunning animations that bring stories to life. With a keen eye for detail and a passion for creativity, I collaborate with teams to deliver captivating designs that inspire and engage audiences.", image: image4, bgColor: "#E8001A" },
  { name: "Naveena K", role: "Senior - UI | UX Designer", description: "As Senior UI/UX Designer at Nex Design Studio, I blend creativity with user-centered design principles to create intuitive and engaging interfaces. My focus is on enhancing user experiences, ensuring that every interaction is seamless, enjoyable, and visually compelling for our clients.", image: image5, bgColor: "#E8001A" },
  { name: "Sneha Swami", role: "UX Designer / Writing", description: "As a UX & Writing Designer at Nex Design Studio, I create engaging narratives and user-friendly interfaces that resonate with audiences. By merging compelling storytelling with thoughtful design, I enhance user experiences, ensuring every interaction is meaningful and memorable.", image: image3, bgColor: "#222" }
];

const Team = () => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <HeaderContent>
          <PortfolioHeading><h2>meet</h2> <span><h3>Our Team</h3></span></PortfolioHeading>
        </HeaderContent>
        <PortfolioLinks>
          <span>Nex Design Studio Is a Blend Of Creativity, Innovation, and Expertise.</span>
        </PortfolioLinks>
      </PortfolioHeader>
      <PortfolioGrid>
        {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
            {((index % 4 === 0 || index % 4 === 1) && (
              <>
                <PortfolioCard>
                  <Image src={member.image} alt={member.name} />
                </PortfolioCard>
                <PortfolioCard bgColor={member.bgColor}>
                  <PortfolioCardContent>
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p>{member.slogan}</p>
                    <p>{member.description}</p>
                  </PortfolioCardContent>
                </PortfolioCard>
              </>
            )) || (index % 4 === 2 || index % 4 === 3) && (
              <>
                <PortfolioCard bgColor={member.bgColor}>
                  <PortfolioCardContent>
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p>{member.slogan}</p>
                    <p>{member.description}</p>
                  </PortfolioCardContent>
                </PortfolioCard>
                <PortfolioCard>
                  <Image src={member.image} alt={member.name} />
                </PortfolioCard>
              </>
            )}
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
