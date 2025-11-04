import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    background-color: #E9ECEF; // Um cinza claro, baseado no design
    border: 2px solid transparent;
    border-radius: 12px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500; // Medium
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    transition: border-color 0.2s ease-in-out;
    
    &::placeholder {
        color: #ADB5BD; // Cor do placeholder
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.cyan};
    }
`;