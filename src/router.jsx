import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const Projects = lazy(() => import('./pages/Projects'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Contact = lazy(() => import('./pages/Contact'))
const News = lazy(() => import('./pages/News'))          
const Post = lazy(() => import('./pages/Post'))        
const NotFound = lazy(() => import('./pages/NotFound'))

const loader = (el) => <Suspense fallback={<div className="section">Yükleniyor…</div>}>{el}</Suspense>

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: loader(<Home />) },
      { path: '/hakkimizda', element: loader(<About />) },
      { path: '/hizmetler', element: loader(<Services />) },
      { path: '/urunler', element: loader(<Products />) },
      { path: '/projeler', element: loader(<Projects />) },
      { path: '/belgeler', element: loader(<Certificates />) },
      { path: '/haberler', element: loader(<News />) },       
      { path: '/haber/:slug', element: loader(<Post />) },   
      { path: '/iletisim', element: loader(<Contact />) },
      { path: '*', element: loader(<NotFound />) },
    ],
  },
])