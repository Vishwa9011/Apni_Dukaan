import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AdminRoutes from '../AdminRoutes';
import AddProduct from './../Products/AddProduct/AddProduct';

const Admin = () => {


     return (
          <Box m='auto'>
               <Heading>Admin</Heading>
               <Box display={'flex'} h='100%'>
                    <Box w='15%' border={'1px'}>
                         <Sidebar />
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