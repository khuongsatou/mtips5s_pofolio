import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Lightbulb, Rocket } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';

const ProfileColumn: React.FC = () => {
    const [statusText, setStatusText] = useState('');
    const fullText = "Youtube & Automation";

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setStatusText(prev => prev + fullText.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Profile Card */}
            <Card className="profile-card" delay={100}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-20 h-20 shrink-0">
                        {/* Glow behind avatar */}
                        <div className="absolute inset-[-4px] bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-2xl blur-md opacity-60 animate-pulse-glow" />
                        <img 
                            src="./public/avatar.png" 
                            alt="Avatar" 
                            className="w-full h-full object-cover rounded-2xl relative z-10 border-2 border-white/10"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-magenta-500 to-gold-400">
                            Nguyễn Văn Khương
                        </h1>
                        <p className="font-mono text-sm text-neutral-400">@khuongsatou</p>
                    </div>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                    Một người thích nghiên cứu về công nghệ có niềm đam mê mãnh liệt với kinh doanh và lập trình.
                </p>
            </Card>

            {/* Status Card */}
            <Card title="Hiện tại tôi đang..." icon={<Lightbulb className="text-gold-400" />} delay={200}>
                <div className="bg-neutral-900/50 rounded-xl p-4 border-l-4 border-cyan-400">
                    <h3 className="text-cyan-400 font-bold mb-1 min-h-[1.5rem] flex items-center">
                        {statusText}
                        <span className="w-0.5 h-5 bg-cyan-400 ml-1 animate-pulse" />
                    </h3>
                    <p className="text-sm text-neutral-400">
                        Nghiên cứu và phát triển công cụ cho kênh youtube 1 Nút Nhấn.
                    </p>
                </div>
            </Card>

            {/* Journey Card */}
            <Card title="Hành Trình" icon={<Rocket className="text-magenta-500" />} delay={300}>
                <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
                    {TIMELINE_DATA.map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Marker */}
                            <div className={`absolute -left-[24px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 z-10 bg-bg-card 
                                ${item.active 
                                    ? 'border-magenta-500 bg-magenta-500/20 shadow-[0_0_10px_rgba(255,0,128,0.5)]' 
                                    : 'border-neutral-700 group-hover:border-cyan-400'}`} 
                            />
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-1">
                                <span className={`font-mono text-xs px-2 py-0.5 rounded border transition-colors
                                    ${item.active 
                                        ? 'bg-magenta-500/10 border-magenta-500/50 text-magenta-500' 
                                        : 'bg-neutral-900 border-neutral-800 text-neutral-500 group-hover:text-neutral-300'}`}
                                >
                                    {item.period}
                                </span>
                                <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default ProfileColumn;