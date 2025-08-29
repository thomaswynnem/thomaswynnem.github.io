import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 900px;
  margin: 0 auto 60px auto;
  padding: 40px;
  background: linear-gradient(145deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%);
  border-radius: 25px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 215, 0, 0.1);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
    border-radius: 25px 25px 0 0;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  margin: 0 0 30px 0;
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
`;

const AboutContent = styled.div`
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
  font-size: 1.1rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const AboutParagraph = styled.p`
  margin: 0 0 20px 0;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: #FFD700;
  font-weight: 600;
`;

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutParagraph>
          Hi, my name is <HighlightText>Thomas Mitchell</HighlightText>, and I'm a junior at the University of Notre Dame studying Computer Science and Statistics. I'm passionate about building secure, user-friendly systems and have experience leading both research and product teams from design to deployment.
        </AboutParagraph>
        
        <AboutParagraph>
          Early on, I had the opportunity to lead Notre Dame's Model UN tech team into the Harvard competition as a freshman, which taught me how to organize contributors, set a technical vision, and deliver under pressure. Since then, I've applied this leadership in technical projects, most notably with <HighlightText>PatientPal</HighlightText>, a health-tech app that combines iOS development, blockchain, and AI. I've led everything from technical integrations, such as working with Infermedica to safely run their test API inside our app, to exploring Apple's emerging Foundation Models for generating structured outputs on-device.
        </AboutParagraph>
        
        <AboutParagraph>
          I've built frontends in <HighlightText>TypeScript/React</HighlightText> and <HighlightText>SwiftUI</HighlightText>, and architected secure backends using <HighlightText>Node.js/Express</HighlightText>, <HighlightText>JWT authentication</HighlightText>, <HighlightText>Web3 frameworks</HighlightText>, and middleware designed to protect sensitive user data.
        </AboutParagraph>
        
        <AboutParagraph>
          Beyond projects, I thrive on connecting cutting-edge tools with real-world impact. Whether it's experimenting with Ethereum soulbound tokens for secure identity, iterating on frontends (like in my Jeopardy app) to make AI features approachable, or applying tuned language models and statistical methods to research data trends, I enjoy bridging technical depth with safe and effective design.
        </AboutParagraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutMe;
