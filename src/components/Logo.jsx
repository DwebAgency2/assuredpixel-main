import React from 'react';

export const Logo = ({ className = "h-8", showText = true }) => {
    return (
        <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
            {/* Abstract 'A' Pixel Icon */}
            <svg
                viewBox="0 0 100 100"
                className="h-full w-auto transition-transform duration-300 group-hover:scale-110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Sharp Background */}
                <rect width="100" height="100" rx="12" className="fill-slate-900 dark:fill-slate-800" />

                {/* Tech-inspired 'A' shape */}
                <path
                    d="M30 70L50 30L70 70"
                    stroke="url(#logo-gradient)"
                    strokeWidth="14"
                    strokeLinecap="square"
                    strokeLinejoin="bevel"
                />
                <path
                    d="M35 55H65"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="square"
                />

                {/* Pixel accent */}
                <rect x="68" y="62" width="12" height="12" className="fill-teal-400" />

                <defs>
                    <linearGradient id="logo-gradient" x1="50" y1="30" x2="50" y2="70" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2dd4bf" />
                        <stop offset="1" stopColor="#0d9488" />
                    </linearGradient>
                </defs>
            </svg>

            {showText && (
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
                    Assured<span className="text-teal-600 dark:text-teal-400">Pixel</span>
                </span>
            )}
        </div>
    );
};
