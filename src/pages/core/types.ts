import type { Node } from '@xyflow/react';

export interface Element {
   id: string;
   label: string;
   color: string;
   description: string;
   icon: string;
   [key: string]: unknown;
}

export type ElementKey = 'fogo' | 'terra' | 'agua' | 'ar' | 'vapor';

export type Elements = Record<ElementKey, Element>;

export type NodeType = 'default' | 'custom';

export type ElementNode<T extends NodeType = NodeType> = Node<Element, T>;
