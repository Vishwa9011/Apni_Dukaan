import React from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Image, } from '@chakra-ui/react'
import { IProduct } from '../../Constants/Constant'
import { Link } from 'react-router-dom'
type Props = {
     searchedData: IProduct[]
     category: string
}

const SearchTable = ({ searchedData, category }: Props) => {
     return (
          <TableContainer bg='whiteAlpha.700'>
               <Table variant='simple'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                         <Tr>
                              <Th>Images</Th>
                              <Th>Brand</Th>
                              <Th>Category</Th>
                              <Th>Description</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         {searchedData.map((item) => (
                              <Tr key={item.id}>
                                   <Td>
                                        <Link to={`/product-detail/${category}-${item.id}`} key={item.id} className='search-list'>
                                             <Image src={item.defaultImage} boxSize='40px' />
                                        </Link>
                                   </Td>
                                   <Td>
                                        <Link to={`/product-detail/${category}-${item.id}`} key={item.id} className='search-list'>
                                             {item.brand}
                                        </Link>
                                   </Td>
                                   <Td>
                                        <Link to={`/product-detail/${category}-${item.id}`} key={item.id} className='search-list'>
                                             {item.category}
                                        </Link>
                                   </Td>
                                   <Td>
                                        <Link to={`/product-detail/${category}-${item.id}`} key={item.id} className='search-list'>
                                             {item.description.slice(0, 15)}
                                        </Link>
                                   </Td>
                              </Tr>
                         ))}
                    </Tbody>
               </Table>
          </TableContainer>
     )


}

export default SearchTable