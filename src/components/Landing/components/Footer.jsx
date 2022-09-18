import React from 'react';
import styled from 'styled-components/macro';
const Footer = () => {
  return (
    <FooterWrapper>
      <a href="_">Upwork</a>
      <a href="_">LinkedIn</a>
      <a href="_">Github</a>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
  }
`;
