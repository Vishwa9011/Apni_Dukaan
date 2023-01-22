import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import './Sidebar.css'


const navigation = [
     { path: '/admin/dashboard', title: 'Dashboard', img: '/Admin-images/dashboard.png' },
     { path: '/admin/users', title: 'Users', img: '/Admin-images/user-profile.png' },
     { path: '/admin/orders', title: 'Orders', img: '/Admin-images/order.png' },
     { path: '/admin/messages', title: 'Messages', img: '/Admin-images/message.png' },
     { path: '/admin/products', title: 'Products', img: '/Admin-images/cubes.png' },
     { path: '/admin/add-product', title: 'Add Product', img: '/Admin-images/add-to-basket.png' },
]


const Sidebar = () => {
     return (
          <Box>
               <Flex flexDir={'column'}>
                    {navigation.map((nav, i) => (
                         <NavLink to={nav.path} key={i} className={({ isActive }) => isActive ? "activelink" : ''}>
                              <Flex px='4' py='4' borderBottom={'1px'} borderColor='gray.200' textTransform={'uppercase'} fontSize={'1.1em'} fontWeight='semibold' color={'blackAlpha.800'} className='links' gap='10px'>
                                   <Image src={nav.img} boxSize='25px' />
                                   {nav.title}
                              </Flex>
                         </NavLink>
                    ))}
               </Flex>
          </Box>
     )
}

export default Sidebar