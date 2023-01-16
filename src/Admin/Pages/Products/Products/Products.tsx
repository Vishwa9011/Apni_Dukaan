import { Box, Button, Heading, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { IProduct } from '../../../../Constants/Constant'
import { db } from '../../../../Firebase/FirebaseConfig'


const Products = () => {
  const [category, setCategory] = useState('men');
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const productsCollectionRef = collection(db, `shop/${category}/${category}Data`);
    const unsub = onSnapshot(productsCollectionRef, (snapShot) => {
      const data = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log('data: ', data);
      setProducts(prev => data)
    }, (err) => {
      console.log('err: ', err);
    })
    // *cleanup function
    return unsub;
  }, [])

  return (
    <Box>
      <Box ml='2' my='5'>
        <Heading>Categories</Heading>
        <Select my='5' w='400px'>
          <option value="men">men</option>
          <option value="women">women</option>
          <option value="kids">kids</option>
          <option value="beauty">beauty</option>
          <option value="home&living">home&living</option>
        </Select>
      </Box>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>S.no</Th>
              <Th>ID</Th>
              <Th>Brand</Th>
              <Th>Description</Th>
              <Th>Category</Th>
              <Th>Price,mrp & discount</Th>
              <Th>rating & review</Th>
              <Th>Images</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((product, i) => (
              <Tr key={product.id}>
                <Td>{i + 1}</Td>
                <Td>{product.brand}</Td>
                <Td>Brand</Td>
                <Td>Description</Td>
                <Td>Category</Td>
                <Td>Price,mrp & discount</Td>
                <Td>rating & review</Td>
                <Td>Images</Td>
                <Td>
                  <Button bg='blue.500'>Update</Button>
                </Td>
                <Td>
                  <Button bg='red.500'>Delete</Button>
                </Td>
              </Tr>
            ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Products