import { type Edge, type Node, type ReactFlowInstance } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useRef, useState } from 'react';
import { combinations, initialEdges, initialNodes } from './constants';
import type { ElementKey } from './types';

export default function useCore() {
   const [nodes, setNodes] = useState<Node[]>(initialNodes);
   console.log('🧪 nodes: ', nodes);
   const [edges, setEdges] = useState<Edge[]>(initialEdges);
   const [counter, setCounter] = useState(3);

   const reactFlowWrapper = useRef<HTMLDivElement>(null);
   const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);

   const handleCombine = (...sources: ElementKey[]) => {
      const permutations = [
         sources.join('+'),
         [...sources].reverse().join('+'),
      ];
      const resultLabel =
         combinations[permutations[0]] || combinations[permutations[1]];
      if (!resultLabel) return;

      const existing = nodes.find((n) => n.data.label === resultLabel);
      if (existing) return;

      const newId = counter.toString();
      const newNode: Node = {
         id: newId,
         type: 'default',
         position: { x: Math.random() * 400, y: Math.random() * 400 },
         data: { label: resultLabel },
      };

      const sourceNodes = sources
         .map((elementId) => nodes.find((n) => n.data.id === elementId))
         .filter(Boolean) as Node[];
      console.log('🧪 sourceNodes: ', sourceNodes);
      if (sourceNodes.length !== sources.length) return;

      setNodes((nds) => [...nds, newNode]);
      setEdges((eds) => [
         ...eds,
         ...sourceNodes.map((src) => ({
            id: `e-${src.id}-${newId}`,
            source: src.id,
            target: newId,
         })),
      ]);
      setCounter((c) => c + 1);

      setTimeout(() => {
         if (rfInstance) {
            rfInstance.fitView({ nodes: [newNode], padding: 0.4 });
         }
      }, 100);
   };

   const onInit = useCallback(
      (instance: ReactFlowInstance) => setRfInstance(instance),
      [],
   );

   return {
      nodes,
      edges,
      reactFlowWrapper,
      handleCombine,
      onInit,
   };
}
