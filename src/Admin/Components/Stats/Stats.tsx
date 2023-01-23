import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IOrdersProduct, IUser } from '../../../Constants/Constant'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import { FindTotalRevenue, get_All_orders } from '../../../Redux/Admin/Action.admin'
import { RootState } from '../../../Redux/store'
import './Stats.css'
type Props = {}

const Stats = (props: Props) => {
     const { Toast } = UseToastMsg()
     const dispatch: Dispatch<any> = useDispatch()
     const { users, orders } = useSelector((store: RootState) => store.admin);

     // todo: active users
     const FindTotalActiveUsers = () => {
          const activeuser: IUser[] = users.filter((user: IUser) => user.isActive)
          return activeuser.length
     }

     useEffect(() => {
          dispatch(get_All_orders(Toast))
     }, [])




     return (
          <Box>
               <Grid gridTemplateColumns={'repeat(4,1fr)'} gap='30px' p='4'>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Active Users</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>{FindTotalActiveUsers()}</Text>
                         </Box>
                         <Image src='/Admin-images/active-user.png' filter={'invert(100)'} boxSize={'40px'} />
                    </Flex>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Users</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>{users.length}</Text>
                         </Box>
                         <Image src='/Admin-images/adminuser.png' filter={'invert(100)'} boxSize={'40px'} />
                    </Flex>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Orders</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>{orders.length}</Text>
                         </Box>
                         <Image src='/Admin-images/order2.png' boxSize={'40px'} />
                    </Flex>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Revenue</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>₹ {FindTotalRevenue(orders)}</Text>
                         </Box>
                         <Image src='/Admin-images/increased-revenue.png' filter={'invert(100)'} boxSize={'40px'} />
                    </Flex>
               </Grid>
          </Box>
     )
}

export default Stats