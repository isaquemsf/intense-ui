import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700; // Bold
    font-size: 1rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    text-transform: uppercase;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        background-color: #1a628f; // Um tom de azul um pouco mais escuro
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        transform: scale(1);
    }
`;