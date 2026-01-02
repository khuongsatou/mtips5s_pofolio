import { useRef, useState, MouseEvent, useCallback } from 'react';

export const useTilt = (active: boolean = true) => {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('');
    const [bgPos, setBgPos] = useState('50% 50%');

    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!active || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateX = ((mouseY - height / 2) / 20) * -1; // Invert for natural feel
        const rotateY = (mouseX - width / 2) / 20;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
        setBgPos(`${(mouseX / width) * 100}% ${(mouseY / height) * 100}%`);
    }, [active]);

    const handleMouseLeave = useCallback(() => {
        if (!active) return;
        setTransform('');
        setBgPos('50% 50%');
    }, [active]);

    return { ref, transform, bgPos, handleMouseMove, handleMouseLeave };
};