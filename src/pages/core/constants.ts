import type { ElementKey, ElementNode, Elements } from './types';

export const elements: Elements = {
   fogo: {
      id: 'fogo',
      label: 'Fogo',
      color: '#ff4d4d',
      description: 'Elemento do fogo',
      icon: '🔥',
   },
   agua: {
      id: 'agua',
      label: 'Água',
      color: '#4d79ff',
      description: 'Elemento da água',
      icon: '💧',
   },
   ar: {
      id: 'ar',
      label: 'Ar',
      color: '#000000',
      description: 'Elemento do ar',
      icon: '🌬️',
   },
   terra: {
      id: 'terra',
      label: 'Terra',
      color: '#8B4513',
      description: 'Elemento da terra',
      icon: '🪨',
   },
   vapor: {
      id: 'vapor',
      label: 'Vapor',
      color: '#a6a6a6',
      description: 'Combinação de fogo e água',
      icon: '🌫️',
   },
};

export const initialNodes: ElementNode[] = [
   {
      id: elements.fogo.id,
      type: 'custom',
      position: { x: 0, y: 50 },
      data: elements.fogo,
   },
   {
      id: elements.agua.id,
      type: 'custom',
      position: { x: 200, y: 50 },
      data: elements.agua,
   },
   {
      id: elements.ar.id,
      type: 'custom',
      position: { x: 400, y: 50 },
      data: elements.ar,
   },
   {
      id: elements.terra.id,
      type: 'custom',
      position: { x: 600, y: 50 },
      data: elements.terra,
   },
];

export const combinations: Record<string, ElementKey> = {
   'fogo+agua': 'vapor',
   'agua+fogo': 'vapor',
} as const;
