import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px;
  position: relative;
`;

const ResumeButton = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    background: linear-gradient(45deg, #FFA500, #FF8C00);
  }
  
  @media (max-width: 768px) {
    position: static;
    margin: 20px auto 0;
    display: inline-block;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 20px 0 0 0;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ResumeButton 
        href="resume/ThomasWMitchellResume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        download="ThomasWMitchellResume.pdf"
      >
        📄 Download Resume
      </ResumeButton>
      
      <Title>Thomas Mitchell</Title>
      <Subtitle>
        Full-Stack Developer & Game Developer passionate about creating innovative applications 
        and immersive gaming experiences. From healthcare apps to Unity games, I bring ideas to life.
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;
