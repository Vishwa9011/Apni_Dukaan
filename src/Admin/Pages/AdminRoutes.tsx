import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AddProduct from './Products/AddProduct/AddProduct'
import Products from './Products/Products/Products'

const AdminRoutes = () => {
     return (
          <>
               <Routes>
                    <Route path='add-product' element={<AddProduct />} />
                    <Route path='products' element={<Products />} />
               </Routes>
               <Outlet />
          </>
     )
}

export default AdminRoutes