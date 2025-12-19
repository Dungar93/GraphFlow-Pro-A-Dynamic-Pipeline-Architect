# GraphFlow Pro: A Dynamic Pipeline Architect

## 🚀 Project Overview & Vision
**GraphFlow Pro** is an industry-grade, full-stack visual programming interface designed for building and validating complex data workflows. As a **Computer Science student at IIT Jodhpur**, I developed this project to solve the inherent challenge in node-based editors: **Logical Integrity.**

While most canvas tools allow users to draw connections freely, **GraphFlow Pro** acts as an intelligent orchestrator. It ensures that every workflow is a valid **Directed Acyclic Graph (DAG)** by performing real-time algorithmic analysis on the backend, preventing the creation of infinite loops that would otherwise crash production execution engines.



---

## 🛠 Tech Stack Deep Dive

### **Frontend Logic (The User Interface)**
* **React.js (v18)**: Leveraging functional components and hooks for high-performance state management.
* **React Flow**: The core engine used to render the infinite canvas, nodes, and edges.
* **Tailwind CSS**: A utility-first CSS framework used to implement a custom **Glassmorphism "Deep Space" theme**.
* **Lucide React**: For scalable, modern iconography.
* **Axios**: For asynchronous, promise-based communication with the FastAPI server.

### **Backend Logic (The Brain)**
* **Python (v3.10+)**: Chosen for its superior handling of graph-based data structures and algorithms.
* **FastAPI**: A modern, high-performance web framework that provides asynchronous request handling and automatic Pydantic validation.
* **Pydantic**: Used for strict data modeling to ensure the frontend sends valid graph JSON structures.
* **Uvicorn**: An ASGI server implementation for lightning-fast local development and deployment.

---

## 🏗 System Architecture

The application follows a strict **Decoupled Architecture** to ensure that UI rendering and logical validation remain separate and scalable.



### **The Architecture Workflow:**
1.  **State Management**: React Flow tracks the `x, y` coordinates of nodes and the `source-target` mapping of edges.
2.  **The Bridge**: When "Run Pipeline" is clicked, the state is serialized into a JSON object and transmitted via a `POST` request.
3.  **The Processor**: FastAPI receives the payload, constructs an **Adjacency List**, and initiates the traversal algorithm.
4.  **The Feedback**: The result is sent back to the client and rendered via a Toast notification system.

---

## 📂 Project Directory Structure

```text
GraphFlow-Pro-A-Dynamic-Pipeline-Architect/
├── backend/                        # Python / FastAPI Backend
│   ├── main.py                     # Entry point for API & Graph Algorithms
│   ├── requirements.txt            # Project dependencies
│   ├── models/                     # Pydantic Schemas
│   └── utils/                      # Helper functions for DAG logic
├── frontend/                       # React / React Flow Frontend
│   ├── public/                     # Static assets & icons
│   ├── src/
│   │   ├── nodes/                  # CUSTOM NODE REPOSITORY
│   │   │   ├── baseNode.js          # The Abstract UI Wrapper
│   │   │   ├── textNode.js          # Regex-based dynamic input node
│   │   │   ├── dateNode.js          # Calendar-based trigger node
│   │   │   ├── filterNode.js        # Conditional logic node
│   │   │   ├── integrationNode.js   # Third-party API node
│   │   │   ├── noteNode.js          # Documentation node
│   │   │   ├── transformNode.js     # Data mutation node
│   │   │   └── outputNode.js        # Terminal sink node
│   │   ├── components/             # UI Widgets (Toolbar, Submit)
│   │   ├── styles/                 # Tailwind directives & theme
│   │   ├── App.js                  # Main Application logic
│   │   ├── pipeline.js             # Canvas & Flow Logic
│   │   └── index.css               # Global Styling
│   ├── package.json                # NPM configuration
│   └── tailwind.config.js          # Theme & Brand configuration
└── README.md                       # Comprehensive Documentation
