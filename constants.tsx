import { 
    MessageCircle, Send, Phone, Mail, Github, Facebook, Youtube, 
    Gamepad2, AtSign, FileText, Globe 
} from 'lucide-react';
import { SocialLink, TimelineItem, Skill, Product } from './types';

export const SOCIAL_LINKS_PRIMARY: SocialLink[] = [
    { name: 'Zalo', url: 'https://zalo.me/g/newwww890', icon: MessageCircle, colorClass: 'hover:text-cyan-400 hover:border-cyan-400' },
    { name: 'Telegram', url: 'https://t.me/khuongdrama', icon: Send, colorClass: 'hover:text-cyan-400 hover:border-cyan-400' },
    { name: 'Phone', url: 'tel:0356241963', icon: Phone, colorClass: 'hover:text-green-400 hover:border-green-400' },
    { name: 'Email', url: 'mailto:vankhuong240499@gmail.com', icon: Mail, colorClass: 'hover:text-red-400 hover:border-red-400' },
    { name: 'GitHub', url: 'https://github.com/khuongsatou', icon: Github, colorClass: 'hover:text-white hover:border-white' },
];

export const SOCIAL_LINKS_SECONDARY: SocialLink[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/khuongSatou/', icon: Facebook, colorClass: 'hover:text-blue-500 hover:border-blue-500' },
    { name: 'YouTube', url: 'https://www.youtube.com/@KhuongDrama/', icon: Youtube, colorClass: 'hover:text-red-600 hover:border-red-600' },
    { name: 'Discord', url: 'https://discord.gg/TqS7mVd5', icon: Gamepad2, colorClass: 'hover:text-indigo-400 hover:border-indigo-400' },
    { name: 'Threads', url: 'https://www.threads.com/@khuongkara', icon: AtSign, colorClass: 'hover:text-white hover:border-white' },
    { name: 'Policy', url: 'https://khuongsatou.github.io/whisk_policy/privacy-policy.html', icon: FileText, colorClass: 'hover:text-gray-400 hover:border-gray-400' },
];

export const TIMELINE_DATA: TimelineItem[] = [
    { period: '2025 - Nay', role: 'Youtube AI & Automation', active: true },
    { period: '2023 - 2024', role: 'Backend Flask - Freelancer' },
    { period: '2020 - 2022', role: 'Mobile App Dev - TrieuDo Corp' },
    { period: '2017 - 2019', role: 'Cao Thang College' },
];

export const SKILLS: Skill[] = [
    { name: 'Marketing' },
    { name: 'Youtube Growth' },
    { name: 'Business' },
    { name: 'Automation' },
    { name: 'Python/Flask' },
    { name: 'React Native' },
    { name: 'Web Dev' },
    { name: 'AI Generative' },
    { name: 'Affiliate' },
    { name: 'Finance' },
];

export const PRODUCTS: Product[] = [
    {
        name: 'One Click Whisk Pro',
        description: 'Tự động hóa cho Whisk AI / Flow AI. Giải pháp tối ưu quy trình sáng tạo.',
        logoUrl: './public/oneclick_logo.png',
        link: 'https://chromewebstore.google.com/detail/lcpkplaadgbcfhoacgaddlcfkccoiepg?utm_source=item-share-cb'
    }
];