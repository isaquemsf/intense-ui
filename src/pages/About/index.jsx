import React from 'react';
import styled from 'styled-components';
import { PageContainer, PageTitle } from '../styles';

const AboutText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  line-height: 1.5;
  color: #2176AE;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: justify;
  
  hyphens: auto; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <PageContainer>
      <PageTitle style={{ color: '#F3752B', marginBottom: '40px' }}>
        A gente precisava conversar sobre estilo.
      </PageTitle>
      
      <ContentWrapper>
        <AboutText>
          Prazer, somos a <strong>Intense</strong>. Somos um grupo de amigas e futuras 
          publicitárias que cansou de sempre ouvir as mesmas regras de moda. 
          A gente sentia falta de um lugar que falasse sobre isso como a gente conversa: 
          de forma autêntica, misturando com a música que a gente ama, com os filmes que 
          nos inspiram e com a certeza de que "look perfeito" é aquele que faz você se 
          sentir bem. Então, decidimos criar esse lugar.
        </AboutText>

        <AboutText>
          A Intense nasceu como um projeto de faculdade mas vai além: é uma revista para 
          celebrar quem você é. Porque no meio de tantas tendências que vêm e vão, 
          a gente tem uma certeza: a mais incrível delas é a sua. #ARealTrend
        </AboutText>
      </ContentWrapper>
    </PageContainer>
  );
};

export default About;