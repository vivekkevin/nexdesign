import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

// Styled Components
const NavbarContainer = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isMobileMenuOpen, isHomePage }) =>
    isMobileMenuOpen ? '#000000' : isHomePage ? 'transparent' : '#000'};
  position: ${({ isHomePage }) => (isHomePage ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  z-index: 10;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 30px;
    background: #000; /* Solid background on mobile */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 150px; /* Adjust logo size */
    height: auto;

    @media (max-width: 768px) {
      width: 120px; /* Adjust for mobile */
    }
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #000000;
    padding: 20px 0;
    z-index: 9;
    animation: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'fadeIn 0.3s ease-in-out' : 'fadeOut 0.3s ease-in-out'};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
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

  &.active {
    color: #f0a500; /* Yellow on active state */
  }

  &:hover {
    color: #ffcc3f; /* Slightly lighter yellow on hover */
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 768px) {
    display: block;
  }
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
      <Logo onClick={() => setMobileMenuOpen(false)}>
        <img src={logo} alt="Nex Design Studio Logo" />
      </Logo>

      <HamburgerIcon onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerIcon>

      <Menu isMobileMenuOpen={isMobileMenuOpen}>
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
