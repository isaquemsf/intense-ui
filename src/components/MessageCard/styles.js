import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: ${props => props.color || '#ccc'};
    color: white;
    padding: 16px 24px;
    border-radius: 16px;
    max-width: 600px;
    margin: 0 auto; // Centraliza
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;

    strong {
        font-weight: 700;
    }
`;