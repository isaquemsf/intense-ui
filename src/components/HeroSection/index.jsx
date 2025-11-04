import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HeroContainer, Headline, Subheadline, FormContainer } from './styles';
import Button from '../Button';
import Input from '../Input';

const HeroSection = ({ onGenerate, isLoading }) =>  {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim()) {
            toast.error('Opa! Você precisa nos dizer seu nome.');
            return;
        }

        onGenerate(name);
        setName('');
    };

    return (
        <HeroContainer>
            <Headline>A sua #ARealTrend.</Headline>
            <Subheadline>
                Todo estilo é uma assinatura. Única. Pessoal. Intensa.
                É a história que você conta sem dizer uma palavra.
                Hoje, a gente quer falar com você, pelo seu nome.
            </Subheadline>
            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="EI, QUAL O SEU NOME? TEMOS UM RECADO PARA VOCÊ."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? '...' : 'Enviar'}
                </Button>
            </FormContainer>
        </HeroContainer>
    );
};

export default HeroSection;