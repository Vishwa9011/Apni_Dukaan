import { Box, Button, Flex, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr } from '@chakra-ui/react'
import React, { Dispatch, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IOrdersProduct } from '../../../Constants/Constant'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import UseToggle from '../../../Custom-hooks/UseToggle'
import { admin_update_Delivery_status, getDays, get_All_orders } from '../../../Redux/Admin/Action.admin'
import { RootState } from '../../../Redux/store'
import Stats from '../../Components/Stats/Stats'

type Props = {}

interface IUsersProp {
     orders: IOrdersProduct[],
     loading: boolean
}

const Orders = (props: Props) => {

     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const { orders, loading }: IUsersProp = useSelector((store: RootState) => store.admin);
     console.log('orders: ', orders);


     const ToggleDeliveryStatus = (status: string, orderID: string) => {
          if (status === 'PENDING') status = 'DELIVERED'
          else status = 'PENDING'
          dispatch(admin_update_Delivery_status(orderID, status, Toast))
     }

     useEffect(() => {
          dispatch(get_All_orders(Toast))
     }, [])

     return (
          <Box>
               <Stats />

               <Box>
                    <TableContainer>
                         <Table variant='simple'>
                              <TableCaption>Imperial to metric conversion factors</TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th>S.no</Th>
                                        <Th>Order Id</Th>
                                        <Th>Email</Th>
                                        <Th>
                                             <Select cursor={'pointer'}>
                                                  <option defaultValue={'true'} value="all">All</option>
                                                  <option value="active">Active</option>
                                                  <option value="passive">Passive</option>
                                             </Select>
                                        </Th>
                                        {/* <Th>Delivery Status</Th> */}
                                        <Th>Toggle Status</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   {orders.map((order, i) => (
                                        <Tr key={i} _hover={{ bg: 'gray.200' }} cursor='pointer'>
                                             <Td>{i + 1}</Td>
                                             <Td fontWeight={'semibold'} opacity='.8'>
                                                  <Tooltip hasArrow label={`UID: ${order.id}`}>
                                                       <Flex flexDir={'column'}>
                                                            <Text>{order.orderID}</Text>
                                                            <Flex justify={'space-between'}>
                                                                 <Text fontSize={'.7em'} color='green.500' style={{ fontStyle: 'italic' }}>Ordered: {getDays(order.orderedAt)}</Text>
                                                                 <Text fontSize={'.7em'} color='red.500' style={{ fontStyle: 'italic' }}>price: ₹{order.price}</Text>
                                                            </Flex>
                                                       </Flex>
                                                  </Tooltip>
                                             </Td>
                                             <Td>
                                                  <Tooltip hasArrow label={`UID: ${order.id}`}>
                                                       {order.ownerInfo.email}
                                                  </Tooltip>
                                             </Td>
                                             <Tooltip hasArrow label={order.deliveryStatus == 'PENDING' ? 'Order on the way' : 'Order Placed'}>
                                                  <Td fontWeight={'semibold'} color={order.deliveryStatus == 'DELIVERED' ? "green.500" : 'red.500'}>
                                                       {order.deliveryStatus}
                                                  </Td>
                                             </Tooltip>
                                             <Td>
                                                  <Tooltip hasArrow label={"Toggle Delivery Status"}>
                                                       <Button className='btn-clicked' border={'2px'} borderRadius='0' fontWeight={'semibold'} color={'red.500'} onClick={() => ToggleDeliveryStatus(order.deliveryStatus, order.orderID,)}>TOGGLE STATUS</Button>
                                                  </Tooltip>
                                             </Td>
                                        </Tr>
                                   ))}
                              </Tbody>
                         </Table>
                    </TableContainer>
               </Box>

          </Box >
     )
}

export default Orders