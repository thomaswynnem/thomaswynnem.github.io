import React from 'react';
import styled from 'styled-components';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "PatientPal",
      description: "A healthcare app currently on TestFlight, designed to improve patient care and communication.",
      image: "https://via.placeholder.com/400x250/4CAF50/FFFFFF?text=PatientPal",
      link: "https://patientpalinc.com/",
      status: "Live - TestFlight",
      tech: ["iOS", "Swift", "Healthcare"],
      featured: true
    },
    {
      id: 2,
      title: "Joust Unity Game",
      description: "A Unity-based game project entered in the AWS Game Builder Challenge, featuring innovative gameplay mechanics.",
      image: "https://via.placeholder.com/400x250/FF9800/FFFFFF?text=Joust+Game",
      link: "http://jouster-game-bucket.s3-website.us-east-2.amazonaws.com/",
      status: "Live - AWS Challenge",
      tech: ["Unity", "C#", "AWS", "Game Development"],
      featured: true
    },
    {
      id: 3,
      title: "F1 Fanzone",
      description: "An Object-Oriented Programming project focused on Formula 1 racing, currently in development.",
      image: "https://via.placeholder.com/400x250/F44336/FFFFFF?text=F1+Fanzone",
      link: "https://github.com/thomaswynnem/f1_fanzone",
      status: "In Development",
      tech: ["OOP", "Python", "F1 Racing"],
      featured: false
    },
    {
      id: 4,
      title: "Public Jeopardy",
      description: "A fullstack jeopardy creation and sharing tool built with modern web technologies.",
      image: "https://via.placeholder.com/400x250/9C27B0/FFFFFF?text=Public+Jeopardy",
      link: "https://github.com/thomaswynnem/Public-Jeopardy",
      status: "In Development",
      tech: ["React", "Node.js", "MongoDB", "Fullstack"],
      featured: false
    }
  ];

  return (
    <AppContainer>
      <Header />
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </AppContainer>
  );
};

export default App;
