import React from 'react';
import styled from 'styled-components/macro';
import profilePic from '../../../assets/profile-pic.png';
const BodySection = () => {
  return (
    <BodyContainer>
      <div className="left">
        <Section
          title={'About Me!'}
          description={
            'I Design, I Develope and I Manage. Hi!, im rohan, a UI/UX designer, Flutter developer and a Project Manager'
          }
        />
        <Section
          title={'Contact Me'}
          description={
            <>
              New Delhi, india.
              <br /> rohats7203@gmail.com <br />
              +91 98107 96414
            </>
          }
        />
        <Section
          title={'Socials'}
          description={
            <div className="hover">
              <a
                href="https://twitter.com/rohats7203"
                rel="noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              <br />
              <a
                href="https://www.instagram.com/https.rohan.rs/"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          }
        />
      </div>
      <img src={profilePic} alt={'profile-pic'} />
      <div className="right">
        <Section title={'Years of Experience'} description={'2 Years'} />
        <Section title={'Number of Projects'} description={'10+'} />
        <Section
          title={'Services'}
          description={
            <div className="hover">
              <span>Website Design</span>
              <br />
              <span>Mobile Application Design</span>
              <br />
              <span>Website Developement (Flutter)</span>
              <br />
              <span>Mobile Application Developement (Flutter)</span>
              <br />
              <span>Website Design</span>
            </div>
          }
        />
      </div>
    </BodyContainer>
  );
};

export default BodySection;

const Section = ({ title, description }) => {
  return (
    <div
      css={`
        margin: 30px 0;
      `}
    >
      <div
        css={`
          color: var(--primary-color);
          margin-bottom: 5px;
        `}
      >
        {title}
      </div>
      <div
        css={`
          width: 350px;
        `}
      >
        {description}
      </div>
    </div>
  );
};

const BodyContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 50px auto;
  justify-content: space-between;
  align-items: center;

  & .left {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  & .right {
    text-align: right;
    display: flex;
    flex-direction: column;
  }

  & .hover {
    span,
    a {
      &:hover {
        color: var(--primary-color);
      }
    }
    a {
      text-decoration: none;
      color: var(--normal-text);
    }
  }
`;
