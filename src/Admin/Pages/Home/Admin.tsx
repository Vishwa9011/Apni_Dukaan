import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import AdminRoutes from '../AdminRoutes';
import AddProduct from './../Products/AddProduct/AddProduct';

const Admin = () => {


     return (
          <Box m='auto'>
               <Heading>Admin</Heading>
               <Box display={'flex'} h='100%'>
                    <Box w='15%' border={'1px'}>
                         <Box>
                              <Link to='/admin/add-product'>Add Product</Link>
                         </Box>
                         <Box>
                              <Link to='/admin/products'>Products</Link>
                         </Box>
                    </Box>
                    <Box w='85%' border={'1px'}>
                         <AdminRoutes />
                    </Box>
               </Box>
               <Box>
               </Box>
          </Box>
     )
}

export default Admin