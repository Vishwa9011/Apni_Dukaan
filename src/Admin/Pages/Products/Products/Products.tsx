import { Box, Button, Flex, Grid, Heading, Image, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import ProductCardAdmin from '../../../Components/ProductCardAdmin/ProductCardAdmin';
import AddProduct, { initialStateAddProduct } from './../AddProduct/AddProduct';
import { admin_delete_products } from '../../../../Redux/Admin/Action.admin'
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { IProduct, IProductUpdate } from '../../../../Constants/Constant'
import React, { Dispatch, useEffect, useState } from 'react'
import UseToggle from '../../../../Custom-hooks/UseToggle'
import { db } from '../../../../Firebase/FirebaseConfig'
import { MdOutlineAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './Product.css'

const Products = () => {
   const [isOpen, toggle]: any = UseToggle();
   const dispatch: Dispatch<any> = useDispatch();
   const [category, setCategory] = useState('men');
   const [UpdateProduct, setUpdateProduct] = useState<IProduct>(initialStateAddProduct)
   const [products, setProducts] = useState<IProduct[]>([]);


   const updateProductFunc = (productItem: IProduct) => {
      toggle();
      setUpdateProduct(productItem);
   }

   const deleteProduct = (id: string) => {
      dispatch(admin_delete_products({ id, category }))
   }

   useEffect(() => {
      const productsCollectionRef = collection(db, `shop/${category}/${category}Data`);
      const unsub = onSnapshot(productsCollectionRef, (snapShot) => {
         var data = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
         const copy = JSON.stringify(data);
         const FinalData = JSON.parse(copy)
         setProducts(FinalData)
      }, (err) => {
         console.log('err: ', err);
      })
      // *cleanup function
      return unsub;
   }, [category])

   return (
      <Box pos='relative'>
         <Box >
            {isOpen &&
               <Box pos={'fixed'} className='product-update-container'>
                  <UpdateProductInput product={UpdateProduct} toggle={toggle} category={category} />
               </Box>
            }
         </Box>
         <Flex ml='2' my='5' justify={'space-between'}>
            <Box>
               <Heading>Categories</Heading>
               <Select my='5' w='400px' onChange={(e) => setCategory(e.target.value)}>
                  <option value="men">men</option>
                  <option value="women">women</option>
                  <option value="kids">kids</option>
                  <option value="beauty">beauty</option>
                  <option value="home&living">home&living</option>
               </Select>
            </Box>
            <Flex align={'center'} p='3' >
               <Link to='/admin/add-product'>
                  <Button display='flex' className='btn-clicked' borderRadius={'0'} colorScheme='' alignItems={'center'} fontWeight={'semibold'} fontSize='1.2em' color='white' gap='2' p='4' minH={'50px'} bg='blue.500'>
                     <Text fontWeight={'bold'} fontSize='2rem'><MdOutlineAdd /></Text>
                     ADD PRODUCT
                  </Button>
               </Link>
            </Flex>
         </Flex>

         <Grid gridTemplateColumns={'repeat(5,1fr)'} gap='20px'>
            {
               products.map((product) => (
                  <ProductCardAdmin product={product} type={category} deleteProduct={deleteProduct} updateProductFunc={updateProductFunc} />
               ))
            }
         </Grid>
      </Box>
   )
}

export default Products


interface IUpdateProductInput {
   product: IProduct
   category: string
   toggle(): void
}

const UpdateProductInput = ({ product, toggle, category }: IUpdateProductInput) => {

   const [UpdateProduct, setUpdateProduct] = useState<IProduct>({ ...product })


   // todo saveUpdates
   const SaveUpdates = () => {
      const pathRef = doc(db, `shop/${category}/${category}Data`, UpdateProduct.id)
      updateDoc(pathRef, { ...UpdateProduct })
         .then(() => {
            alert("product updated")
            toggle()
         }).catch((err) => {
            console.log('err: ', err);
         })
   }


   // todo: onchange state updates
   const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((e.target.name).slice(0, 5) !== 'image') {
         if (e.target.name === 'price' || e.target.name === 'mrp' || e.target.name === 'discount' || e.target.name === "rating") {
            setUpdateProduct(prev => ({ ...prev, [e.target.name]: +(e.target.value) }));
         } else setUpdateProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
      } else {
         if (e.target.name === 'image0') {
            setUpdateProduct(prev => ({ ...prev, defaultImage: e.target.value }))
         } else setUpdateProduct(prev => ({ ...prev, images: { ...prev.images, [e.target.name]: e.target.value } }))
      }
   }

   return (
      <>
         <Box className='update-product-input-container'>
            <Input value={UpdateProduct?.brand} name='brand' onChange={HandleChange} placeholder='brand' />
            <Input value={UpdateProduct?.description} name='description' onChange={HandleChange} placeholder='description' />
            <Input value={UpdateProduct?.price || ''} name='price' onChange={HandleChange} placeholder='price' />
            <Input value={UpdateProduct?.mrp || ''} name='mrp' onChange={HandleChange} placeholder='mrp' />
            <Input value={UpdateProduct?.discount || ''} name='discount' onChange={HandleChange} placeholder='discount' />
            <Input value={UpdateProduct?.rating || ''} name='rating' onChange={HandleChange} placeholder='rating' />
            <Input value={UpdateProduct?.category} name='category' onChange={HandleChange} placeholder='category' />
            <Input value={UpdateProduct?.totalReview} name='totalReview' onChange={HandleChange} placeholder='total review' />
            <Input value={UpdateProduct?.defaultImage} name='image0' onChange={HandleChange} placeholder='main image' />
            <Input value={UpdateProduct?.images?.image1} name='image1' onChange={HandleChange} placeholder='image 2' />
            <Input value={UpdateProduct?.images?.image2} name='image2' onChange={HandleChange} placeholder='image 3' />
            <Input value={UpdateProduct?.images?.image3} name='image3' onChange={HandleChange} placeholder='image 4' />
         </Box>
         <Box>
            <Button className='btn-clicked' bg='red.500' borderRadius={0} mx='2' colorScheme={'red.600'} onClick={SaveUpdates}>Update</Button>
            <Button className='btn-clicked' bg='blue.500' borderRadius={0} mx='2' colorScheme={'red.600'} onClick={toggle}>Cancel</Button>
         </Box>
      </>
   )
}