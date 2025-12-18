// frontend/src/draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <button
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
        // We only keep layout styles here. 
        // Color, border, and background are now handled by your new CSS!
        style={{ 
            cursor: 'grab', 
            minWidth: '80px', 
            height: '40px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column'
        }} 
      >
        <span style={{ pointerEvents: 'none' }}>{label}</span>
      </button>
    );
  };