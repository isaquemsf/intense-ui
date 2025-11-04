import React from 'react';
import Button from '../../components/Button';
import { PageContainer, PageTitle, PageText } from '../styles';

const Contact = () => {
  const instagramLink = "https://www.instagram.com/revistaintense";

  return (
    <PageContainer>
      <PageTitle>Fale com a gente</PageTitle>
      <PageText>
        Adoramos ouvir você! Seja para parcerias, sugestões ou simplesmente para compartilhar sua #ARealTrend, estamos aqui. A maneira mais fácil de nos encontrar é através do nosso Instagram.
      </PageText>
      <Button
        as="a"
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Siga-nos no Instagram!
      </Button>
    </PageContainer>
  );
};

export default Contact;