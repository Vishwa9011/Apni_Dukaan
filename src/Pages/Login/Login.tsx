import { Box, Text, Image, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
     return (
          <Box border={"1px solid #fceeeb"} height={"700px"} backgroundColor={"#fceeeb"}>
      <Box border={"0px solid black"} height={"600px"} width={"450px"} marginTop={"50px"} marginLeft={"33%"} backgroundColor={"white"}>
      <Box height={"auto"}>
      <Image src="https://assets.myntassets.com/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" alt="Login image"/>
      </Box>
      <Box height={"300px"} marginTop={"30px"} width={"370px"} marginLeft={"40px"}>
      <Box display={"flex"}  gap={"10px"} height={"50px"}>
        <Box><Text fontWeight={800} fontSize={15} >Login</Text></Box>
        <Box><Text>or</Text></Box>
        <Box><Text fontWeight={800} fontSize={15}>Signup</Text></Box>
      </Box>
      <Box><Input type="email" placeholder='+91 | Mobile Number' /></Box>
      <Box display={"flex"}  marginTop={"15px"}>
        <Box><Text fontSize={13} >By continuing, i agree to the</Text></Box>
        <Box><Text fontSize={13} color={"#ff3f6b"}>Terms of Use</Text></Box>
        <Box><Text fontSize={13}>&</Text></Box>
        <Box><Text fontSize={13} color={"#ff3f6b"}>Privacy Policy</Text></Box>
      </Box>
      <Box><Button backgroundColor={"#ff3f6b"} color={"white"} marginTop={"15px"} width={"100%"}><Text>Continue</Text></Button></Box>
      <Box display={"flex"}  marginTop={"15px"}>
        <Box><Text fontSize={13}>Have Trouble logging in?</Text></Box>
        <Box><Text fontSize={13} color={"#ff3f6b"}>Get help</Text></Box>
      </Box>
      </Box>
      </Box>
      
    </Box>
     )
}

export default Login