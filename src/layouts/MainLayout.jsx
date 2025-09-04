import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop key={pathname} />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
