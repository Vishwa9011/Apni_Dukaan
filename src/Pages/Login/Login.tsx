import { Box, Text, Image, Input, Button } from '@chakra-ui/react'
import React from 'react'
import SignIn from './SignIn'
import Signup from './Signup'
const Login = () => {
  return (
    <Box border={"1px solid #fceeeb"} backgroundColor={"#fceeeb"} h='max-content'>
      <Box width={"450px"} marginTop={"50px"} marginLeft={"33%"} backgroundColor={"white"}>
        <Box height={"auto"}>
          <Image src="https://assets.myntassets.com/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" alt="Login image" />
        </Box>
        <Box border={'1px'}>
          <SignIn />
          <Signup />
        </Box>
      </Box>

    </Box>
  )
}

export default Login



