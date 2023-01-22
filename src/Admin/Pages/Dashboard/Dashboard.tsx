import { Box, Flex, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { getDays, get_All_users } from '../../../Redux/Admin/Action.admin'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IUser } from '../../../Constants/Constant'
import { RootState } from '../../../Redux/store'
import Stats from '../../Components/Stats/Stats'

type Props = {}

interface IUsersProp {
     users: IUser[],
     loading: boolean
}

const Dashboard = (props: Props) => {
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const { users, loading }: IUsersProp = useSelector((store: RootState) => store.admin);



     useEffect(() => {
          dispatch(get_All_users(Toast))
     }, [])

     return (
          <Box>
               <Stats />
               {/* {show active users} */}

               <Box>
                    <TableContainer>
                         <Table variant='simple'>
                              <TableCaption>Imperial to metric conversion factors</TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th>S.no</Th>
                                        <Th>UserID</Th>
                                        <Th>Email</Th>
                                        <Th>
                                             <Select cursor={'pointer'}>
                                                  <option defaultValue={'true'} value="all">All</option>
                                                  <option value="active">Active</option>
                                                  <option value="passive">Passive</option>
                                             </Select>
                                        </Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   {users.map((user, i) => (
                                        <Tr key={user.uid} _hover={{ bg: 'gray.200' }} cursor='pointer'>
                                             <Td>{i + 1}</Td>
                                             <Td fontWeight={'semibold'} opacity='.8'>
                                                  <Flex flexDir={'column'}>
                                                       {user.uid}
                                                       <Text fontSize={'.7em'} color='red.500' style={{ fontStyle: 'italic' }}>createdAt: {getDays(user.timeStamp)}</Text>
                                                  </Flex>
                                             </Td>
                                             <Td>{user.email}</Td>
                                             <Td fontWeight={'semibold'} color={user.isActive ? "green.500" : 'red.500'}>{user.isActive ? "ACTIVE" : 'PASSIVE'}</Td>
                                        </Tr>
                                   ))}
                              </Tbody>
                         </Table>
                    </TableContainer>
               </Box>
          </Box>
     )
}

export default Dashboard 