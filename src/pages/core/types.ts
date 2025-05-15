export interface Element {
   id: string;
   label: string;
   color: string;
   description: string;
}

export type ElementKey = 'fogo' | 'terra' | 'agua' | 'ar' | 'vapor';

export type Elements = Record<ElementKey, Element>;
