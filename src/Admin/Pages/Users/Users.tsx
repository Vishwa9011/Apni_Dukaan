import { Box, Button, Flex, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { IUser } from '../../../Constants/Constant'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import UseToggle from '../../../Custom-hooks/UseToggle'
import { getDays, get_All_users } from '../../../Redux/Admin/Action.admin'
import { RootState } from '../../../Redux/store'
import Stats from '../../Components/Stats/Stats'
import UserDetail from '../../Components/UserDetails/UserDetail'

type Props = {}

interface IUsersProp {
     users: IUser[],
     loading: boolean
}
const Users = (props: Props) => {
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const [userProfile, setUserProfile] = useState<any>()
     const [showProfile, ToggleProfile]: any = UseToggle(false)
     const { users, loading }: IUsersProp = useSelector((store: RootState) => store.admin);

     useEffect(() => {
          dispatch(get_All_users(Toast))
     }, [])

     return (
          <Box>
               {/* userDetail */}
               {showProfile && <UserDetail ToggleProfile={ToggleProfile} userProfile={userProfile} />}

               {/* Stats */}
               <Stats />


               <Box>
                    <TableContainer>
                         <Table variant='simple'>
                              <TableCaption>Imperial to metric conversion factors</TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th>S.no</Th>
                                        <Th>Username</Th>
                                        <Th>Email</Th>
                                        <Th>
                                             <Select cursor={'pointer'}>
                                                  <option defaultValue={'true'} value="all">All</option>
                                                  <option value="active">Active</option>
                                                  <option value="passive">Passive</option>
                                             </Select>
                                        </Th>
                                        <Th>Details</Th>
                                        <Th>Delete</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   {users.map((user, i) => (
                                        <Tr key={user.uid} _hover={{ bg: 'gray.200' }} cursor='pointer'>
                                             <Td>{i + 1}</Td>
                                             <Td fontWeight={'semibold'} opacity='.8'>
                                                  <Tooltip hasArrow label={`UID: ${user.uid}`}>
                                                       <Flex flexDir={'column'}>
                                                            {user.username ? user.username : user.uid}
                                                            <Text fontSize={'.7em'} color='cyan.500' style={{ fontStyle: 'italic' }}>createdAt: {getDays(user.timeStamp)}</Text>
                                                       </Flex>
                                                  </Tooltip>
                                             </Td>
                                             <Td>
                                                  <Tooltip hasArrow label={`UID: ${user.uid}`}>
                                                       {user.email}
                                                  </Tooltip>
                                             </Td>
                                             <Td fontWeight={'semibold'} color={user.isActive ? "green.500" : 'red.500'}>{user.isActive ? "ACTIVE" : 'PASSIVE'}</Td>
                                             <Td>
                                                  <Tooltip hasArrow label={"View User Details"}>
                                                       <Button border={'2px'} borderRadius='0' fontWeight={'semibold'} color={'blue.500'} onClick={() => { ToggleProfile(); setUserProfile(user) }}>VIEW USER</Button>
                                                  </Tooltip>
                                             </Td>
                                             <Td>
                                                  <Tooltip hasArrow label={"Delete User"}>
                                                       <Button border={'2px'} borderRadius='0' fontWeight={'semibold'} color={'red.500'}>DELETE USER</Button>
                                                  </Tooltip>
                                             </Td>
                                        </Tr>
                                   ))}
                              </Tbody>
                         </Table>
                    </TableContainer>
               </Box>
          </Box>

     )
}

export default Users