import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <Header />
      <main className={isHome ? 'content content--flush' : 'content'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
