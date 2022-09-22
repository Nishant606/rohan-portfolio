import React from 'react';
import styled from 'styled-components/macro';
const Footer = () => {
  return (
    <FooterWrapper>
      <a
        href="https://www.upwork.com/freelancers/~01180dd6e6d2885ae1"
        rel="noreferrer"
        target="_blank"
      >
        Upwork
      </a>
      <a
        href="linkedin.com/in/rohan-singh-b1632a1a8"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
      <a href="Rohats7203.GitHub.io" rel="noreferrer" target="_blank">
        Github
      </a>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  margin: auto;
  text-align: left;
  max-width: 1200px;

  a {
    margin-right: 10px;
    color: var(--normal-text);
    text-decoration: none;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
