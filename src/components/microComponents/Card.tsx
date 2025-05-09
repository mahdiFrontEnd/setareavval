import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="rounded-2xl border-1 border-gray-300 mb-3 overflow-hidden">
            {children}
        </div>
    );
};

export default Card;
