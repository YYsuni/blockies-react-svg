import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './style.css'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
