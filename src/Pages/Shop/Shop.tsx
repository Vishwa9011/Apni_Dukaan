import { FilterValuesFromData, FilterValuesFromDataWithPriceAndDiscount, getDataShop, SortDataFromList } from '../../Redux/ShopRedux/Action.shop';
import { Box, Checkbox, Flex, Grid, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';
import React, { useEffect, Dispatch, useState, useMemo } from 'react'
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';
import Navbar from '../../Components/Navbar/Navbar';
import PageNotFound from '../Page404/PageNotFound';
import { IProduct } from '../../Constants/Constant';
import { Link, useParams } from 'react-router-dom'
import { RootState } from '../../Redux/store';
import { BsChevronDown } from 'react-icons/bs'
import './Shop.css'

const menu = ['men', 'women', 'kids', 'home&living', 'beauty']
const priceRange = [{ min: 149, max: 399 }, { min: 400, max: 849 }, { min: 850, max: 1399 }]

const sortingTypeObj: any = {
     htl: 'Price: High to Low',
     lth: 'Price: Low to High',
     rating: 'Customer Rating',
     discount: 'Better Discount',
     rec: 'Recommended'
}

const Shop = () => {

     const { id } = useParams();
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const [FilterValuesP, setFilterValuesP] = useState({})
     const [FilterValues, setFilterValues] = useState<Object>({})
     const [sortingType, setSortingType] = useState<string>('rec')
     console.log('sortingType: ', sortingType);
     const [FilterValueD, setFilterValueD] = useState<string>('')
     const { data, loading, FilteredBrand, FilteredCategory, FilteredData } = useSelector((store: RootState) => store.shop)
     const { loading: cartLoading } = useSelector((store: RootState) => store.cart)
     const { loading: wishlistLoding } = useSelector((store: RootState) => store.wishlist)


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

     // todo: sort the data
     useEffect(() => {
          dispatch(SortDataFromList(sortingType, FilteredData.length ? FilteredData : [...data]))
     }, [sortingType])

     useEffect(() => {
          setFilterValues({})
          setFilterValuesP({})
          if (menu.includes(id || "")) dispatch(getDataShop(id, Toast))
     }, [id])

     useEffect(() => {
          if (FilterValues) {
               const values: string[] = [];
               for (let [key, value] of Object.entries(FilterValues)) {
                    if (value) values.push(key);
               }
               dispatch(FilterValuesFromData(values, data))
          }
     }, [FilterValues])

     useEffect(() => {
          const priceValues: string[] = [];
          for (let [key, value] of Object.entries(FilterValuesP)) {
               if (value) priceValues.push(key);
          }
          dispatch(FilterValuesFromDataWithPriceAndDiscount(FilterValueD, priceValues, data))
     }, [FilterValueD, FilterValuesP])

     // todo: to redirect 404 for unreachable url
     if (!menu.includes(id || '')) return <PageNotFound />
     return (
          <>
               {/* loading */}
               {(loading || cartLoading || wishlistLoding) && <Loader />}

               {/* {Navabar} */}
               <Navbar />

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
                              <Box w='17%' border={'0px'} pl='2' overflow={'scroll'} className='show-Product'>
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
                                             <Flex flexDir={'column'} color='gray.600' >
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
                              <Box w='83%' h='100%' overflow={'scroll'} className='show-Product'>
                                   <Flex borderBottom={'1px'} borderColor={'gray.200'} justify={'flex-end'} h='55px' align={'center'}>
                                        <Box className='sorting-drop-down' pos='relative' border={'1px'} w='270px' borderColor={'gray.400'} p='3' borderRadius={'2px'}>
                                             <Flex gap='10px' justify={'space-between'} align={'center'}>
                                                  <Flex gap={'10px'}>
                                                       Sort by:
                                                       <Text as='span' fontWeight={'semibold'}>{sortingTypeObj[sortingType]}</Text>
                                                  </Flex>
                                                  <Text className='down-arrow'><BsChevronDown /></Text>
                                             </Flex>
                                             <ul className='sorting-list-drop-down'>
                                                  <li onClick={() => setSortingType('rec')}>Recommended</li>
                                                  <li onClick={() => setSortingType('discount')}>Better Discount</li>
                                                  <li onClick={() => setSortingType('htl')}>Price: High to Low</li>
                                                  <li onClick={() => setSortingType('lth')}>Price: Low to High</li>
                                                  <li onClick={() => setSortingType('rating')}>Customer Rating</li>
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

               {/* {Footer} */}
               <Footer />
          </>
     )
}

export default Shop