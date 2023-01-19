import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import { logout } from '../../../Redux/Auth/Action.auth'
import { RootState } from '../../../Redux/store'

const Profile = () => {
  const { Toast } = UseToastMsg()
  const dispatch: Dispatch<any> = useDispatch()
  const { userCredential }: any = useSelector((store: RootState) => store.auth)
  console.log('userCredential: ', userCredential);

  // todo: logout btn
  const Logout = () => {
    dispatch(logout(Toast))
  }

  return (
    <Box>
      <Box minW="90%" m={"auto"} pt="4" px='2'>
        {userCredential?.email ?
          <Box fontSize='.8em'>
            <Text fontWeight={'bold'} fontSize='.9em' textTransform='capitalize'>Hello {userCredential?.username ? userCredential?.username : userCredential?.email?.split("@")[0]}</Text>
            <Text>{userCredential?.username ? userCredential?.username : userCredential?.email}</Text>
          </Box>
          :
          <Box>
            <Text color={"black"} fontWeight="semibold" fontSize={"sm"}>Welcome</Text>
            <Text fontSize={"sm"} mb='2'>To access account and manage orders</Text>
            <Link to='/login'>
              <Text as='span' fontWeight={'semibold'} bg={"#E53E3E"} color="white" p='2' borderRadius={'5px'} fontSize='.8em' letterSpacing={'1px'}>LOGIN/SIGNUP</Text>
            </Link>
          </Box>}
        <hr style={{ margin: "10px 0px 10px 0px" }} />
        <Flex flexDir={"column"} fontSize={"sm"}>
          <Link to="/orders">Orders</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="#">Gift Cards</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/">Apni Dukan</Link>
        </Flex>

        <hr style={{ margin: "10px 0px 10px 0px" }} />

        <Flex flexDir={"column"} fontSize={"sm"}>
          <Link to="#">Coupons</Link>
          <Link to="#">Save Cards</Link>
          <Link to="#">Save Addess</Link>
        </Flex>
        <hr style={{ margin: "10px 0px 10px 0px" }} />
        {userCredential && <Flex flexDir={"column"} fontSize={"sm"}>
          <Link to="/profile">Profile</Link>
          <Text cursor={'pointer'} _hover={{ fontWeight: 'semibold' }} onClick={Logout}>Logout</Text>
        </Flex>}
      </Box>
    </Box>
  )
}

export default Profile