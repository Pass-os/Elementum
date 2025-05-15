import {
   addEdge,
   applyEdgeChanges,
   applyNodeChanges,
   type Edge,
   type EdgeChange,
   type Node,
   type NodeChange,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useRef, useState } from 'react';
import { combinations, elements, initialNodes } from './constants';
import type { Element, ElementKey, ElementNode } from './types';

export default function useCore() {
   const [nodes, setNodes] = useState<ElementNode[]>(initialNodes);
   const [edges, setEdges] = useState<Edge[]>([]);
   const reactFlowWrapper = useRef<HTMLDivElement>(null);

   const handleCombine = (...sources: ElementKey[]) => {
      const permutations = [
         sources.join('+'),
         [...sources].reverse().join('+'),
      ];

      const elementId =
         combinations[permutations[0]] || combinations[permutations[1]];

      if (!elementId) return;

      const existing = nodes.find((n) => n.data.label === elementId);

      if (existing) return;

      const newNode: ElementNode = {
         id: elementId,
         type: 'custom',
         position: { x: Math.random() * 400, y: Math.random() * 400 },
         data: elements[elementId],
         draggable: true,
      };

      const sourceNodes = sources
         .map((elementId) => nodes.find((n) => n.data.id === elementId))
         .filter(Boolean) as Node<Element>[];

      if (sourceNodes.length !== sources.length) return;

      setNodes((nds) => [...nds, newNode as ElementNode<'custom'>]);

      setEdges((eds) => [
         ...eds,
         ...sourceNodes.map((src) => ({
            id: `e-${src.id}-${elementId}`,
            source: src.id,
            target: elementId,
         })),
      ]);
   };

   const onNodesChange = useCallback(
      (changes: NodeChange<any>[]) =>
         setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes],
   );
   const onEdgesChange = useCallback(
      (changes: EdgeChange<any>[]) =>
         setEdges((eds) => applyEdgeChanges(changes, eds)),
      [setEdges],
   );
   const onConnect = useCallback(
      (connection: any) => setEdges((eds) => addEdge(connection, eds)),
      [setEdges],
   );

   return {
      nodes,
      edges,
      reactFlowWrapper,
      handleCombine,
      setEdges,
      setNodes,
      onNodesChange,
      onEdgesChange,
      onConnect,
   };
}
