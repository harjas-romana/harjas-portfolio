import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Core Architectural Styles */
import './index.css'

/* The Application Root */
import App from './App.jsx'

/**
 * Harjas Romana // Software Engineer & System Architect
 * Version: 4.0.0 (Editorial Light Theme)
 * * Initializing React Root and committing App to the DOM.
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error("System Error: Root element not found. Initialization failed.");
}