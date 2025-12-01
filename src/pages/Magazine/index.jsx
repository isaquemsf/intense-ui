import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
import Button from '../../components/Button';
import { PageContainer, PageTitle } from '../styles';

const MagazineCover = styled.img`
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  display: block;
  
  transform: rotate(-5deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90%;
    margin-bottom: 40px;
  }
`;

const MagazineDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  line-height: 1.5;
  
  color: #2176AE; 
  
  font-weight: 500;
  max-width: 750px;
  margin: 0 auto 50px auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const Magazine = () => {
    const launchDate = new Date('2025-12-04T00:00:00');
    const driveLink = "https://drive.google.com/file/d/1VRYmQIX5Adx2vTAKYmOENDG-ZP83aaE6/view?usp=sharing";

    const handleDownloadClick = (event) => {
        const currentDate = new Date();

        if (currentDate < launchDate) {
            event.preventDefault();

            toast('Segura a ansiedade! A revista sai dia 04/12! 🚀', {
                duration: 4000,
                style: {
                    background: '#333',
                    color: '#fff',
                    fontWeight: 'bold'
                },
            });
        }
    };

    return (
        <PageContainer>
            <PageTitle style={{ marginBottom: '10px' }}>
                A revista Intense está no ar!
            </PageTitle>

            <MagazineCover src="/images/capa-revista.png" alt="Capa da Revista Intense com três modelos sorrindo" />

            <MagazineDescription>
                Nesta edição, a gente mergulha de cabeça no estilo que é só seu.
                Falamos sobre como transformar sua playlist em um look, a revolução do
                streetwear sem regras, os figurinos do cinema que nunca saem de moda e muito mais.
            </MagazineDescription>

            <Button
                as="a"
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
                style={{
                    backgroundColor: '#F3752B',
                    fontSize: '1.2rem',
                    padding: '15px 50px',
                    textDecoration: 'none',
                    display: 'inline-block'
                }}
            >
                BAIXE AGORA (É DE GRAÇA!)
            </Button>
        </PageContainer>
    );
};

export default Magazine;