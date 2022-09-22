import React from 'react';
import styled from 'styled-components/macro';
const Experience = () => {
  return (
    <ExperienceWrapper>
      <h3 className="heading">Education & Experiences</h3>

      <div className="container">
        <div className="container-child">
          <Child
            yearFrame={'2018-2022'}
            title={'Bachelor of Information Technology'}
            description={'Maharaja Agresen Institute Of Technology'}
          />
        </div>
        <div className="container-child">
          <Child
            yearFrame={'2020-2021'}
            title={'Flutter Developement Certiificate'}
            description={'Udemy (Dr. Angela Yu)'}
          />
          <Child
            yearFrame={'2021-2022'}
            title={'Flutter Developer Internship'}
            description={'Givershealth Inc. ,USA'}
          />
        </div>
        <div className="container-child">
          <Child
            yearFrame={'2022- Present'}
            title={'UI/UX Designer Certificate'}
            description={'Udemy (Zero to mastery)'}
          />
          <Child
            title={'Web Designer and Product Manager Internship'}
            description={'Fyntune Solutions, India'}
          />
          <Child title={'Freelancer'} description={'Upwork.com'} />
        </div>
      </div>
    </ExperienceWrapper>
  );
};

export default Experience;

const Child = ({ yearFrame, title, description }) => {
  return (
    <div
      css={`
        margin-bottom: 50px;
      `}
    >
      <div
        css={`
          font-size: 14px;
          margin-bottom: 10px;
        `}
      >
        {yearFrame}
      </div>
      <div
        css={`
          width: 250px;
          font-size: 16px;
          color: var(--primary-color);
        `}
      >
        {title}
      </div>
      <div
        css={`
          width: 230px;
          font-size: 12px;
          font-weight: 500;
          font-style: italic;
        `}
      >
        {description}
      </div>
    </div>
  );
};

const ExperienceWrapper = styled.div`
  height: 95vh;
  & .heading {
    font-size: 42px;
  }
  & .container {
    display: flex;
    justify-content: space-around;

    & .container-child {
      text-align: left;
    }
  }
`;
