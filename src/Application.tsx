import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Admin from './Admin/Pages/Home/Admin'
import Address from './Pages/Address/Address'
import Payment from './Pages/Payment/Payment'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NewPassword from './Pages/Login/NewPassword'
import PageNotFound from './Pages/Page404/PageNotFound'
import Shop from './Pages/Shop/Shop'
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage'
import Wishlist from './Pages/Wishlist/Wishlist'
import ProtectedRoute from './ProtectedRoute'
import Profile from './Pages/Profile/Profile'
import Orders from './Pages/Orders/Orders'

const Application = () => {
     return (
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/shop' element={<Shop />} />
               <Route path='/shop/:id' element={<Shop />} />
               <Route path='/product-detail/:id' element={<SingleProductPage />} />
               <Route path='/cart/*' element={<ProtectedRoute><CartRoute /></ProtectedRoute>} />
               <Route path='/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
               <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
               <Route path='/login' element={<Login />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/login/reset-password' element={<NewPassword />} />
               <Route path='/admin/*' element={<Admin />} />
               <Route path='*' element={<PageNotFound />} />
          </Routes>
     )
}

export default Application


const CartRoute = () => {
     return (
          <Routes>
               <Route index element={<ProtectedRoute><Cart /></ProtectedRoute>} />
               <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
               <Route path='/address' element={<ProtectedRoute><Address /></ProtectedRoute>} />
               <Route path='/payment' element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          </Routes>
     )
}