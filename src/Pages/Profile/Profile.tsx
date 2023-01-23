import { Avatar, Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Text, WrapItem } from '@chakra-ui/react'
import React, { useState, Dispatch } from 'react'
import profile from '/Public/Images/profile.png'
import "./profile.css"
import { FaUpload } from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { MdDelete, MdDone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { IUser } from '../../Constants/Constant'
import { RemoveProfilePhoto, updateProfileInfo, updateProfilePhoto } from '../../Redux/Auth/Action.auth'
import UseToastMsg from '../../Custom-hooks/UseToastMsg'


interface IUserCred {
    userCredential: IUser
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Profile = () => {
    const { userCredential }: IUserCred = useSelector((store: RootState) => store.auth);
    const { Toast } = UseToastMsg()
    const dispatch: Dispatch<any> = useDispatch();
    const [gender, setGender] = useState(userCredential.gender ? userCredential.gender : '');
    const [username, setUserName] = useState(userCredential.username ? userCredential.username : '');
    const [phoneNumber, setphoneNumber] = useState(userCredential.phoneNumber ? userCredential.phoneNumber : '');
    const date = new Date(userCredential.timeStamp);

    // todo: upload the image
    const ImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.files: ', e.target.files);
        if (e.target.files == null) return;
        dispatch(updateProfilePhoto((e.target?.files[0]), userCredential, Toast))
    }

    // todo: remove the image
    const RemoveImage = () => {
        dispatch(RemoveProfilePhoto(userCredential.uid, Toast))
    }

    // todo: update teh user profile info
    const updateInfo = () => {
        const info = {
            gender, username, phoneNumber: +phoneNumber
        }
        dispatch(updateProfileInfo(info, userCredential, Toast));
    }

    return (
        <Box w={"100%"} bg={"#f5f5f0"}>
            <Flex justifyContent={"center"} alignItems="center" p="30px">
                <Heading color={"red.500"}>Profile</Heading>
            </Flex>
            <Flex className='profile' w="80%" margin={"auto"} p="30px" gap={"20px"} justifyContent={"center"} boxShadow='base' rounded='md' >
                <Box className='pic' w="30%" p={"20px"} boxShadow='base' rounded='md' border={'1px'}>
                    <Flex flexDir={"column"} justifyContent="center">
                        <Heading p={"30px"} className='name' textAlign={"center"} size={"lg"} textTransform={'capitalize'}>{username ? username : userCredential.username ? userCredential.username : 'Enter your name'}</Heading>
                        <Flex justifyContent="center" pos='relative'>
                            <Image w="40%" h="50%" rounded={"50%"} alt={userCredential.username || "user logo"} src={userCredential.photoURL ? userCredential.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU'} />
                            <Button onClick={RemoveImage} pos='absolute' className='btn-clicked' cursor={'pointer'} left='58%' h='30px' minW='30px' alignItems={"center"} justifyContent="center" top='0' borderRadius={'50%'} bg='gray.200' p='1'>
                                <MdDelete />
                            </Button>
                        </Flex>
                        <Flex justify={"space-around"} >
                            <Flex alignItems="center" justify={'center'} my='2'>
                                <Button variant={'unstyled'} className='btn-clicked'>
                                    <FormControl id="image" display='flex' alignItems="center" justifyContent={'center'} pos='relative'>
                                        <FormLabel m='0' w='100%' px='4' py='2' bg='red.500' color='white' cursor='pointer'>UPLOAD IMAGE</FormLabel>
                                        <Input onChange={ImageChange} type='file' name='image' visibility='hidden' pos='absolute' zIndex={-1} />
                                    </FormControl>
                                </Button>
                            </Flex>
                        </Flex>
                        <Box py={"20px"}>
                            <Flex align={'center'}>
                                <Text w='20%' fontSize={"md"} py={"5px"}>Name :</Text>
                                <Text w='80%' fontWeight={'semibold'} textTransform={'capitalize'} fontSize={"md"} py={"5px"}>{username}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text w='20%' fontSize={"md"} py={"5px"}>Email :</Text>
                                <Text w='80%' fontWeight={'semibold'} fontSize={"md"} py={"5px"}>{userCredential.email}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text w='20%' fontSize={"md"} py={"5px"}>Phone :</Text>
                                <Text w='80%' fontWeight={'semibold'} fontSize={"md"} py={"5px"}>{phoneNumber ? `+91    ${phoneNumber}` : ''}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text w='20%' fontSize={"md"} py={"5px"} >Joined :</Text>
                                <Flex w='80%' fontWeight={'semibold'} fontSize={"md"} py={"5px"}>
                                    {`${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`}
                                    <Text></Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

                <Box w="70%" p={"60px"} boxShadow='base' rounded='md' border={'1px'}>
                    <Box>
                        <Flex pt={"10px"} gap="30px" justifyContent={"space-between"} >
                            <FormControl id="userid" isRequired>
                                <FormLabel >User ID</FormLabel>
                                <Input value={userCredential.uid} disabled />
                            </FormControl>
                            <FormControl id="name" isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input placeholder='Enter your username' value={username} onChange={(e) => setUserName(e.target.value)} />
                            </FormControl>
                        </Flex>
                        <Flex pt={"10px"} gap="30px" justifyContent={"space-between"}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Email Address</FormLabel>
                                <Input value={userCredential.email} disabled />
                            </FormControl>
                        </Flex>
                        <Flex pt={"20px"} gap="30px"  >
                            <Button className='btn-clicked' colorScheme={'white'} borderRadius='0' onClick={() => setGender('male')} border='2px' borderColor={gender == 'male' ? 'red.500' : 'blackAlpha.800'} cursor="pointer" gap='7px' color='black' alignItems={"center"} justifyContent="center" w='50%' fontWeight={'semibold'} py='2'>
                                <Text fontSize={'1.5em'} color={gender == 'male' ? 'red.500' : 'blackAlpha.800'}><MdDone /></Text>
                                <Text fontSize={"md"}>Male</Text>
                            </Button>
                            <Button className='btn-clicked' colorScheme={'white'} borderRadius='0' onClick={() => setGender('female')} border='2px' borderColor={gender == 'female' ? 'red.500' : 'blackAlpha.800'} cursor="pointer" gap='7px' color='black' alignItems={"center"} justifyContent="center" w='50%' fontWeight={'semibold'} py='2'>
                                <Text fontSize={'1.5em'} color={gender == 'female' ? 'red.500' : 'blackAlpha.800'}><MdDone /></Text>
                                <Text fontSize={"md"}>Female</Text>
                            </Button>
                        </Flex>
                        <Flex pt={"10px"} gap="30px" justifyContent={"space-between"}>
                            <FormControl id="number" isRequired>
                                <FormLabel>Phone Number</FormLabel>
                                <Flex h='40px' w='100%' color='blackAlpha.800' align={'center'} border='1px' p='2' fontWeight={'semibold'} borderRadius={'5px'} borderColor='gray.200'>
                                    <Text borderRight={'2px'} pr='2' color='blackAlpha.700'>+91</Text>
                                    <Input letterSpacing={'2px'} onChange={(e) => setphoneNumber(e.target.value)} value={phoneNumber} placeholder='123-456-7890' fontWeight={'semibold'} pl='2' maxLength={10} type='number' variant={'unstyled'} h='100%' w='100%' />
                                </Flex>
                            </FormControl>
                        </Flex>
                        <Flex pt={"30px"}>
                            <Button colorScheme='red.500' bg='red.500' borderRadius={0} className='btn-clicked' letterSpacing={"wide"} fontWeight="semibold" fontSize="lg" onClick={updateInfo}>Save Info</Button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Profile