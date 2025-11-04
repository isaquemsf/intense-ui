import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pink};
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const PageText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #495057;
  margin-bottom: 24px;
  text-align: left;
`;