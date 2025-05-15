import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '@ui/alert-dialog';

import {
   addEdge,
   Background,
   BackgroundVariant,
   Controls,
   MiniMap,
   ReactFlow,
   useEdgesState,
   useNodesState,
   type Connection,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useState } from 'react';

const initialNodes = [
   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
   {
      id: '2',
      position: { x: 0, y: 100 },
      data: { label: '2' },
   },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function HomePage() {
   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onConnect = useCallback(
      (params: Connection) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
   );

   return (
      <div style={{ width: '100vw', height: '100vh' }}>
         <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={(_, node) => {
               setSelectedNodeId(node.id);
               setIsModalOpen(true);
            }}
         >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
         </ReactFlow>

         <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <AlertDialogContent>
               <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                     This action cannot be undone. This will permanently delete
                     your account and remove your data from our servers.
                  </AlertDialogDescription>
               </AlertDialogHeader>

               <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
      </div>
   );
}
