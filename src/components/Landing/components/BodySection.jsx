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
            <>
              Twitter
              <br />
              Instagram
            </>
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
            <>
              <>Website Design</>
              <br />
              <>Mobile Application Design</>
              <br />
              <>Website Developement (Flutter)</>
              <br />
              <>Mobile Application Developement (Flutter)</>
              <br />
              <>Website Design</>
            </>
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
  display: flex;

  margin-top: 50px;
  justify-content: center;
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
`;
