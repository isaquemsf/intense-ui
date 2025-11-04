import React from 'react';
import { PageContainer, PageTitle, PageText } from '../styles';

const About = () => {
  return (
    <PageContainer>
      <PageTitle>Sobre a Intense</PageTitle>
      <PageText>
        Intense nasceu de um projeto universitário com a paixão pela moda como sua força motriz. Não somos apenas uma revista; somos um manifesto. Acreditamos que o estilo é a mais pura forma de autoexpressão, uma assinatura pessoal que conta a sua história sem dizer uma palavra.
      </PageText>
      <PageText>
        Nossa missão é celebrar a autenticidade e a energia que cada pessoa carrega. Queremos inspirar você a vestir sua personalidade, a transformar sua playlist em um look e a entender que a única tendência que realmente importa é a sua. Seja bem-vinda ao universo onde sua intensidade dita a moda.
      </PageText>
    </PageContainer>
  );
};

export default About;