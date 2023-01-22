import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Message from './Message/Message'
import Orders from './Orders/Orders'
import AddProduct from './Products/AddProduct/AddProduct'
import Products from './Products/Products/Products'
import Users from './Users/Users'

const AdminRoutes = () => {
     return (
          <>
               <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/messages' element={<Message />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/products' element={<Products />} />
               </Routes>
               <Outlet />
          </>
     )
}

export default AdminRoutes