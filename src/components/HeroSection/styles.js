import styled from 'styled-components';

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Headline = styled.h1`
    font-size: 2.5rem;
    font-weight: 700; // Bold
    color: ${({ theme }) => theme.colors.pink};
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
    }
`;

export const Subheadline = styled.p`
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.6;
    color: #495057;
    max-width: 500px;
    margin-bottom: 32px;
`;

export const FormContainer = styled.form`
    display: flex;
    gap: 12px;
    width: 100%;
    max-width: 600px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: stretch;
    }
`;