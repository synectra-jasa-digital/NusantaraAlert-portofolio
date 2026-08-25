import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'

// Suppress third-party browser extension (e.g. MetaMask contentscript.js) noise warnings
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = function (...args) {
    const firstArg = args[0];
    if (
      typeof firstArg === 'string' &&
      (firstArg.includes('ObjectMultiplex') ||
       firstArg.includes('orphaned data for stream') ||
       firstArg.includes('app-init-liveness') ||
       firstArg.includes('background-liveness'))
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)

