import React, { useState } from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './components/App.jsx'
import Main from './components/Main.jsx'
import CountryCard from './components/CountryCard.jsx'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Countrydetail from './components/Countrydetail.jsx'

const router =createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: "",
                element: <App/>
            },
            {
                path:":countrykanaam",
                element: <Countrydetail/>
            }
        ]
    }
])

ReactDOM.createRoot(document.querySelector("#root"))
.render(
 <RouterProvider router={router} />
)
