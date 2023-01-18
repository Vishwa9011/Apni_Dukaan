import React from 'react';
import { Box, Text, Image, Input, Button, FormControl, FormLabel, Heading } from '@chakra-ui/react'

const SignUp = () => {
     return (

          <Box m='auto' my={"30px"} width={"370px"} >
               <Box my='20px'>
                    <Heading textAlign={'center'} fontSize='1.5em'>Signup</Heading>
               </Box >
               <Box display={'flex'} flexDir='column' gap='10px'>
                    <FormControl id="email">
                         <FormLabel>Email address</FormLabel>
                         <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                         <FormLabel>Password</FormLabel>
                         <Input type="password" />
                    </FormControl>
                    <FormControl id="password">
                         <FormLabel>Confirm Password</FormLabel>
                         <Input type="password" />
                    </FormControl>
               </Box>
               <Box display={"flex"} my={"20px"} fontSize='.75em'>
                    <Text >By continuing, I agree to the</Text>
                    <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Terms of Use</Text>
                    <Text >&</Text>
                    <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Privacy Policy</Text>
               </Box>
               <Box mt='20px'>
                    <Button mb='15px' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"}>Sign up</Button>
                    <Button backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} display='flex' justifyContent={'center'}>
                         <Box bg='white' borderRadius={'50%'} p='1'>
                              <Image src="../../../public/images/google.png" boxSize={'16px'} />
                         </Box>
                         <Text ml='20px'>Continue with Google</Text>
                    </Button>
               </Box>
               <Box display={"flex"} marginTop={"15px"} fontSize='.9em'>
                    <Box>
                         <Text as='span'>Already a user? </Text>
                         <Text as='span' color={"#E53E3E"} _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold'>Login</Text>
                    </Box>
               </Box>
          </Box>

     )
}

export default SignUp