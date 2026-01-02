import { LucideIcon } from 'lucide-react';

export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
    colorClass: string; // Tailwind class for hover color
}

export interface TimelineItem {
    period: string;
    role: string;
    active?: boolean;
}

export interface Product {
    name: string;
    description: string;
    logoUrl: string;
    link: string;
}

export interface Skill {
    name: string;
    category?: 'tech' | 'business' | 'other';
}