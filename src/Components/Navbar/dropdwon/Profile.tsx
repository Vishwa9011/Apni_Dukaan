import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Box>
        <Box w="90%" m={"auto"} pt="4">
            <Text color={"black"} fontWeight="semibold" fontSize={"sm"} >Welcome</Text>
            <Text fontSize={"sm"}>To access account and manage orders</Text>
            <Button my={"2"} bg={"white"} color="#E53E3E" border={"1px solid #C5C5C5"}>LOGIN/SIGNUP</Button>
            <hr style={{margin:"10px 0px 20px 0px"}} />
            <Flex flexDir={"column"}  fontSize={"sm"}>
            <Link to="#">Orders</Link>
            <Link to="#">Wishlist</Link>
            <Link to="#">Gift Cards</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#">Apni Dukan</Link>
             </Flex>
             
             <hr style={{margin:"10px 0px 20px 0px"}}  />

            <Flex flexDir={"column"} fontSize={"sm"}>
            <Link to="#">Coupons</Link>
            <Link to="#">Save Cards</Link>
            <Link to="#">Save Addess</Link>
            </Flex>
        </Box>
    </Box>
  )
}

export default Profile