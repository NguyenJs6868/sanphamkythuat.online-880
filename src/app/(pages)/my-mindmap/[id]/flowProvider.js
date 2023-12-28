'use client';
import { ReactFlowProvider } from 'reactflow';
import AddNodeOnEdgeDrop from './AddNodeOnEdgeDrop';

function FlowProvider({ id }) {
  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop id={id} />
    </ReactFlowProvider>
  );
}

export default FlowProvider;
