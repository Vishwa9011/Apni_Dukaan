import React from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Image, } from '@chakra-ui/react'
import { IProduct } from '../../Constants/Constant'
type Props = {
     searchedData: IProduct[]
}

const SearchTable = ({ searchedData }: Props) => {
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
                         {
                              searchedData.map((item) => (
                                   <Tr key={item.id}>
                                        <Td>
                                             <Image src={item.defaultImage} boxSize='40px' />
                                        </Td>
                                        <Td>{item.brand}</Td>
                                        <Td>{item.category}</Td>
                                        <Td>{item.description.slice(0, 15)}</Td>
                                   </Tr>
                              ))
                         }
                    </Tbody>
               </Table>
          </TableContainer>
     )


}

export default SearchTable