import React from 'react'
import Header from './Component/Header'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Resturants from './Pages/Resturants'
import ProtectedRoute from './Component/ProtectedRoute'
import UserDashboard from './Pages/UserDashboard'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path='/' element={ <Home/> } />
        <Route path='/restaurants' element={ <Resturants /> } />
        <Route path='/my-bookings' element={ <ProtectedRoute > <UserDashboard /> </ProtectedRoute> }/>
    </>
  )
)

function App() {

  return (
    <RouterProvider router={route} />
  )
}

export default App
