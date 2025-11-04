import React from 'react';
import { ListContainer } from './styles';
import MessageCard from '../MessageCard';

const MessageList = ({ messages }) => {
    return (
        <ListContainer>
            {messages.map(msg => (
                <MessageCard key={msg.id} text={msg.text} color={msg.color} />
            ))}
        </ListContainer>
    );
};

export default MessageList;