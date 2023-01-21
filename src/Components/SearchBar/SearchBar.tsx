import { Box, Button, Input, Select, Text } from '@chakra-ui/react'
import React, { useState, useEffect, Dispatch, useRef } from 'react'
import { BsSearch } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../Constants/Constant'
import UseToastMsg from '../../Custom-hooks/UseToastMsg'
import UseToggle from '../../Custom-hooks/UseToggle'
import { searchInDatabase } from '../../Redux/ShopRedux/Action.shop'
import { RootState } from '../../Redux/store'
import './SearchBar.css'
import SearchTable from './SearchTable'

const categoryList = ['Men', 'Women', 'Kids', 'Home', 'Beauty']

interface IProps {
     toggle(): void
}

const SearchBar = ({ toggle }: IProps) => {
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const inputRef = useRef<HTMLInputElement>(null)
     const [category, setCategory] = useState('Men');
     const [searchText, setSearchText] = useState('');
     const [isOpen, ToggleCategory]: any = UseToggle(false);
     const [filteredData, setFilteredData] = useState<IProduct[]>([]);
     const { searchData } = useSelector((store: RootState) => store.shop);

     // todo: FilterData
     const FilterData = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (isOpen) ToggleCategory(); //todo: to close the category list;
          setSearchText((e.target.value).toLowerCase())
          const searchText = (e.target.value).toLowerCase();
          const filteredDataFromSearchData = searchData.filter((item: IProduct) => (
               item.brand.toLowerCase().includes(searchText) ||
               item.description.toLowerCase().includes(searchText) ||
               item.category.toLowerCase().includes(searchText)
          ))
          setFilteredData(filteredDataFromSearchData)
     }

     useEffect(() => {
          dispatch(searchInDatabase(category.toLowerCase(), Toast))
     }, [category])

     useEffect(() => {
          inputRef.current?.focus()
     }, [])

     return (
          <Box pos='fixed' w='100%' height={'100vh'} zIndex={'999'} className='search-main-container'>
               <Box pos={'relative'} w='100%' h='100%' >
                    <Box className='search-input' display='flex' justifyContent={'center'}>
                         <Box w={{ base: "100%", sm: "100%", md: '40em' }} m='auto' className='search-container'>
                              <Box display={'flex'} border='1px' alignItems={'center'} bg='gray.900' justifyContent='space-between' gap='10px' padding={'10px'} borderRadius='10px'>
                                   <Button variant={'unstyled'} className='btn-clicked' color={'red.500'} fontSize='1.5rem' ml='10px' fontWeight={'extrabold'}>
                                        <BsSearch />
                                   </Button>
                                   <Box pos={'relative'} w='120px' height={'100%'} ml='10px'>
                                        <Box display={'flex'} onClick={ToggleCategory} justifyContent='space-between' alignItems='center' cursor={'pointer'}>
                                             <Text as='span' whiteSpace={'nowrap'} color={'white'}>{category}</Text>
                                             <Text as='span' className='caret btn-clicked' ></Text>
                                             <Box border={'1px'} color='white' alignSelf={'stretch'} ml='10px'></Box>
                                        </Box>
                                        <Box onBlur={ToggleCategory} tabIndex={0}>
                                             {isOpen &&
                                                  <ul className='search-cat'>
                                                       {categoryList.map((cat, i) => (
                                                            <li key={i} onClick={() => {
                                                                 setCategory(cat)
                                                                 ToggleCategory();
                                                            }}>{cat}</li>
                                                       ))}
                                                  </ul>
                                             }
                                        </Box>
                                   </Box>
                                   <Box w='100%'>
                                        <Input placeholder='Search for products, brand and more' ref={inputRef} variant='unstyled' onChange={FilterData} value={searchText} />
                                   </Box>
                              </Box>
                              <Box>
                                   {filteredData.length && searchText ?
                                        <Box maxH='50vh' overflowY={'scroll'}>
                                             <SearchTable searchedData={filteredData} category={category.toLowerCase()} />
                                        </Box>
                                        : null
                                   }
                              </Box>
                         </Box>
                         <Box className='search-overlay' bg='transparent' onClick={toggle}></Box>
                    </Box>
                    <Box className='search-overlay' onClick={toggle}></Box>
               </Box>
          </Box >
     )
}

export default React.memo(SearchBar)