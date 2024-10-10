import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';

// Container for the whole About Section
const AboutContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// Section Wrapper for Each Part
const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  padding: 60px;
  text-align: left;

  @media (max-width: 768px) {
    height: auto; /* Allow sections to expand based on content */
    flex-direction: column; /* Stack sections vertically */
    padding: 30px; /* Reduced padding for mobile */
  }
`;

const SectionWrapper1 = styled(SectionWrapper)`
  height: 30vh;

  @media (max-width: 768px) {
    height: auto; /* Allow sections to expand based on content */
  }
`;

const SectionWrapper2 = styled(SectionWrapper)`
  height: 70vh;

  @media (max-width: 768px) {
    height: auto; /* Allow sections to expand based on content */
    padding: 20px; /* Reduced padding for mobile */
  }
`;

// Left Section for Image and Text
const LeftSection = styled.div`
  height: 100%;
  width: 50vw;
  background: url('/assets/aboutImage.png') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh; /* Adjust image height for mobile */
  }
`;

// Right Section for Content
const RightSection = styled.div`
  height: 100%;
  width: 50vw;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px; /* Reduced padding for mobile */
  }
`;

// Welcome Text in the Left Section
const WelcomeText = styled.h1`
  font-size: 36px;
  color: #f0a500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduced font size for mobile */
  }
`;

// Nex Design Studio Text
const StudioText = styled.h2`
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 24px; /* Reduced font size for mobile */
  }
`;

// Right Section Heading
const RightHeading = styled.h1`
  font-size: 32px;
  color: #ffcc3f;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduced font size for mobile */
    text-align: center; /* Center align for better visibility */
  }
`;

// Paragraph Text in the Right Section
const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduced font size for mobile */
    text-align: center; /* Center align text */
  }
`;

// Main Section Wrapper for the "Why Choose Us" layout
const WhyChooseUsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 40px 0;
  background: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on mobile */
    padding: 20px;
  }
`;

// Left Column: Service Icons in Two Rows
const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  grid-gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Show 2 items per row on mobile */
    grid-gap: 20px; /* Smaller gaps on mobile */
  }
`;

// Center Column: Large Creative Idea Icon
const CenterColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px; /* Add margin for spacing */
  }
`;

// Large Icon Styling
const LargeIcon = styled.img`
  width: 250px;
  height: 250px;

  @media (max-width: 768px) {
    width: 150px; /* Adjust icon size for mobile */
    height: 150px;
  }
`;

// Right Column: Why Choose Us Text
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 10px;

  @media (max-width: 768px) {
    text-align: center; /* Center align text for mobile */
    margin-top: 20px; /* Add margin for spacing */
  }
`;

// Text Column Items for "Why Choose Us"
const TextColumnItem = styled.div`
  font-size: 3vw;
  font-family: 'Montserrat', sans-serif;
  color: ${({ color }) => color || '#333'};
  text-transform: uppercase;
`;

// Bold NEX Text
const NexText = styled.h1`
  font-size: 100px;
  color: #ffffff;
  text-align: right;
  margin-top: auto; /* Push to the bottom */
  opacity: 0.1; /* Faint opacity for a subtle effect */
`;

// Container for "Who We Are" Section
const WhoWeAreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

// Left Text for Who We Are Section
const LeftText = styled.div`
  flex: 1;
  text-align: center;

  h1 {
    font-size: 3vw;
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    margin: 0;
  }

  h1 span {
    color: #f0a500;
    font-size: 4vw;
    margin-right: 10px;
  }
`;

// Right Text for Who We Are Section
const RightText = styled.div`
  flex: 2;
  font-size: 1.2vw;
  line-height: 1.6;
  color: #333;
`;


// Individual Service Icon Box Styling
const ServiceBox = styled.div`
  text-align: center;
  width: 150px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.1vw;
    color: #000;
    margin: 10px 0;
  }

  p {
    font-size: 0.9vw;
    color: #555;
  }
`;

const ProcessSection = styled.div`
  width: 100%;
  padding: 60px 0;
  background: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Section Title
const SectionTitle = styled.h1`
  font-size: 3.5vw;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 40px;

  span {
    color: #ff0000; /* Red color for emphasis */
  }
`;

// Container for the Process Steps
const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-gap: 40px; /* Gap between cards */
  width: 90%;
  max-width: 1200px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards in a single column */
  }
`;

// Individual Card Styling
const ProcessCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Lift effect on hover */
  }

  /* Number Circle */
  .number {
    width: 50px;
    height: 50px;
    background: #ff0000; /* Red background */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  /* Icon Image */
  .icon {
    margin-bottom: 20px;
  }

  /* Title and Description */
  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #111111;
  }

  p {
    color: #555555;
    font-size: 1em;
  }
`;


// About Component Implementation
const About = () => {
  return (
    <AboutContainer>
      {/* First Section: Welcome Section with Image on Left and Text on Right */}
      <SectionWrapper bgColor="#000">
        <LeftSection>
          <WelcomeText>Welcome to</WelcomeText>
          <StudioText>Nex Design Studio</StudioText>
        </LeftSection>
        <RightSection>
          <RightHeading>Your Vision, Our Expertise</RightHeading>
          <ParagraphText>
            Where creativity meets innovation. We are a dynamic design studio committed to bringing your vision to life through exceptional design solutions.
          </ParagraphText>
          <ParagraphText>
            Our team of talented designers, developers, and strategists work collaboratively to deliver unique and impactful designs that elevate your brand and captivate your audience.
          </ParagraphText>
          <NexText>NEX</NexText>
        </RightSection>
      </SectionWrapper>

      {/* Second Section: Who We Are */}
      <SectionWrapper1 bgColor="#ffffff">
        <WhoWeAreContainer>
          <LeftText>
            <h1>
              <span>who</span>ARE we
            </h1>
          </LeftText>
          <RightText>
            At Nex Design Studio, we are a team of passionate designers, strategists, and creative thinkers with a shared goal to bring your brand’s vision to life. With years of experience in the industry, we have honed our skills in various aspects of design and branding, enabling us to deliver high-quality, tailored solutions that meet your unique needs.
          </RightText>
        </WhoWeAreContainer>
      </SectionWrapper1>

      {/* Third Section: Why Choose Us */}
      <SectionWrapper2 bgColor="#ffffff">
      <WhyChooseUsSection>
        {/* Left Column: Service Icons */}
        <LeftColumn>
          <ServiceBox>
            <img src="/assets/icon-innovation.png" alt="Creativity & Innovation" />
            <h3>Creativity & Innovation</h3>
            <p>We bring innovative ideas to life.</p>
          </ServiceBox>
          <ServiceBox>
            <img src="/assets/icon-client.png" alt="Client-Centric Approach" />
            <h3>Client-Centric Approach</h3>
            <p>Understanding and delivering client needs.</p>
          </ServiceBox>
          <ServiceBox>
            <img src="/assets/icon-quality.png" alt="Quality and Precision" />
            <h3>Quality and Precision</h3>
            <p>Attention to detail in every project.</p>
          </ServiceBox>
          <ServiceBox>
            <img src="/assets/icon-delivery.png" alt="Timely Delivery" />
            <h3>Timely Delivery</h3>
            <p>Projects delivered on time, every time.</p>
          </ServiceBox>
          <ServiceBox>
            <img src="/assets/icon-expertise.png" alt="Versatile Expertise" />
            <h3>Versatile Expertise</h3>
            <p>Expertise across various industries.</p>
          </ServiceBox>
          <ServiceBox>
            <img src="/assets/icon-partnership.png" alt="Long-Term Partnership" />
            <h3>Long-Term Partnership</h3>
            <p>Building long-term relationships with clients.</p>
          </ServiceBox>
        </LeftColumn>

        {/* Center Column: Large Icon */}
        <CenterColumn>
          <LargeIcon src="/assets/creative-idea.png" alt="Creative Idea" />
        </CenterColumn>

        {/* Right Column: Why Choose Us Text */}
        <RightColumn>
          <TextColumnItem color="#ccc">why</TextColumnItem>
          <TextColumnItem color="#ffcc3f">CHOOSE</TextColumnItem>
          <TextColumnItem color="#e34f26">us</TextColumnItem>
        </RightColumn>
      </WhyChooseUsSection>
      </SectionWrapper2>

      <ProcessSection>
      {/* Section Title */}
      <SectionTitle>
        our <span>PROCESS</span>
      </SectionTitle>

      {/* Container for All Process Steps */}
      <ProcessContainer>
        {/* Step 1: Consultation */}
        <ProcessCard>
          <div className="number">01</div>
          <img src="/assets/icon-consultation.png" alt="Consultation" className="icon" />
          <h3>Consultation</h3>
          <p>We start by understanding your needs, goals, and vision.</p>
        </ProcessCard>

        {/* Step 2: Research & Strategy */}
        <ProcessCard>
          <div className="number">02</div>
          <img src="/assets/icon-research.png" alt="Research & Strategy" className="icon" />
          <h3>Research & Strategy</h3>
          <p>We conduct thorough research to create a strategic design plan.</p>
        </ProcessCard>

        {/* Step 3: Design & Development */}
        <ProcessCard>
          <div className="number">03</div>
          <img src="/assets/icon-design.png" alt="Design & Development" className="icon" />
          <h3>Design & Development</h3>
          <p>Our creative team gets to work, bringing your ideas to life.</p>
        </ProcessCard>

        {/* Step 4: Review & Feedback */}
        <ProcessCard>
          <div className="number">04</div>
          <img src="/assets/icon-review.png" alt="Review & Feedback" className="icon" />
          <h3>Review & Feedback</h3>
          <p>We present the design for your review and incorporate your feedback.</p>
        </ProcessCard>

        {/* Step 5: Launch & Support */}
        <ProcessCard>
          <div className="number">05</div>
          <img src="/assets/icon-launch.png" alt="Launch & Support" className="icon" />
          <h3>Launch & Support</h3>
          <p>We ensure a smooth launch and provide ongoing support as needed.</p>
        </ProcessCard>
      </ProcessContainer>
    </ProcessSection>
    <Contact />
    </AboutContainer>
  );
};

export default About;
