// frontend/src/submit.js (or wherever your Run Button is)
import React, { useState } from 'react';
import { useStore } from './store'; // Assuming you use a store, adjust if needed

export const SubmitButton = () => {
    // 1. Get nodes and edges from your store/state
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    // 2. Local state for the Toast Notification
    const [toast, setToast] = useState({ 
        show: false, 
        message: '', 
        type: 'success' 
    });

    const handleSubmit = async () => {
        // --- YOUR EXISTING BACKEND LOGIC HERE ---
        // (This is the logic that calculates the DAG)
        // For example:
        // const response = await fetch('http://localhost:8000/pipelines/parse', ...);
        // const data = await response.json();
        
        // SIMULATED LOGIC (Use your actual response data here)
        // Let's assume you calculated these values:
        const numNodes = nodes.length;
        const numEdges = edges.length;
        const isDag = true; // Replace with your actual is_dag result

        // 3. SHOW THE TITAN TOAST (Instead of window.alert)
        const notificationType = isDag ? 'toast-success' : 'toast-error';
        const title = isDag ? 'PIPELINE STABLE' : 'CRITICAL FAILURE';
        
        setToast({
            show: true,
            type: notificationType,
            title: title,
            message: `Nodes: ${numNodes} | Edges: ${numEdges} | DAG: ${isDag}`
        });

        // 4. Auto-dismiss after 3 seconds
        setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
        }, 3000);
    };

    return (
        <>
            {/* THE LAUNCH BUTTON */}
            <div className="submit-container">
                <button type="submit" className="submit-btn" onClick={handleSubmit}>
                    {/* SVG Icon for the Play Button */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    Run Pipeline
                </button>
            </div>

            {/* THE TITAN TOAST NOTIFICATION */}
            {/* This uses the CSS from Part 5 */}
            <div className={`toast ${toast.show ? 'show' : ''} ${toast.type}`}>
                {/* Icon based on success/error */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: '32px', height: '32px' }}>
                    {toast.type === 'toast-success' ? (
                        <span style={{ color: '#4ade80' }}>✓</span> 
                    ) : (
                        <span style={{ color: '#ef4444' }}>✕</span>
                    )}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '12px', color: '#fff', letterSpacing: '1px' }}>
                        {toast.title}
                    </span>
                    <span style={{ color: '#a3a3a3', fontSize: '13px' }}>
                        {toast.message}
                    </span>
                </div>
            </div>
        </>
    );
};