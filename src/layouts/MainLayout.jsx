import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ScrollProgress from '../components/ScrollProgress'
import SEOJsonLd from '../components/SEOJsonLd'

export default function MainLayout() {
    const { pathname } = useLocation()
    return (
        <>
            <SEOJsonLd />
            <ScrollToTop key={pathname} />
            <ScrollProgress />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
