// frontend/src/toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {/* The "toolbar-container" class makes this float! */}
                <div className="toolbar-container">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    
                    {/* Your 5 New Nodes */}
                    <DraggableNode type='date' label='Date' />
                    <DraggableNode type='note' label='Note' />
                    <DraggableNode type='integration' label='Int' />
                    <DraggableNode type='filter' label='Filter' />
                    <DraggableNode type='transform' label='Transform' />
                </div>
            </div>
        </div>
    );
};