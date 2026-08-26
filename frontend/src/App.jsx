import React from 'react'
import Header from './Component/Header'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Resturants from './Pages/Resturants'
import ProtectedRoute from './Component/ProtectedRoute'
import UserDashboard from './Pages/UserDashboard'
import RestuarantDetail from './Pages/RestuarantDetail'
import AdminDashboard from './Pages/OwnerDashboard'
import OwnerDashboard from './Pages/OwnerDashboard'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path='/' element={ <Home/> } />
        <Route path='/restaurants' element={ <Resturants /> } />
        <Route path='/my-bookings' element={ <ProtectedRoute > <UserDashboard /> </ProtectedRoute> }/>
        <Route path='/restuarant' element={ <RestuarantDetail /> } />
        {/* <Route path='/admin/dashboard' element={ <AdminDashboard /> } /> */}
        <Route path='/owner/dashboard' element={ <OwnerDashboard /> } />
    </>
  )
)

function App() {

  return (
    <RouterProvider router={route} />
  )
}

export default App
