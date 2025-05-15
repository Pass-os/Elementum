import type { Element } from '@/pages/core/types';
import { Handle, Position } from '@xyflow/react';
import { memo } from 'react';

const ElementNode = memo(({ data }: { data: Element }) => {
   return (
      <>
         <Handle type="target" position={Position.Top} />
         <div className="bg-white rounded-full p-2 shadow-md flex flex-col items-center justify-center relative size-10">
            <span className="text-2xl absolute top-[-2px]">{data.icon}</span>

            <div className="shadow-sm border- flex items-center justify-center min-w-[50px] min-h-1 bg-white rounded-full absolute bottom-[-4px]">
               <span className="text-[10px]">{data.label}</span>
            </div>
         </div>
         <Handle type="source" position={Position.Bottom} id="a" />
      </>
   );
});

export default ElementNode;
