import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))


const loader = (el) => <Suspense fallback={<div className="section">Yükleniyor…</div>}>{el}</Suspense>

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: loader(<Home />) },
    ],
  },
])