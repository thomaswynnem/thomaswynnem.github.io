import React from 'react';
import styled from 'styled-components';

const ProjectsHeaderContainer = styled.div`
  text-align: center;
  margin: 0 auto 40px auto;
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

const ProjectsTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #FFD700;
  margin: 0 0 20px 0;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
  background: linear-gradient(45deg, #FFD700, #FFED4E, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
`;

const ProjectsSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const DecorativeLine = styled.div`
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #FFD700, transparent);
  margin: 30px auto 0 auto;
  border-radius: 2px;
`;

const ProjectsSectionHeader: React.FC = () => {
  return (
    <ProjectsHeaderContainer>
      <ProjectsTitle>Featured Projects</ProjectsTitle>
      <ProjectsSubtitle>
        A showcase of my development work across mobile apps, games, and web applications, 
        demonstrating expertise in full-stack development, blockchain integration, and user experience design.
      </ProjectsSubtitle>
      <DecorativeLine />
    </ProjectsHeaderContainer>
  );
};

export default ProjectsSectionHeader;
