import React from 'react';
import Card from './Card';
import { PRODUCTS } from '../constants';
import { ExternalLink, Zap } from 'lucide-react';

const RightColumn: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
             <div className="flex items-center gap-2 text-neutral-400 text-sm font-mono uppercase tracking-widest pl-1">
                <Zap className="w-4 h-4 text-cyan-400" />
                Featured Products
             </div>
            {PRODUCTS.map((product, index) => (
                <Card key={index} className="group" delay={400 + (index * 100)}>
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0 group-hover:border-cyan-400 transition-colors">
                            <img src={product.logoUrl} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                                {product.name}
                            </h3>
                            <p className="text-xs text-neutral-500 mt-1 mb-3 line-clamp-2">
                                {product.description}
                            </p>
                            <a 
                                href={product.link}
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-400 text-black text-xs font-bold hover:bg-white transition-colors"
                            >
                                Thử ngay
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </Card>
            ))}

            {/* Placeholder for more products */}
            <div className="p-6 rounded-2xl border border-dashed border-neutral-800 flex flex-col items-center justify-center text-center gap-2 text-neutral-600">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                    <span className="text-2xl">+</span>
                </div>
                <span className="text-sm font-medium">More coming soon...</span>
            </div>
        </div>
    );
};

export default RightColumn;