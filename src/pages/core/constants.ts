import type { Edge, Node } from '@xyflow/react';
import type { ElementKey, Elements } from './types';

export const initialNodes: Node[] = [
   {
      id: '1',
      type: 'default',
      position: { x: 0, y: 50 },
      data: { id: 'fogo', label: 'Fogo' },
   },
   {
      id: '2',
      type: 'default',
      position: { x: 200, y: 50 },
      data: { id: 'agua', label: 'Água' },
   },
   {
      id: '3',
      type: 'default',
      position: { x: 400, y: 50 },
      data: { id: 'terra', label: 'Terra' },
   },
   {
      id: '3',
      type: 'default',
      position: { x: 400, y: 50 },
      data: { id: 'terra', label: 'Terra' },
   },
];

export const initialEdges: Edge[] = [];

export const combinations: Record<string, ElementKey> = {
   'fogo+agua': 'vapor',
} as const;

export const elements: Elements = {
   fogo: {
      id: 'fogo',
      label: 'Fogo',
      color: '#ff4d4d',
      description: 'Elemento do fogo',
   },
   agua: {
      id: 'agua',
      label: 'Água',
      color: '#4d79ff',
      description: 'Elemento da água',
   },
   terra: {
      id: 'terra',
      label: 'Terra',
      color: '#8B4513',
      description: 'Elemento da terra',
   },
   vapor: {
      id: 'vapor',
      label: 'Vapor',
      color: '#a6a6a6',
      description: 'Combinação de fogo e água',
   },
   ar: {
      id: 'ar',
      label: 'Ar',
      color: '#000000',
      description: 'Elemento do ar',
   },
} as const;
