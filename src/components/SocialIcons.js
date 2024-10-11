import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.5); /* Mild white border */
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #ffffff; /* Keep icon color white on hover */
    transform: scale(1.2); /* Scale effect */
  }

  /* Gradient color effects based on the icon */
  &:hover[data-platform="facebook"] {
    border: 2px solid transparent;
    background: linear-gradient(135deg, #1877f2, #4b97f5); /* Facebook Gradient */
  }

  &:hover[data-platform="instagram"] {
    border: 2px solid transparent;
    background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); /* Instagram Gradient */
  }

  &:hover[data-platform="linkedin"] {
    border: 2px solid transparent;
    background: linear-gradient(135deg, #0077b5, #2095d3); /* LinkedIn Gradient */
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    bottom: -3px;
    right: -3px;
    background: inherit; /* Inherit the same gradient background */
    border-radius: 50%;
    z-index: -1;
    filter: blur(5px); /* Glow effect */
  }
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
      <IconLink href="https://facebook.com" target="_blank" data-platform="facebook">
        <FaFacebook />
      </IconLink>
      <IconLink href="https://instagram.com" target="_blank" data-platform="instagram">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://linkedin.com" target="_blank" data-platform="linkedin">
        <FaLinkedin />
      </IconLink>
    </SocialContainer>
  );
};

export default SocialIcons;