import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import useReveal from './lib/UseReveal'
import './App.css'

export default function App() {
  useReveal()
  return <RouterProvider router={router} />
}
