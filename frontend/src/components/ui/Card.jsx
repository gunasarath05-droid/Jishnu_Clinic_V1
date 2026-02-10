import React from 'react';
import { cn } from './Button';

const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <div
            className={cn(
                'bg-white rounded-2xl p-6 border border-gray-100',
                hover && 'hover:shadow-card hover:-translate-y-1 transition-all duration-300',
                'shadow-sm',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
