import React from 'react';
import { useTilt } from '../hooks/useTilt';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    noTilt?: boolean;
    title?: React.ReactNode;
    icon?: React.ReactNode;
    delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', noTilt = false, title, icon, delay = 0 }) => {
    const { ref, transform, bgPos, handleMouseMove, handleMouseLeave } = useTilt(!noTilt);

    return (
        <div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`glass-panel border border-neutral-800 rounded-2xl p-6 relative group transition-all duration-300 ease-out animate-fade-up ${className}`}
            style={{ 
                transform: transform,
                animationDelay: `${delay}ms`
            }}
        >
            {/* Dynamic Border Gradient */}
            <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${bgPos}, rgba(0, 217, 255, 0.1), transparent 40%)`
                }}
            />
            
            {/* Top Border Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 via-magenta-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
                {(title || icon) && (
                    <div className="flex items-center gap-3 mb-4 text-lg font-semibold text-white">
                        {icon && <span className="text-xl">{icon}</span>}
                        {title && <span>{title}</span>}
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default Card;