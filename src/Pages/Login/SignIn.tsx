import React, { useState, Dispatch } from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from "@chakra-ui/react"
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signInWithGoogleAuth } from '../../Redux/Auth/Action.auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../Redux/store';

interface IProps {
     scrollPage(value: number): void
     toggle(): void
}

const SignIn = ({ scrollPage, toggle }: IProps) => {
     const { Toast, Type } = UseToastMsg()
     const navigate = useNavigate();
     const location = useLocation()
     console.log('location: ', location);
     const dispatch: Dispatch<any> = useDispatch()
     const { authenticated } = useSelector((store: RootState) => store.auth)
     const [email, setEmail] = useState<string>('')
     const [password, setPassword] = useState<string>("")

     // todo: signinfunction
     const Login = () => {
          if (!email || !password) {
               Toast("Please fill all required feilds.", Type.info)
               return
          }
          // todo: call the signfunc
          dispatch(signIn({ email, password, Toast, navigate, location }))
          setEmail('')
          setPassword('')
     }

     // todo:signInWithGoogle
     const signInWithGoogle = () => {
          dispatch(signInWithGoogleAuth(Toast, navigate, location));
     }

     return (
          <Box m='auto' my={"30px"} width={"100%"}>
               <Box my='20px'>
                    <Heading textAlign={'center'} fontSize='1.5em'>Login</Heading>
               </Box >
               <Box display={'flex'} flexDir='column' gap='10px'>
                    <FormControl id="email" isRequired>
                         <FormLabel>Email address</FormLabel>
                         <Input type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password" isRequired>
                         <FormLabel>Password</FormLabel>
                         <Input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
               </Box>
               <Box display={'flex'} justifyContent='flex-end'>
                    {/* <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}> */}

                    <Text onClick={toggle} color={'blue.400'} _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>Forgot password?</Text>
                    {/* </Stack> */}
               </Box>
               <Box display={"flex"} my={"20px"} fontSize='.75em' whiteSpace={'nowrap'}>
                    <Text >By continuing, I agree to the</Text>
                    <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Terms of Use</Text>
                    <Text >&</Text>
                    <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Privacy Policy</Text>
               </Box>
               <Box>
                    <Button className='btn-clicked' mb='15px' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} onClick={Login}>Login</Button>
                    <Button className='btn-clicked' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} display='flex' justifyContent={'center'} onClick={signInWithGoogle}>
                         <Box bg='white' borderRadius={'50%'} p='1'>
                              <Image src="/Images/google.png" boxSize={'16px'} />
                         </Box>
                         <Text ml='20px'>Sign in with Google</Text>
                    </Button>
               </Box>
               <Box fontSize='.9em' display={"flex"} marginTop={"15px"}>
                    <Text as='span'>Have Trouble logging in? </Text>
                    <Text as='span' color={"#E53E3E"} _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' onClick={() => scrollPage(1)}>Sign In</Text>
               </Box>
          </Box>
     )
}
export default SignIn
