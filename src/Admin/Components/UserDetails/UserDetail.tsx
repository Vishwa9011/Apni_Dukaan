import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { IUser } from '../../../Constants/Constant'
import './UserDetail.css'

interface Props {
     userProfile: IUser
     ToggleProfile(): void
}

const UserDetail = ({ userProfile, ToggleProfile }: Props) => {

     const { username, email, phoneNumber, gender, isActive, uid, isAdmin, photoURL } = userProfile

     return (
          <Box pos={'fixed'} w='450px' className='admin-detail-container'>
               <Box className='admin-detail'>
                    <Box mb='5'>
                         {photoURL || gender ? < Image src={photoURL || (gender === 'male' ? `/Admin-images/man.png` : gender == 'female' ? '/Admin/woman.png' : "")} alt='' boxSize={'150px'} borderRadius='50%' />
                                   :
                              <Image src='/Admin-images/unknown.png' alt='' filter={'invert(70%)'} boxSize={'150px'} borderRadius='50%' />
                         }
                    </Box>
                    <Flex align={'center'}>
                         <Text>UID : </Text>
                         <Text color={'whiteAlpha.700'} fontSize='.9em'>{uid || "not updated"}</Text>
                    </Flex>
                    <Box>
                         <Text>Name : </Text>
                         <Text>{username || "not updated"}</Text>
                    </Box>
                    <Box>
                         <Text>Email : </Text>
                         <Text>{email || "not updated"}</Text>
                    </Box>
                    <Box>
                         <Text>Gender :</Text>
                         <Text>{gender || "not updated"}</Text>
                    </Box>
                    <Box>
                         <Text>Phone : </Text>
                         <Text>{phoneNumber || "not updated"}</Text>
                    </Box>
                    <Box>
                         <Box display={'flex'} border='1px' borderStyle='dotted' p='2' borderRadius='6px' my='2'>
                              <Text>IsActive: </Text>
                              <Text ml='3' color={isActive ? 'green.500' : "red"}>{isActive ? 'Yes' : "No"}</Text>
                         </Box>
                         <Box display={'flex'} border='1px' borderStyle='dotted' p='2' borderRadius='6px' my='2'>
                              <Text>IsAdmin: </Text>
                              <Text ml='3' color={isAdmin ? 'green.500' : "red"}>{isAdmin ? 'Yes' : 'No'}</Text>
                         </Box>
                    </Box>
               </Box>
               <Box pos='absolute' top='-13px' right={'-13px'}>
                    <Button bg='red.500' minW={'30px'} m='0' className='BtnClickEffect' colorScheme={'red.600'} onClick={ToggleProfile} _hover={{ background: "red.600" }} p='0' fontSize={'1.5em'} borderRadius={"50%"} h={'30px'} >
                         <IoClose />
                    </Button>
               </Box>
          </Box>

     )
}

export default UserDetail