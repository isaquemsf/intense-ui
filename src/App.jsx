import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.main`
  flex: 1;
  padding: 40px 5%;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px 24px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </MainLayout>
    </AppContainer>
  );
};

export default App