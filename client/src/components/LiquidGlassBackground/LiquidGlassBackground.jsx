// src/components/LiquidGlassBackground/LiquidGlassBackground.jsx
import React from 'react';
import './LiquidGlassBackground.scss';

const LiquidGlassBackground = () => {
    return (
        <div className="liquid-glass-background">
            <div className="liquid-orb orb-1"></div>
            <div className="liquid-orb orb-2"></div>
            <div className="liquid-orb orb-3"></div>
            <div className="liquid-orb orb-4"></div>
            <div className="liquid-orb orb-5"></div>
            <div className="glass-overlay"></div>
        </div>
    );
};

export default LiquidGlassBackground;
