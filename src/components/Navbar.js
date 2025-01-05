import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';
import menuIcon from '../assets/menu.png';


// Styled Components
const NavbarContainer = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent !important; /* Ensures full transparency */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 30px;
    background: transparent !important; /* Ensures transparency on mobile */
  }
`;



const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top:10px;
  img {
    width: ${({ isHomePage }) => (isHomePage ? '230px' : '180px')}; /* Larger on Home */
    transition: width 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: ${({ isHomePage }) => (isHomePage ? '140px' : '120px')}; /* Adjust for mobile */
    }
  }
`;


const Menu = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 1440px) {
  gap: 18px;
  }

  @media (max-width: 1024px) {
  gap: 1px;
  }

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9); /* Full-screen dark overlay */
    justify-content: center;
    align-items: center;
    z-index: 9;
  }
`;

const MenuItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 29px;
  padding: 15px;
  text-align: center;
  z-index: 10; /* Ensures items are clickable */

  &.active {
    color: #f0a500; /* Yellow on active state */
  }

  &:hover {
    color: #ffcc3f; /* Slightly lighter yellow on hover */
  }

  @media (max-width: 1024px) {
  padding: 7px;
  }

  @media (max-width: 768px) {
    background: transparent;
    border: 1px solid #ffffff;
    padding: 5px 30px;
    width: 70%; /* Centered bounding box */
    margin: -3px 0; /* Spacing between items */
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 15;
  padding: 10px;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 35px;  /* Adjust size as needed */
    height: auto;
    filter: brightness(0) invert(1); /* Ensures visibility on dark backgrounds */
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1); /* Slight hover effect */
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  cursor: pointer;
  color: #ffffff;
  z-index: 11; /* Higher z-index for close button */
`;

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/'; // Check if the current path is the home page

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer isMobileMenuOpen={isMobileMenuOpen} isHomePage={isHomePage}>
    <Logo isHomePage={isHomePage} onClick={() => setMobileMenuOpen(false)}>
      <img src={logo} alt="Nex Design Studio Logo" />
    </Logo>


    <HamburgerIcon onClick={toggleMenu}>
      {!isMobileMenuOpen && <img src={menuIcon} alt="Menu" />}  {/* Show only when menu is closed */}
    </HamburgerIcon>

      <Menu isMobileMenuOpen={isMobileMenuOpen}>
        {isMobileMenuOpen && (
          <CloseIcon onClick={toggleMenu}>
            <FaTimes size={30} />
          </CloseIcon>
        )}
        <MenuItem to="/" exact onClick={() => setMobileMenuOpen(false)}>
          Home
        </MenuItem>
        <MenuItem to="/about" onClick={() => setMobileMenuOpen(false)}>
          About
        </MenuItem>
        <MenuItem to="/services" onClick={() => setMobileMenuOpen(false)}>
          Services
        </MenuItem>
        <MenuItem to="/work" onClick={() => setMobileMenuOpen(false)}>
          Work
        </MenuItem>
        <MenuItem to="/team" onClick={() => setMobileMenuOpen(false)}>
          Team
        </MenuItem>
        <MenuItem to="/careers" onClick={() => setMobileMenuOpen(false)}>
          Careers
        </MenuItem>
        <MenuItem to="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
