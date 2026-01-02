import React, { useEffect } from 'react';
import Background from './components/Background';
import ProfileColumn from './components/ProfileColumn';
import CenterColumn from './components/CenterColumn';
import RightColumn from './components/RightColumn';

const App: React.FC = () => {
    
    // Easter Egg: Rainbow Mode
    useEffect(() => {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'b', 'a'
        ];
        let cursor = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === konamiCode[cursor]) {
                cursor++;
                if (cursor === konamiCode.length) {
                    document.body.style.animation = 'rainbow 5s linear infinite';
                    // Create style for rainbow keyframes if not exists
                    if (!document.getElementById('rainbow-style')) {
                        const style = document.createElement('style');
                        style.id = 'rainbow-style';
                        style.textContent = `
                            @keyframes rainbow {
                                0% { filter: hue-rotate(0deg); }
                                100% { filter: hue-rotate(360deg); }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                    setTimeout(() => {
                        document.body.style.animation = '';
                    }, 5000);
                    cursor = 0;
                }
            } else {
                cursor = 0;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="relative min-h-screen font-sans text-neutral-200">
            <Background />

            <div className="relative z-10 max-w-[1400px] mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    
                    {/* Left Column - Profile & Journey */}
                    <div className="lg:col-span-4 w-full">
                        <ProfileColumn />
                    </div>

                    {/* Center Column - Socials & Info */}
                    <div className="lg:col-span-5 w-full">
                        <CenterColumn />
                    </div>

                    {/* Right Column - Products */}
                    <div className="lg:col-span-3 w-full">
                        <RightColumn />
                    </div>

                </div>
                
                <footer className="mt-12 text-center text-xs text-neutral-600 font-mono">
                    <p>&copy; 2025 Nguyen Van Khuong. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;