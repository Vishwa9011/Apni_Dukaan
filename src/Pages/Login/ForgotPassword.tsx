import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue, } from '@chakra-ui/react'
import React, { useState, Dispatch } from 'react'

import { useDispatch } from 'react-redux'
import UseToastMsg from '../../Custom-hooks/UseToastMsg'
import { ForgotPasswordSendEmail } from '../../Redux/Auth/Action.auth'

type Props = {
     toggle(): void
}

const ForgotPassword = ({ toggle }: Props) => {
     const { Toast, Type } = UseToastMsg()
     const dispatch: Dispatch<any> = useDispatch()
     const [email, setEmail] = useState<string>('')

     // todo: resetPassword
     const ResetPasswordWIthEmail = () => {
          if (!email) {
               Toast('Please Enter the Email', Type.info);
               return
          }
          dispatch(ForgotPasswordSendEmail(email, Toast))
          setEmail('')
     }

     return (
          <Box w='100%' h='100%'>
               <Heading textAlign={'center'} fontSize='1.7rem' mt='40px'>
                    Forgot your password?
               </Heading>
               <Flex w='100%' h='100%' align={'center'} justify={'center'} >
                    <Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} p={3} my={0}>
                         <FormControl id="email" isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input type="email" value={email} placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} onChange={(e) => setEmail(e.target.value)} />
                         </FormControl>
                         <Text fontSize={'.8em'} color={useColorModeValue('gray.800', 'gray.400')}>
                              You&apos;ll get an email with a  <Text as='span' color={"#E53E3E"}>reset link</Text>
                         </Text>
                         <Stack spacing={6}>
                              <Button className='btn-clicked' bg={"#E53E3E"} color={'white'} _hover={{ bg: "red.600" }} onClick={ResetPasswordWIthEmail}>
                                   Reset Password
                              </Button>
                         </Stack>
                         <Text fontSize={'.8em'} as='span'>If you want to go back, Click on
                              <Text fontWeight={'semibold'} ml='1' color={'blue.400'} as='span' cursor='pointer' _hover={{ textDecoration: "underline" }} onClick={toggle}>
                                   back
                              </Text>
                         </Text>
                    </Stack>
               </Flex>
          </Box>
     )
}

export default ForgotPassword