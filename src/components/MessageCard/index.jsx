import React from 'react';
import { CardContainer } from './styles';

const MessageCard = ({ text, color }) => {

    const parts = text.split(/,(.+)/); 
    const name = parts[0];
    const restOfText = parts[1];

    return (
        <CardContainer color={color}>
            {restOfText ? (
                <>
                    <strong>{name},</strong>
                    {restOfText}
                </>
            ) : (
                <strong>{text}</strong> // Fallback caso não haja vírgula
            )}
        </CardContainer>
    );
};

export default MessageCard;