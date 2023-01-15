import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import AddProduct from '../AddProduct/AddProduct'

const Admin = () => {


     return (
          <Box>
               <Heading>Admin</Heading>
               <AddProduct />
          </Box>
     )
}

export default Admin