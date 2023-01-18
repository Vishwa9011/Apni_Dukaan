import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from "@chakra-ui/react"

const SignIn = () => {
     return (
          <Box m='auto' my={"30px"} width={"370px"}>
               <Box my='20px'>
                    <Heading textAlign={'center'} fontSize='1.5em'>Login</Heading>
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
               </Box>
               <Stack spacing={10}>
                    <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                         <Checkbox>Remember me</Checkbox>
                         <Text color={'blue.400'} _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>Forgot password?</Text>
                    </Stack>
               </Stack>
               <Box display={"flex"} my={"20px"}>
                    <Text fontSize={13}>By continuing, I agree to the</Text>
                    <Text fontSize={13} _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Terms of Use</Text>
                    <Text fontSize={13}>&</Text>
                    <Text fontSize={13} _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Privacy Policy</Text>
               </Box>
               <Box>
                    <Button mb='15px' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"}>Login</Button>
                    <Button backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} display='flex' justifyContent={'center'}>
                         <Box bg='white' borderRadius={'50%'} p='1'>
                              <Image src="../../../public/images/google.png" boxSize={'16px'} />
                         </Box>
                         <Text ml='20px'>Sign in with Google</Text>
                    </Button>
               </Box>
               <Box>
                    <Text as='span'>Have Trouble logging in? </Text>
                    <Text as='span' color={"#E53E3E"} _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold'>Sign In</Text>
               </Box>
          </Box>
     )
}
export default SignIn
