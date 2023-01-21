import React, { useRef, useState, Dispatch } from 'react';
import { Box, Text, Image, Input, Button, FormControl, FormLabel, Heading } from '@chakra-ui/react'
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { signInWithGoogleAuth, signUp } from '../../Redux/Auth/Action.auth';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
     scrollPage(value: number): void
}

const SignUp = ({ scrollPage }: IProps) => {
     const { Toast, Type } = UseToastMsg()
     const location = useLocation();
     const navigate = useNavigate()
     const dispatch: Dispatch<any> = useDispatch()
     const [email, setEmail] = useState<string>('')
     const [password, setPassword] = useState<string>("")
     const [confirmPassword, setConfirmPassword] = useState('')

     // Todo: Signup function
     const Signup = () => {
          if (!email || !password || !confirmPassword) {
               Toast("Please fill all required feilds.", Type.info)
               return
          }

          if (password !== confirmPassword) {
               Toast("Password doesn't match.", Type.info)
               return
          }
          dispatch(signUp({ email, password, Toast, navigate, location }))
          setEmail('')
          setPassword('')
          setConfirmPassword('')
     }

     // todo:signInWithGoogle
     const signInWithGoogle = () => {
          dispatch(signInWithGoogleAuth(Toast, navigate, location));
     }


     return (
          <Box m='auto' width={"100%"} >
               <Box my='10px'>
                    <Heading textAlign={'center'} fontSize='1.5em'>Signup</Heading>
               </Box >
               <Box display={'flex'} flexDir='column' gap='10px'>
                    <FormControl id="Signupemail" isRequired>
                         <FormLabel>Email address</FormLabel>
                         <Input type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="Signuppassword" isRequired>
                         <FormLabel>Password</FormLabel>
                         <Input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl id="SignupConfirmpassword" isRequired>
                         <FormLabel>Confirm Password</FormLabel>
                         <Input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </FormControl>
               </Box>
               <Box display={"flex"} my={"10px"} fontSize='.75em' whiteSpace={'nowrap'}>
                    <Text >By continuing, I agree to the</Text>
                    <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Terms of Use</Text>
                    <Text >&</Text>
                    <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' mx='3px' color={"#E53E3E"}>Privacy Policy</Text>
               </Box>
               <Box mt='20px'>
                    <Button className='btn-clicked' mb='15px' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} onClick={Signup}>Sign up</Button>
                    <Button className='btn-clicked' bg={"#E53E3E"} colorScheme={"red.600"} color={"white"} width={"100%"} display='flex' justifyContent={'center'} onClick={signInWithGoogle}>
                         <Box bg='white' borderRadius={'50%'} p='1'>
                              <Image src="/Images/google.png" boxSize={'16px'} />
                         </Box>
                         <Text ml='20px'>Continue with Google</Text>
                    </Button>
               </Box>
               <Box fontSize='.9em' display={"flex"} marginTop={"15px"}>
                         <Text as='span'>Already a user? </Text>
                    <Text as='span' color={"#E53E3E"} _hover={{ textDecoration: 'underline', cursor: 'pointer' }} fontWeight='bold' onClick={() => scrollPage(-1)}>Login</Text>
               </Box>
          </Box>

     )
}

export default SignUp