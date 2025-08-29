import React from 'react';
import styled from 'styled-components';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  status: string;
  tech: string[];
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div<{ featured: boolean }>`
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 215, 0, ${props => props.featured ? '0.3' : '0.1'});
  overflow: hidden;
  transition: all 0.3s ease;
  transform: ${props => props.featured ? 'scale(1.02)' : 'scale(1)'};
  border: ${props => props.featured ? '2px solid #FFD700' : '1px solid rgba(255, 215, 0, 0.1)'};
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 215, 0, ${props => props.featured ? '0.6' : '0.3'});
    border-color: ${props => props.featured ? '#FFD700' : 'rgba(255, 215, 0, 0.4)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
    opacity: ${props => props.featured ? '1' : '0.3'};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #1a1a2e;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
  border: 1px solid rgba(255, 215, 0, 0.6);
  z-index: 2;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFD700;
  margin: 0 0 15px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0 0 20px 0;
  font-size: 0.95rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  background: ${props => {
    if (props.status.includes('Live')) return '#4CAF50';
    if (props.status.includes('Development')) return '#FF9800';
    return '#9C27B0';
  }};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: linear-gradient(145deg, #16213e 0%, #0f3460 100%);
  color: #FFD700;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ViewButton = styled.a`
  display: inline-block;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #1a1a2e;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
  border: 2px solid rgba(255, 215, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6);
    background: linear-gradient(45deg, #FFA500, #FF8C00);
    border-color: rgba(255, 215, 0, 0.6);
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card featured={project.featured}>
      <ImageContainer>
        <ProjectImage src={project.image} alt={project.title} />
        {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
      </ImageContainer>
      
      <CardContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <StatusBadge status={project.status}>
          {project.status}
        </StatusBadge>
        
        <TechStack>
          {project.tech.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        
        <ViewButton href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </ViewButton>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
