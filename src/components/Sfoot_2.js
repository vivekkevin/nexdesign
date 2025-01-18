import React, { useState } from 'react';
import styled from 'styled-components';
import Nexbgstr from '../assets/nexbgs.png';

const Container = styled.div`
  text-align: center;
  font: 25px/60px Poppins;
  color: #FFFFFF;
  opacity: 1;
  padding: 60px;
  background-image: url(${Nexbgstr});

  @media (max-width: 1280px) and (min-width: 992px){
  font: 18px Poppins;
  line-height:40px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-top: 60px;

  @media (max-width: 1280px) and (min-width: 992px){
  margin-top: 10px;
  }
`;

const TitleContainer = styled.div`
margin-top:5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1280px) and (min-width: 992px){
  margin-top:10px;
  }
`;

const ContactInfo = styled.div`
  width: 43%;
  margin-left: 5%;
  font: normal normal normal 25px/58px Poppins;
  background-size: cover;
  background-position: center;
  h2, h3 {
    display: flex;
    align-items: center;
    margin: 0;
    font: 75px/58px Poppins;
    margin-bottom: 20px;
    margin-top: 20px;
     @media (max-width: 1280px) and (min-width: 992px){
  font: 32px Poppins;
  margin-top: 0;
  margin-left:10px;
  margin-bottom: -5px;
  
}
  }
  h2 { color: #FFFFFF; }
  h3 { color: #E8001A; font-weight: bold; }
  @media (max-width: 1280px) and (min-width: 992px){
  font: 18px Poppins;
  line-height:70px;
  
  }
`;

const Contactdata = styled(ContactInfo)`
  width: 100%;
  margin-left: 5%;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 60px;
  background-size: cover;
  background-position: center;
  
    h2, h3 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font: 75px/58px Poppins;
     @media (max-width: 1280px) and (min-width: 992px){
  font: 32px Poppins;
  margin-top: 0px;
  margin-bottom: -5px;
  
}
  }
  h2 { color: #FFFFFF; }
  h3 { color: #E8001A; font-weight: bold; }
   @media (max-width: 1280px) and (min-width: 992px){
  font: 18px Poppins;
  
  line-height:70px;
  
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #FF0000;
  padding: 40px;
  box-sizing: border-box;
  margin-right: 10%;
  align-items: flex-end;
`;

const Input = styled.input`
  flex: 0 0 48%;
  margin-bottom: 20px;
  padding: 15px;
  border: none;
  border-radius: 5px;
`;

const Select = styled.select`
  flex: 0 0 48%;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  background: white;
`;

const Button = styled.button`
  width: 15%;
  padding: 10px 20px;
  background-color: #f0a500;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  font: bold 17px Poppins;
  margin-top: 20px;
`;

const FileInput = styled(Input)`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
`;

const UploadButton = styled(Button)`
  width: 100%;
`;

const ListItem = styled.div`
  &:before {
    content: "-";
    color: #FF0000;
    
  }
`;

const JobsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const JobTitle = styled.div`
  color: #FFFFFF;
  font-size: 25px;
  padding: 10px;
`;

const ContactDetails = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log("File uploaded:", file.name);
    console.log("Sending email with the file...");
    // API call would go here
  };

  return (
    <Container>
      At Nex Design Studio, we’re more than just a team, we are a collective of creative minds dedicated to pushing the boundaries of design. We believe in the power of collaboration, innovation and a passion for excellence. If you’re looking to be part of a dynamic, forward-thinking environment where your ideas and talents can truly thrive, you’ve come to the right place.
      <ContactContainer>
        <ContactInfo>
          <TitleContainer>
            <h2>Why</h2>
            <h3>WORK with us?</h3>
          </TitleContainer>
          <ListItem>Innovative Projects</ListItem>
          <ListItem>Collaborative Environment</ListItem>
          <ListItem>Growth Opportunities</ListItem>
          <ListItem>Personal & Professional Development</ListItem>
          <ListItem>Creative Freedom</ListItem>
          <ListItem>Flexible Work Environment</ListItem>
        </ContactInfo>
        <Form>
          <TitleContainer>
            <h2>Perks</h2>
            <h3>& Benefits</h3>
          </TitleContainer>
          <ListItem>Flexible Work Hours</ListItem>
          <ListItem>Health & Wellness</ListItem>
          <ListItem>Creative Workshops</ListItem>
          <ListItem>Team Outings</ListItem>
          <ListItem>Recognition & Rewards</ListItem>
        </Form>
      </ContactContainer>
      <Contactdata>
        <TitleContainer>
          <h2>Current</h2>
          <h3>OPENINGS!</h3>
          <p>We are actively hiring Graphic Designers. Kindly make sure you fulfil the criteria before applying</p>
        </TitleContainer>
        <JobsContainer>
          <JobTitle><ListItem>Junior Graphic Designer</ListItem></JobTitle>
          <JobTitle><ListItem>Graphic Designer</ListItem></JobTitle>
          <JobTitle><ListItem>UI | UX Designer</ListItem></JobTitle>
          <JobTitle><ListItem>Motion Graphics Designer</ListItem></JobTitle>
        </JobsContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input type="text" placeholder="Enter Your Name*" />
          <Input type="email" placeholder="Email ID*" />
          <Input type="text" placeholder="Phone Number*" />
          <Select id="dropdown" required>
            <option value="" hidden>Choose Services</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Web Development">Web Development</option>
            <option value="Video Design">Video Design</option>
            <option value="3D Animation">3D Animation</option>
            <option value="Workshop & Learning Performance">Workshop & Learning Performance</option>
          </Select>
          <Input type="text" placeholder="Location*" />
          <Input type="text" placeholder="City*" />
          <Input type="text" placeholder="Available From*" />
          <Input type="text" placeholder="Current CTC (in Lacs)*" />
          <Input type="text" placeholder="Expected CTC (in Lacs)*" />
          <FileInput type="file" onChange={handleFileChange} />
          <Input type="text" placeholder="Portfolio Link*" />
          <Button type="submit">Submit</Button>
        </FormContainer>
      </Contactdata>
    </Container>
  );
};

export default ContactDetails;

