import React, { useEffect, useRef } from 'react';

import BodySection from './components/BodySection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'styled-components/macro';
const Landing = ({ setTheme, theme }) => {
  const landRef = useRef();
  useEffect(() => {
    landRef.current.style.filter = 'grayscale(100%)';
  }, []);
  setTimeout(() => {
    landRef.current.style.filter = 'grayscale(0%)';
  }, 1600);
  return (
    <div
      ref={landRef}
      css={`
        height: 95vh;
      `}
    >
      <Navbar />
      <BodySection />
      <Footer />
    </div>
  );
};

export default Landing;
