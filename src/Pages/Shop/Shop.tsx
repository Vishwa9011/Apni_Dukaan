import { Box, Checkbox, Flex, Grid, Text } from '@chakra-ui/react'
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import UseToastMsg, { ToastType } from '../../Custom-hooks/UseToastMsg';
import { db } from '../../Firebase/FirebaseConfig';
import { RootState } from '../../Redux/store';
import { BsChevronDown } from 'react-icons/bs'
import * as Types from '../../Redux/ShopRedux/Types.shop'
import { getDataShop } from '../../Redux/ShopRedux/Action.shop';
import ShowProduct from './ShowProduct';
import './Shop.css'

const Shop = () => {

     const param = useParams();
     console.log('param: ', param);
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const { data, loading, error } = useSelector((store: RootState) => store.shop)


     useEffect(() => {
          // dispatch(getDataShop(param.id, Toast))
     }, [param])

     if (loading) return <h1>Loading....</h1>
     if (error) return <h1>Error....</h1>

     return (
          <Box w='98%' m='auto'>
               <Flex gap='5px' fontWeight={'semibold'}>
                    <Link to='/'>
                         <Text _hover={{ color: 'red.500' }}>🏠 Home</Text>
                    </Link>
                    <Text>/</Text>
                    <Link to='/shop/men'>
                         <Text _hover={{ color: 'red.500' }}>Shop</Text>
                    </Link>
                    <Text>/</Text>
                    <Link to='/shop/men'>
                         <Text _hover={{ color: 'red.500' }}>Men</Text>
                    </Link>
               </Flex>
               <Box>
                    <Flex>
                         <Box w='16%' border={'0px'} pl='2'>
                              <Flex borderBottom={'1px'} borderColor={'gray.200'} fontSize={'1.5em'} h='55px' align={'center'}>FILTERS</Flex>
                              <Flex flexDir={'column'} gap='10px'>
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>CATEGORIES</Text>
                                        <Flex flexDir={'column'} color='gray.600' >
                                             <Checkbox colorScheme='red' >T-shirts</Checkbox>
                                             <Checkbox>T-shirts</Checkbox>
                                             <Checkbox>T-shirts</Checkbox>
                                             <Checkbox>T-shirts</Checkbox>
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>BRAND</Text>
                                        <Flex flexDir={'column'} color='gray.600' >
                                             <Checkbox colorScheme='red' >T-shirts</Checkbox>
                                             <Checkbox>T-shirts</Checkbox>
                                             <Checkbox>T-shirts</Checkbox>
                                             <Checkbox>T-shirts</Checkbox>
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>PRICE</Text>
                                        <Flex flexDir={'column'} color='gray.600' >
                                             <Checkbox colorScheme='red' >Rs.149 to Rs.200</Checkbox>
                                             <Checkbox>Rs.149 to Rs.200</Checkbox>
                                             <Checkbox>Rs.149 to Rs.200</Checkbox>
                                             <Checkbox>Rs.149 to Rs.200</Checkbox>
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>DISCOUNT</Text>
                                        <Flex flexDir={'column'} color='gray.600' >
                                             <Checkbox colorScheme='red' >10% and above</Checkbox>
                                             <Checkbox>10% and above</Checkbox>
                                             <Checkbox>10% and above</Checkbox>
                                             <Checkbox>10% and above</Checkbox>
                                        </Flex>
                                   </Box>
                              </Flex>
                         </Box>
                         <Box w='84%' >
                              <Flex borderBottom={'1px'} borderColor={'gray.200'} justify={'flex-end'} h='55px' align={'center'}>
                                   <Box className='sorting-drop-down' pos='relative' border={'1px'} w='270px' borderColor={'gray.400'} p='3' borderRadius={'2px'}>
                                        <Flex gap='10px' justify={'space-between'} align={'center'}>
                                             <Flex gap={'10px'}>
                                                  Sort by:
                                                  <Text as='span' fontWeight={'semibold'}>Recommended</Text>
                                             </Flex>
                                             <Text className='down-arrow'><BsChevronDown /></Text>
                                        </Flex>
                                        <ul className='sorting-list-drop-down'>
                                             <li>Recommended</li>
                                             <li>Better Discount</li>
                                             <li>Price: High to Low</li>
                                             <li>Price: Low to High</li>
                                             <li>Customer Rating</li>
                                        </ul>
                                   </Box>
                              </Flex>
                              <Box borderLeft={'1px'} borderColor='gray.200'>
                                   <ShowProduct />
                              </Box>
                         </Box>
                    </Flex>
               </Box>
          </Box>
     )
}

export default Shop