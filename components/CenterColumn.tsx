import React from 'react';
import Card from './Card';
import { SOCIAL_LINKS_PRIMARY, SOCIAL_LINKS_SECONDARY, SKILLS } from '../constants';
import { Coffee, Wallet, CreditCard } from 'lucide-react';

const CenterColumn: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Social Links */}
            <Card delay={150}>
                {/* Primary Grid */}
                <div className="grid grid-cols-5 gap-3 mb-6">
                    {SOCIAL_LINKS_PRIMARY.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 transition-all duration-300 hover:-translate-y-1 ${link.colorClass}`}
                            title={link.name}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="text-[10px] font-medium">{link.name}</span>
                        </a>
                    ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

                {/* Secondary Grid */}
                <div className="grid grid-cols-5 gap-3">
                    {SOCIAL_LINKS_SECONDARY.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 transition-all duration-300 hover:-translate-y-1 ${link.colorClass}`}
                            title={link.name}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="text-[10px] font-medium">{link.name}</span>
                        </a>
                    ))}
                </div>
            </Card>

            {/* Donation */}
            <Card title="Mời tôi một ly cà phê" icon={<Coffee className="text-amber-500" />} delay={250}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* QR Code Placeholders */}
                    <div className="group relative aspect-square bg-white rounded-xl overflow-hidden p-2 flex flex-col items-center justify-center cursor-pointer">
                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
                        <img 
                            src="https://tools.1nutnhan.com/public/mb.jpg" 
                            alt="MB Bank" 
                            className="w-full h-full object-contain mix-blend-multiply" 
                        />
                        <div className="absolute bottom-0 w-full bg-blue-700 text-white text-[10px] font-bold text-center py-1">
                            MB BANK
                        </div>
                    </div>
                    <div className="group relative aspect-square bg-white rounded-xl overflow-hidden p-2 flex flex-col items-center justify-center cursor-pointer">
                        <div className="absolute inset-0 bg-pink-600/10 group-hover:bg-pink-600/20 transition-colors" />
                        <img 
                            src="https://tools.1nutnhan.com/public/momo.jpg" 
                            alt="Momo" 
                            className="w-full h-full object-contain mix-blend-multiply" 
                        />
                        <div className="absolute bottom-0 w-full bg-pink-600 text-white text-[10px] font-bold text-center py-1">
                            MOMO
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors text-sm font-semibold">
                        <CreditCard className="w-4 h-4" />
                        PayPal
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors text-sm font-semibold">
                        <Wallet className="w-4 h-4" />
                        Momo
                    </button>
                </div>
            </Card>

            {/* Skills */}
            <Card title="Kỹ Năng" delay={350}>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill, idx) => (
                        <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-400 cursor-default hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default CenterColumn;