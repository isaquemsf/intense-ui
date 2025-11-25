import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { PageContainer } from '../styles';

const ContactText = styled.p`
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

const InstaHandle = styled.a`
  display: block;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  color: #F3752B;
  font-weight: 500;
  text-decoration: none;
  font-style: italic;
  transition: color 0.2s;

  &:hover {
    color: #d95e16;
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => {
  const instagramLink = "https://www.instagram.com/revistaintense";

  return (
    <PageContainer>
      
      <ContentWrapper>
        <ContactText>
          Seu feedback é o que faz a <strong>Intense</strong> melhorar! Seja para mandar uma 
          sugestão de matéria, contar qual foi seu artigo favorito ou só para 
          mandar um "oi" e compartilhar uma música, a nossa caixa de entrada 
          está sempre aberta.
        </ContactText>

        <ContactText style={{ marginBottom: '50px' }}>
          O jeito mais fácil e rápido de falar com a gente é pela DM do nosso 
          Instagram. A gente promete que lê tudo com o maior carinho!
        </ContactText>

        <Button
          as="a"
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            backgroundColor: '#F3752B',
            padding: '15px 40px',
            fontSize: '1.1rem',
            textTransform: 'uppercase'
          }}
        >
          Fala com a gente no Insta
        </Button>

        <InstaHandle 
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          @revistaintense
        </InstaHandle>

      </ContentWrapper>
    </PageContainer>
  );
};

export default Contact;