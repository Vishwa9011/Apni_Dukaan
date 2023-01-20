
import { Box, Checkbox, Flex, Grid, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, Dispatch, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import UseToastMsg, { ToastType } from '../../Custom-hooks/UseToastMsg';
import { db } from '../../Firebase/FirebaseConfig';
import { RootState } from '../../Redux/store';
import { BsChevronDown } from 'react-icons/bs'
import * as Types from '../../Redux/ShopRedux/Types.shop'
import { FilterValuesFromData, FilterValuesFromDataWithPriceAndDiscount, getDataShop } from '../../Redux/ShopRedux/Action.shop';
import './Shop.css'
import PageNotFound from '../Page404/PageNotFound';
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';
import { IProduct } from '../../Constants/Constant';

const menu = ['men', 'women', 'kids', 'home&living', 'beauty']
const priceRange = [{ min: 149, max: 399 }, { min: 400, max: 849 }, { min: 850, max: 1399 }]
const Shop = () => {
     const { id } = useParams();
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const [FilterValues, setFilterValues] = useState<Object>()
     const [FilterValuesP, setFilterValuesP] = useState({})
     const [FilterValueD, setFilterValueD] = useState<string>('')

     const { data, loading, error, FilteredBrand, FilteredCategory, FilteredData } = useSelector((store: RootState) => store.shop)
     console.log('data: ', data);

     // todo: fitler the data onchange of categories and brands
     const FilterChangeBrandAndCat = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFilterValues(prev => ({ ...prev, [e.target.value]: e.target.checked }))
     }

     // todo: filter the data onChange of price and dicount
     const FilterChangePriceAndDiscount = (e: React.ChangeEvent<HTMLInputElement>): void => {
          if (e.target.value.split('-')[0] === 'p') {
               setFilterValuesP(prev => ({ ...prev, [e.target.value]: e.target.checked }))
          } else {
               setFilterValueD(e.target.value)
          }
     }

     useEffect(() => {
          if (menu.includes(id || "")) {
               dispatch(getDataShop(id, Toast))
          }
     }, [id])


     useEffect(() => {
          if (FilterValues) {
               const values: string[] = [];
               for (let [key, value] of Object.entries(FilterValues)) {
                    if (value) {
                         values.push(key);
                    }
               }
               dispatch(FilterValuesFromData(values, data))
          }
     }, [FilterValues])

     useEffect(() => {
          const priceValues: string[] = [];
          for (let [key, value] of Object.entries(FilterValuesP)) {
               if (value) {
                    priceValues.push(key);
               }
          }
          dispatch(FilterValuesFromDataWithPriceAndDiscount(FilterValueD, priceValues, data))
     }, [FilterValueD, FilterValuesP])


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
                    <Flex mt='5' h='100vh'>
                         <Box w='16%' border={'0px'} pl='2' overflow={'scroll'} className='show-Product'>
                              <Flex borderBottom={'1px'} borderColor={'gray.200'} fontSize={'1.5em'} h='55px' align={'center'}>
                                   <Text fontWeight='semibold'>FILTERS</Text>
                              </Flex>
                              <Flex flexDir={'column'} gap='10px'>
                                   <Box>
                                        <Text my='2' fontWeight={'semibold'}>CATEGORIES</Text>
                                        <Flex flexDir={'column'} color='gray.600'>
                                             {FilteredCategory.map((FilterCategory: string, i: number) => (
                                                  <Checkbox key={i} colorScheme='red' onChange={FilterChangeBrandAndCat} value={FilterCategory} textTransform={'capitalize'}>{FilterCategory}</Checkbox>
                                             ))}
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>BRAND</Text>
                                        <Flex flexDir={'column'} color='gray.600'>
                                             {FilteredBrand.map((Filterbrand: string, i: number) => (
                                                  <Checkbox key={i} colorScheme='red' onChange={FilterChangeBrandAndCat} value={Filterbrand} textTransform={'uppercase'}>{Filterbrand}</Checkbox>
                                             ))}
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>PRICE</Text>
                                        <Flex flexDir={'column'} color='gray.600'>
                                             {priceRange.map((price, i: number) => (
                                                  <Checkbox key={i} colorScheme='red' onChange={FilterChangePriceAndDiscount} value={`p-${price.min}-${price.max}`} >{`Rs.${price.min} to Rs.${price.max}`} </Checkbox>
                                             ))}
                                             <Checkbox colorScheme='red' onChange={FilterChangePriceAndDiscount} value={`p-1400-Infinity`} >{`More than Rs.1400`} </Checkbox>
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Box >
                                        <Text my='2' fontWeight={'semibold'}>DISCOUNT</Text>
                                        <Flex flexDir={'column'} color='gray.600' >
                                             {/* <Checkbox colorScheme='red' >10% and below</Checkbox>
                                             <Checkbox colorScheme='red' >10% and above</Checkbox> */}
                                             <RadioGroup >
                                                  <Stack direction='column' spacing={1}>
                                                       <Radio onChange={FilterChangePriceAndDiscount} value='d-10-below' colorScheme='red'>10% and below</Radio>
                                                       <Radio onChange={FilterChangePriceAndDiscount} value='d-10-above' colorScheme='red'>10% and above</Radio>
                                                       <Radio onChange={FilterChangePriceAndDiscount} value='d-20-above' colorScheme='red'>20% and above</Radio>
                                                       <Radio onChange={FilterChangePriceAndDiscount} value='d-30-above' colorScheme='red'>30% and above</Radio>
                                                       <Radio onChange={FilterChangePriceAndDiscount} value='d-40-above' colorScheme='red'>40% and above</Radio>
                                                  </Stack>
                                             </RadioGroup>
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
                                   <Grid display={'grid'} p='2' justifyContent='space-between' border={'0px'} w='100%' gridTemplateColumns={'repeat(5,1fr)'} gap='20px' gridTemplateRows={'repeat(3,400px)'}>
                                        {FilteredData.length ?
                                             FilteredData?.map((product: IProduct) => (
                                                  <ProductCard product={product} type={id} key={product.id} />
                                             ))
                                             :
                                             data?.map((product: IProduct) => (
                                                  <ProductCard product={product} type={id} key={product.id} />
                                             ))
                                        }
                                   </Grid>
                              </Box>
                         </Box>
                    </Flex>
               </Box>
          </Box>
     )
}

export default Shop