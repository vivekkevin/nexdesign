import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for Hamburger and Close
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink for routing and useLocation to determine the path

// Styled Components
const NavbarContainer = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '#000000' : 'transparent')};
  position: ${({ isHomePage }) => (isHomePage ? 'absolute' : 'relative')}; /* Set position based on the page */
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 10px 30px;
    background: ${({ isHomePage }) => (isHomePage ? '#000' : 'transparent')}; /* Fixed background color for mobile view on Home */
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  color: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '#ffffff' : '#ffffff')};
  cursor: pointer;
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
  }
`;

// Update MenuItem to be a NavLink instead of an <a> tag
const MenuItem = styled(NavLink)`
  color: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '#ffffff' : '#ffffff')};
  cursor: pointer;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 29px;
  padding: 15px;
  text-align: center;
  width: 100%;

  &.active {
    color: #f0a500; /* Change to yellow when active */
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightYellow};
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '#ffffff' : '#ffffff')};

  @media (max-width: 768px) {
    display: block;
  }
`;

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/'; // Check if the current path is home page

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer isMobileMenuOpen={isMobileMenuOpen} isHomePage={isHomePage}>
      <Logo isMobileMenuOpen={isMobileMenuOpen}>NEX Design Studio</Logo>

      {/* Hamburger Icon */}
      <HamburgerIcon onClick={toggleMenu} isMobileMenuOpen={isMobileMenuOpen}>
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerIcon>

      {/* Menu Items */}
      <Menu isMobileMenuOpen={isMobileMenuOpen}>
        <MenuItem
          to="/"
          isMobileMenuOpen={isMobileMenuOpen}
          activeClassName="active"
          exact
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </MenuItem>
        <MenuItem
          to="/about"
          isMobileMenuOpen={isMobileMenuOpen}
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </MenuItem>
        <MenuItem
          to="/services"
          isMobileMenuOpen={isMobileMenuOpen}
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          Services
        </MenuItem>
        <MenuItem
          to="/team"
          isMobileMenuOpen={isMobileMenuOpen}
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          Team
        </MenuItem>
        <MenuItem
          to="/careers"
          isMobileMenuOpen={isMobileMenuOpen}
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          Careers
        </MenuItem>
        <MenuItem
          to="/contact"
          isMobileMenuOpen={isMobileMenuOpen}
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
