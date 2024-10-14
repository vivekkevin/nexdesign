import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import SocialIcons from './components/SocialIcons';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

// Custom Component to Conditionally Render SocialIcons
const ConditionalSocialIcons = () => {
  const location = useLocation(); // Get the current location

  // Render SocialIcons only on the Home page
  return location.pathname === '/' ? <SocialIcons /> : null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
       <Navbar transparent={true} />
        {/* Routes for various pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        {/* Conditionally render SocialIcons based on the current path */}
        <ConditionalSocialIcons />
      </Router>
    </ThemeProvider>
  );
}

export default App;
