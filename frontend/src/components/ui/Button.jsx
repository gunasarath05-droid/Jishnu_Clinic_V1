import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-lg',
        secondary: 'bg-white text-primary border border-primary/20 hover:bg-primary/5',
        outline: 'border border-gray-200 hover:border-primary text-gray-700 hover:text-primary',
        ghost: 'hover:bg-gray-100 text-gray-700',
        accent: 'bg-secondary hover:bg-secondary-dark text-white shadow-soft'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium active:scale-95',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
