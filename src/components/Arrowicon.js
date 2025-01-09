import React from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Arrow = styled.div`
  position: absolute;
  top: 40%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none; // Makes the arrow non-interactive
  z-index: 1; // Ensures it's above the select element

  // Circle background and alignment
  width: 30px; // Diameter of the circle
  height: 30px; // Diameter of the circle
  background-color: #fff; // Circle background color, change as needed
  border-radius: 50%; // Makes it round
  display: flex; // Enables flexbox inside the circle
  align-items: center; // Vertically centers the icon
  justify-content: center; // Horizontally centers the icon
  color: black; // Icon color
  border: 1px solid #ccc; // Optional border for the circle, adjust as needed
`;

// ArrowIcon component that determines which icon to show
const ArrowIcon = ({ isOpen }) => {
  return (
    <Arrow>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </Arrow>
  );
};

export default ArrowIcon;
