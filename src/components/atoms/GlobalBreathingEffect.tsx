'use client';

import { useRandomBreathing } from '@/hooks/useRandomBreathing';

export default function GlobalBreathingEffect() {
    useRandomBreathing('.group');
    return null;
}
