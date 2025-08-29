import React from 'react';
import styled from 'styled-components';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectsSectionHeader from './components/ProjectsSectionHeader';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a1a2e 100%);
  padding: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(26, 26, 46, 0.8) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const App: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "PatientPal",
      description: "A healthcare app currently on TestFlight, designed to improve patient care and communication.",
      image: "/PatientPalIcon.png",
      link: "https://patientpalinc.com/",
      status: "Live - TestFlight & AWS App Runner",
      tech: ["Swift", "Node.js", "TypeScript/React", "Solidity", "Web3.js"],
      featured: true
    },
    {
      id: 2,
      title: "Joust Unity Game",
      description: "A Unity-based game project entered in the AWS Game Builder Challenge, featuring innovative gameplay mechanics.",
      image: "/Joust.png",
      link: "http://jouster-game-bucket.s3-website.us-east-2.amazonaws.com/",
      status: "Live - AWS Challenge",
      tech: ["Unity", "C#", "AWS", "Game Development"],
      featured: true
    },
    {
      id: 3,
      title: "F1 Fanzone",
      description: "An Object-Oriented Programming project focused on Formula 1 racing, currently in development.",
      image: "/GithubIcon.png",
      link: "https://github.com/thomaswynnem/f1_fanzone",
      status: "Not Deployed",
      tech: ["JavaScript (Vanilla)", "OOP"],
      featured: false
    },
    {
      id: 4,
      title: "Public Jeopardy",
      description: "A fullstack jeopardy creation and sharing tool built with modern web technologies.",
      image: "/GithubIcon.png",
      link: "https://github.com/thomaswynnem/Public-Jeopardy",
      status: "Not Deployed",
      tech: ["Node.js", "React", "Express", "JWT"],
      featured: false
    }
  ];

  return (
    <AppContainer>
      <Header />
      <AboutMe />
      <ProjectsSectionHeader />
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </AppContainer>
  );
};

export default App;
