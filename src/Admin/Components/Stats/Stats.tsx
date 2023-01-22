import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './Stats.css'
type Props = {}

const Stats = (props: Props) => {
     return (
          <Box>
               <Grid gridTemplateColumns={'repeat(4,1fr)'} gap='30px'>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Active Users</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>1233</Text>
                         </Box>
                         <Image src='/Admin-images/active-user.png' filter={'invert(100)'} boxSize={'40px'} />
                    </Flex>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Users</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>1233</Text>
                         </Box>
                         <Image src='/Admin-images/adminuser.png' filter={'invert(100)'} boxSize={'40px'} />
                    </Flex>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Orders</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>1233</Text>
                         </Box>
                         <Image src='/Admin-images/order2.png' boxSize={'40px'} />
                    </Flex>
                    <Flex className='stats' py='3' px='5' bg={'blackAlpha.800'} justifyContent='space-between' w='100%' color='white' align={'center'} gap='20px' border={'2px'} borderRadius='15px'>
                         <Box>
                              <Text fontWeight={'semibold'}>Revenue</Text>
                              <Text fontWeight={'semibold'} fontSize='1.3em'>₹ 1233</Text>
                         </Box>
                         <Image src='/Admin-images/increased-revenue.png' filter={'invert(100)'} boxSize={'40px'} />
                    </Flex>
               </Grid>
          </Box>
     )
}

export default Stats