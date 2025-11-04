import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import HeroSection from '../../components/HeroSection';
import MessageList from '../../components/MessageList';
import { generateMessageForName } from '../../services/api'; 
import { theme } from '../../styles/theme';

const pulseAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const StatusMessage = styled.p`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  animation: ${pulseAnimation} 2s infinite ease-in-out; 
`;

const MESSAGE_COLORS = [
  theme.colors.blue, 
  theme.colors.yellow, 
  theme.colors.pink,
  theme.colors.orange, 
];

const Home = () =>  {
  const [messages, setMessages] = useState([
    { id: 3, text: 'Ju, e se a sua playlist virasse um look? Ficaria incrível! - Intense.', color: theme.colors.yellow },
    { id: 2, text: 'Lari, vista a sua energia. Ela te cai bem. - Intense.', color: theme.colors.pink },
    { id: 1, text: 'Sofia, a única trend que realmente importa é a sua. - Intense.', color: theme.colors.orange }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextColorIndex, setNextColorIndex] = useState(0);

  const getRandomColor = () => {
    const messageColors = [theme.colors.orange, theme.colors.yellow, theme.colors.pink, theme.colors.blue];
    return messageColors[Math.floor(Math.random() * messageColors.length)];
  };

  const handleGenerateMessage = async (name) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await generateMessageForName(name);
      const nextColor = MESSAGE_COLORS[nextColorIndex];

      const newMessage = {
        id: new Date().getTime(), 
        text: response.data.message,
        color: nextColor,
      };

      setMessages(prevMessages => [newMessage, ...prevMessages]);
      setNextColorIndex(prevIndex => (prevIndex + 1) % MESSAGE_COLORS.length);
    } catch (err) {
      setError('Ops! Não conseguimos gerar sua mensagem. Tente de novo!');
      console.error("Erro ao chamar a API:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeroSection onGenerate={handleGenerateMessage} isLoading={isLoading} />
      {isLoading && <StatusMessage>Gerando sua trend...</StatusMessage>}
      {error && <StatusMessage style={{color: 'red'}}>{error}</StatusMessage>}
      <MessageList messages={messages} />
    </>
  );
};

export default Home;