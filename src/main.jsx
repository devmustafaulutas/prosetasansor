import React from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App'

const lenis = new Lenis({ smoothWheel: true, smoothTouch: false })
function raf(t){ lenis.raf(t); requestAnimationFrame(raf) }
requestAnimationFrame(raf)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
