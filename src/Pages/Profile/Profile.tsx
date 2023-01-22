import { Avatar, Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import profile from '/Public/Images/profile.png'
import "./profile.css"
import { FaUpload } from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri'
const Profile = () => {
    return (
        <Box w={"100%"} bg={"#f5f5f0"}>
            <Flex justifyContent={"center"} alignItems="center" p="30px">
                <Heading color={"red.500"}>Profile</Heading>
              
            </Flex>
            <Box className='profile' w="80%" margin={"auto"} p="30px" gap={"20px"} justifyContent={"center"} boxShadow='base' rounded='md' >
                <Box className='pic' w="40%" p={"20px"} boxShadow='base' rounded='md' _hover={{ boxShadow: "md", transition: "all 600ms" }} transition="all 600ms">
                    <Flex flexDir={"column"} justifyContent="center">
                        <Heading p={"30px"} textAlign={"center"} size={"lg"}>Name</Heading>
                        <Flex justifyContent="center">
                            <Image w="40%" h="50%" rounded={"50%"} alt='Dan Abrahmov' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU' />
                        </Flex>
                        <Flex justify={"space-around"}>
                            <Flex w="50px" h={"20px"} bg={"green.500"} p="18px" rounded={"2xl"} alignItems="center">
                                <FormControl id="image" title='Change icon'>
                                    <FormLabel title='Change icon' className='upload-label BtnClickEffect' _hover={{ color: "white" }}><FaUpload /></FormLabel>
                                    <Input type='file' name='image' visibility='hidden' pos='absolute' zIndex={-1} />
                                </FormControl>
                            </Flex>
                                <Flex align={"center"} justify="center" bg={"red.500"} w="50px" rounded={"2xl"} _hover={{ color: "white" }}>
                                    <RiDeleteBin5Fill/>
                                </Flex>
                        </Flex>
                        <Box py={"20px"}>
                            <Text fontSize={"md"} py={"5px"} _hover={{ color: "red", fontSize: "md", transition: "all 600ms" }} transition="all 600ms" >Name :</Text>
                            <Text fontSize={"md"} py={"5px"} _hover={{ color: "red", fontSize: "md", transition: "all 600ms" }} transition="all 600ms">Email :</Text>
                            <Text fontSize={"md"} py={"5px"} _hover={{ color: "red", fontSize: "md", transition: "all 600ms" }} transition="all 600ms">Number :</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box w="70%" p={"60px"} boxShadow='base' rounded='md' _hover={{ boxShadow: "md", transition: "all 600ms" }} transition="all 600ms">
                    <Box>
                        <Flex pt={"10px"} gap="30px" justifyContent={"space-between"} >
                            <FormControl id="userid" isRequired _hover={{ color: "red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <FormLabel >User ID</FormLabel>
                                <Input type={"url"} placeholder='' />
                            </FormControl>
                            <FormControl id="name" isRequired _hover={{ color: "red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <FormLabel>Full Name</FormLabel>
                                <Input placeholder='' />
                            </FormControl>
                        </Flex>
                        <Flex pt={"10px"} gap="30px" justifyContent={"space-between"}>
                            <FormControl id="name" isRequired _hover={{ color: "red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <FormLabel>User Name</FormLabel>
                                <Input type={"email"} placeholder='' />
                            </FormControl>
                            <FormControl id="name" isRequired _hover={{ color: "red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <FormLabel>Email Address</FormLabel>
                                <Input type={"email"} placeholder='' />
                            </FormControl>
                        </Flex>
                        <Flex pt={"20px"} gap="30px"  >
                            <Flex cursor="pointer" align={"center"} justify="space-around" boxShadow='base' rounded='md' p={"10px"} w="15%" border={"2px solid gray"} _hover={{ border: "2px solid red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <Image w="40%" src="https://bigbasketdatabase-65303.web.app/man1.png" />
                                <Text fontSize={"md"}>Male</Text>
                            </Flex>
                            <Flex cursor="pointer" align={"center"} justify="space-around" boxShadow='base' rounded='md' p="10px" w="15%" border={"2px solid gray"} _hover={{ border: "2px solid red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <Image w="40%" src="https://bigbasketdatabase-65303.web.app/woman.png" />
                                <Text fontSize={"md"}>Female</Text>
                            </Flex>
                        </Flex>
                        <Flex pt={"10px"} gap="30px" justifyContent={"space-between"} >
                            <FormControl id="password" isRequired _hover={{ color: "red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <FormLabel>Password</FormLabel>
                                <Input type={"email"} placeholder='' />
                            </FormControl>
                            <FormControl id="number" isRequired _hover={{ color: "red", fontSize: "lg", transition: "all 600ms" }} transition="all 600ms">
                                <FormLabel>Phone Number</FormLabel>
                                <Input type={"number"} placeholder='' />
                            </FormControl>
                        </Flex>
                        <Box pt={"30px"}>
                            <Button w="100%" colorScheme='red' letterSpacing={"wide"} fontWeight="semibold" fontSize="lg">Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile