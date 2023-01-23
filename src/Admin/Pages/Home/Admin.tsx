import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AdminRoutes from '../AdminRoutes';
import AddProduct from './../Products/AddProduct/AddProduct';

const Admin = () => {


     return (
          <Box m='auto'>
               <Link to='/'>
                    <Heading textAlign={'center'} py='4'>Admin</Heading>
               </Link>
               <Box display={'flex'} h='100vh' borderTop={'1px'} borderColor='green.200'>
                    <Box w='17%' borderRight={'2px'} borderColor='gray.200'>
                         <Sidebar />
                    </Box>
                    <Box w='83%' border={'px'}>
                         <AdminRoutes />
                    </Box>
               </Box>
               <Box>
               </Box>
          </Box>
     )
}

export default Admin