import React from 'react';
import styled from 'styled-components/macro';
const Projects = () => {
  return (
    <ProjectsWrapper>
      <h3 className="head">Projects</h3>
    </ProjectsWrapper>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  & .head {
    font-size: 42px;
  }
`;
