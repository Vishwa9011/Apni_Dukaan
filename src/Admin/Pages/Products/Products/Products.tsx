import { Box, Button, Heading, Image, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { collection, onSnapshot } from 'firebase/firestore'
import React, { Dispatch, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IProduct, IProductUpdate } from '../../../../Constants/Constant'
import UseToggle from '../../../../Custom-hooks/UseToggle'
import { db } from '../../../../Firebase/FirebaseConfig'
import { admin_delete_products, admin_products_update } from '../../../../Redux/Admin/Action.admin'
import AddProduct from './../AddProduct/AddProduct';


const Products = () => {
  const [isOpen, toggle] = UseToggle();
  const dispatch: Dispatch<any> = useDispatch();
  const [category, setCategory] = useState('men');
  const [products, setUpdateProductss] = useState<IProduct[]>([]);

  const updateProduct = (id: string) => {
    const data = {

    }
    // admin_products_update()
  }
  const deleteProduct = (id: string) => {
    dispatch(admin_delete_products({ id, category }))
  }


  useEffect(() => {
    const productsCollectionRef = collection(db, `shop/${category}/${category}Data`);
    const unsub = onSnapshot(productsCollectionRef, (snapShot) => {
      const data: IProduct[] = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUpdateProductss(data)
    }, (err) => {
      console.log('err: ', err);
    })
    // *cleanup function
    return unsub;
  }, [category])

  return (
    <Box>
      <Box ml='2' my='5'>
        <Heading>Categories</Heading>
        <Select my='5' w='400px' onChange={(e) => setCategory(e.target.value)}>
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
                <Td>{product.id}</Td>
                <Td>{product.brand}</Td>
                <Td>{product.description}</Td>
                <Td>{product.category}</Td>
                <Td>
                  <Text>price:-{product.price}</Text>
                  <Text>mrp:-{product.mrp}</Text>
                  <Text>discount:-{product.discount}</Text>
                </Td>
                <Td>
                  <Text>rating:-{product.rating}</Text>
                  <Text>review:-{product.totalReview}</Text>
                </Td>
                <Td>
                  <Image src={product.defaultImage} />
                  <Image src={product.images.image1} />
                  <Image src={product.images.image2} />
                  <Image src={product.images.image3} />
                </Td>
                <Td>
                  <Button bg='blue.500'>Update</Button>
                </Td>
                <Td>
                  <Button bg='red.500' onClick={() => deleteProduct(product.id)}>Delete</Button>
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


const UpdateProductInput = ({ product }: IProduct) => {

  const [UpdateProducts, setUpdateProducts] = useState<IProductUpdate | undefined>({})

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target.name).slice(0, 5) !== 'image') {
      if (e.target.name === 'price' || e.target.name === 'mrp' || e.target.name === 'discount' || e.target.name === "rating") {
        setUpdateProducts(prev => ({ ...prev, [e.target.name]: +(e.target.value) }));
      } else setUpdateProducts(prev => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      if (e.target.name === 'image0') {
        setUpdateProducts(prev => ({ ...prev, defaultImage: e.target.value }))
      } else setUpdateProducts(prev => ({ ...prev, images: { ...prev.images, [e.target.name]: e.target.value } }))
    }
  }

  return (
    <>
      <Input value={product?.brand} name='brand' onChange={HandleChange} placeholder='brand' />
      <Input value={product?.description} name='description' onChange={HandleChange} placeholder='description' />
      <Input value={product?.price || ''} name='price' onChange={HandleChange} placeholder='price' />
      <Input value={product?.mrp || ''} name='mrp' onChange={HandleChange} placeholder='mrp' />
      <Input value={product?.discount || ''} name='discount' onChange={HandleChange} placeholder='discount' />
      <Input value={product?.rating || ''} name='rating' onChange={HandleChange} placeholder='rating' />
      <Input value={product?.category} name='category' onChange={HandleChange} placeholder='category' />
      <Input value={product?.totalReview} name='totalReview' onChange={HandleChange} placeholder='total review' />
      <Input value={product?.defaultImage} name='image0' onChange={HandleChange} placeholder='main image' />
      <Input value={product?.images?.image1} name='image1' onChange={HandleChange} placeholder='image 2' />
      <Input value={product?.images?.image2} name='image2' onChange={HandleChange} placeholder='image 3' />
      <Input value={product?.images?.image3} name='image3' onChange={HandleChange} placeholder='image 4' />
    </>
  )
}