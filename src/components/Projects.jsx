import React from 'react';
import styled from 'styled-components/macro';
import segway from '../assets/project.png';
const Projects = () => {
  return (
    <ProjectsWrapper>
      <h3 className="head">Projects</h3>

      <div className="container">
        <div className="project">
          <img src={segway} alt="pro" />
          <h2 className="project-name">Segway</h2>
        </div>
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  height: 100vh;
  & .head {
    font-size: 42px;
  }
  & .container {
    max-width: 1200px;
    display: flex;
    margin: 50px auto;
    justify-content: flex-start;
    align-items: center;

    & .project-name {
      color: var(--toggle-yellow);
    }
  }
`;
