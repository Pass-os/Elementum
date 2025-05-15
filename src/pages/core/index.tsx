import ElementNode from '@/components/ElementNode';
import { Background, Controls, ReactFlow, type NodeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useCore from './hook';

export default function HomePage() {
   const {
      nodes,
      edges,
      reactFlowWrapper,

      onNodesChange,
      onEdgesChange,
      onConnect,
   } = useCore();

   const nodeTypes: NodeTypes = { custom: ElementNode };

   return (
      <div style={{ width: '100vw', height: '100vh' }} ref={reactFlowWrapper}>
         <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
         >
            <Controls />
            <Background gap={16} />
         </ReactFlow>
      </div>
   );
}
