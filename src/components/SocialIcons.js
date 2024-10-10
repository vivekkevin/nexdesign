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

  &:hover {
    color: #f0a500;
  }
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
      <IconLink href="https://facebook.com" target="_blank">
        <FaFacebook />
      </IconLink>
      <IconLink href="https://instagram.com" target="_blank">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </IconLink>
    </SocialContainer>
  );
};

export default SocialIcons;
