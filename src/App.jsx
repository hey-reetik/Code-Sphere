import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './Screens'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // other pages....

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
