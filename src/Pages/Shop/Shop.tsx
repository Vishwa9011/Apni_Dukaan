import { Box, Checkbox, Flex, Grid, Text } from '@chakra-ui/react'
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import UseToastMsg, { ToastType } from '../../Custom-hooks/UseToastMsg';
import { db } from '../../Firebase/FirebaseConfig';
import { RootState } from '../../Redux/store';
import { BsChevronDown } from 'react-icons/bs'
import * as Types from '../../Redux/ShopRedux/Types.shop'
import { getDataShop } from '../../Redux/ShopRedux/Action.shop';
import './Shop.css'
import PageNotFound from '../Page404/PageNotFound';
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';
import { IProduct } from '../../Constants/Constant';

const menu = ['men', 'women', 'kids', 'home&living', 'beauty']

const Shop = () => {
     const { id } = useParams();
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const { data, loading, error } = useSelector((store: RootState) => store.shop)

     useEffect(() => {
          if (menu.includes(id || "")) {
               dispatch(getDataShop(id, Toast))
          }
     }, [id])

     if (loading) return <h1>Loading....</h1>
     if (error) return <h1>Error....</h1>
     if (!menu.includes(id || '')) return <PageNotFound />
     return (
          <Box w='98%' m='auto'>
               <Flex gap='5px' fontWeight={'semibold'} my='4'>
                    <Link to='/'>
                         <Text _hover={{ color: 'red.500' }}>🏠 Home</Text>
                    </Link>
                    <Text>/</Text>
                    <Link to={`/shop/${id}`}>
                         <Text _hover={{ color: 'red.500' }}>Shop</Text>
                    </Link>
                    <Text>/</Text>
                    <Link to={`/shop/${id}`}>
                         <Text _hover={{ color: 'red.500' }} textTransform='capitalize'>{id}</Text>
                    </Link>
               </Flex>
               <Box>
                    <Flex mt='5' h='80vh'>
                         <Box w='16%' border={'0px'} pl='2'>
                              <Flex borderBottom={'1px'} borderColor={'gray.200'} fontSize={'1.5em'} h='55px' align={'center'}>
                                   <Text fontWeight='semibold'>FILTERS</Text>
                              </Flex>
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
                         <Box w='84%' h='100%' overflow={'scroll'} className='show-Product'>
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
                                   <Grid display={'grid'} p='2' justifyContent='space-between' border={'0px'} w='100%' gridTemplateColumns={'repeat(4,1fr)'} gap='40px' gridTemplateRows={'repeat(3,420px)'}>
                                        {data?.map((product: IProduct) => (
                                             <ProductCard product={product} type={id} key={product.id} />
                                        ))}
                                   </Grid>
                              </Box>
                         </Box>
                    </Flex>
               </Box>
          </Box>
     )
}

export default Shop