import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/home/Home'
import Products from '../pages/product/Products'
// import SignUp from '../pages/user/SignUp'
import Faculty from '../pages/home/faculty/Faculty'
import Events from '../pages/home/events/Events'
import Courses from '../pages/home/courses/Courses'
import Dashboard from '../pages/dashboard/Dashboard'
import Gallery from '../pages/home/gallery/Gallery'
import Contact from '../pages/home/contact/Contact'
import About from '../pages/home/about/About'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/faculty",
                element: <Faculty />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },


        ]
    },
])

export default router