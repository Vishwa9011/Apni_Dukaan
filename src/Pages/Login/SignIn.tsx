import { Box, Button, Input, Text } from "@chakra-ui/react"

const SignIn = () => {
     return (
          <Box height={"300px"} marginTop={"30px"} width={"370px"} marginLeft={"40px"}>
               <Box display={"flex"} gap={"10px"} height={"50px"}>
                    <Box><Text fontWeight={800} fontSize={15} >Login</Text></Box>
                    <Box><Text>or</Text></Box>
                    <Box><Text fontWeight={800} fontSize={15}>Signup</Text></Box>
               </Box>
               <Box><Input type="email" placeholder='+91 | Mobile Number' /></Box>
               <Box display={"flex"} marginTop={"15px"}>
                    <Box><Text fontSize={13} >By continuing, i agree to the</Text></Box>
                    <Box><Text fontSize={13} color={"#ff3f6b"}>Terms of Use</Text></Box>
                    <Box><Text fontSize={13}>&</Text></Box>
                    <Box><Text fontSize={13} color={"#ff3f6b"}>Privacy Policy</Text></Box>
               </Box>
               <Box><Button backgroundColor={"#ff3f6b"} color={"white"} marginTop={"15px"} width={"100%"}><Text>Continue</Text></Button></Box>
               <Box display={"flex"} marginTop={"15px"}>
                    <Box><Text fontSize={13}>Have Trouble logging in?</Text></Box>
                    <Box><Text fontSize={13} color={"#ff3f6b"}>Get help</Text></Box>
               </Box>
          </Box>
     )
}
export default SignIn
