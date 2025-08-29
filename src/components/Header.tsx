import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
`;

const ResumeButton = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #1a1a2e;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid rgba(255, 215, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6);
    background: linear-gradient(45deg, #FFA500, #FF8C00);
    border-color: rgba(255, 215, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    position: static;
    margin: 20px auto 0;
    display: inline-block;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #FFD700;
  box-shadow: 
    0 0 40px rgba(255, 215, 0, 0.5),
    0 15px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.08);
    box-shadow: 
      0 0 50px rgba(255, 215, 0, 0.7),
      0 20px 50px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #FFD700;
  margin: 0;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.6),
    0 0 60px rgba(255, 215, 0, 0.3);
  background: linear-gradient(45deg, #FFD700, #FFED4E, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  filter: brightness(1.2) contrast(1.1);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
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
      
      <ProfileSection>
        <ProfileImage src="/Me.png" alt="Thomas Mitchell" />
        <Title>Thomas Mitchell</Title>
      </ProfileSection>
      
      <Subtitle>
        Full-Stack Developer & Game Developer passionate about creating innovative applications 
        and immersive gaming experiences. From healthcare apps to Unity games, I bring ideas to life.
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;
