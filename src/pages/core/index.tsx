import { Button } from '@/components/ui/button';
import { Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useCore from './hook';

export default function HomePage() {
   const { nodes, edges, reactFlowWrapper, onInit, handleCombine } = useCore();

   return (
      <div style={{ width: '100vw', height: '100vh' }} ref={reactFlowWrapper}>
         <Button
            onClick={() => handleCombine('fogo', 'agua')}
            className="absolute z-10 -translate-x-1/2 left-1/2 top-4 cursor-pointer"
         >
            Combinar Fogo + Água
         </Button>

         <ReactFlow nodes={nodes} edges={edges} onInit={onInit} fitView>
            <MiniMap />
            <Controls />
            <Background gap={16} />
         </ReactFlow>
      </div>
   );
}
