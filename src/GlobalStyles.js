import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;700&display=swap');

  /* Global Box Sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Body and Root Styling */
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scroll */
    width: 100vw; /* Ensure full width without overflow */
    height: 100vh; /* Ensure the full height of the viewport */
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.white}; /* Use theme colors */
    background: ${({ theme }) => theme.colors.black}; /* Use theme colors */
  }

  /* Heading Styles */
  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }

  /* Global Utility Classes for Typography */
  .poppins-medium {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .poppins-bold {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  .montserrat-bold {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

  /* Link Styling */
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white}; /* Default color for links */
  }

  /* Responsive Styling */
  @media (max-width: 768px) {
    body, html {
      padding: 0;
    }
    h1, h2, h3 {
      text-align: center;
    }
  }
`;

export default GlobalStyles;
