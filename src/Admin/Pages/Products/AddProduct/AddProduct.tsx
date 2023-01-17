import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { IProduct } from '../../../../Constants/Constant';
import { db } from '../../../../Firebase/FirebaseConfig';
import './Add-product.css'

const initialState: IProduct = {
     id: "",
     brand: "",
     description: "",
     price: 0,
     mrp: 0,
     discount: 0,
     rating: '',
     totalReview: "",
     category: "",
     images: {
          image1: '',
          image2: '',
          image3: ''
     },
     defaultImage: "",
}

const AddProduct = () => {
     const [category, setCategory] = useState<string>('men');
     const [product, setProduct] = useState<IProduct>(initialState);

     // todo: setproduct detail onChange in input
     const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if ((e.target.name).slice(0, 5) !== 'image') {
               if (e.target.name === 'price' || e.target.name === 'mrp' || e.target.name === 'discount' || e.target.name === "rating") {
                    setProduct(prev => ({ ...prev, [e.target.name]: +(e.target.value) }));
               } else setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
          } else {
               if (e.target.name === 'image0') {
                    setProduct(prev => ({ ...prev, defaultImage: e.target.value }))
               } else setProduct(prev => ({ ...prev, images: { ...prev.images, [e.target.name]: e.target.value } }))
          }
     }

     // todo: add product into the database in specific path
     const AddProductIntoDb = () => {
          if (!product.brand || !product.category || !product.defaultImage || !product.description || !product.price || !product.images.image1 || !product.mrp) {
               alert("please fill required feilds");
               return;
          }
          // * collection ref of product;
          const productRef = collection(db, `shop/${category}/${category}Data`);
          addDoc(productRef, product)
               .then(() => {
                    setProduct(initialState)
                    alert('product added')
               })
               .catch(err => console.log(err))
     }

     return (
          <Box >
               <Heading textAlign={'center'} my='4'> Add Product in <Text color={'red.500'} as='span' textTransform={'uppercase'}>{category}</Text></Heading>
               <Box display={'flex'} border='1px'>
                    <Box w='20%' className='category-link'>
                         <Text onClick={() => setCategory('men')}>MEN</Text>
                         <Text onClick={() => setCategory('women')}>WOMEN</Text>
                         <Text onClick={() => setCategory('kids')}>KIDS</Text>
                         <Text onClick={() => setCategory('home&living')}>HOME & LIVING</Text>
                         <Text onClick={() => setCategory('beauty')}>BEAUTY</Text>
                    </Box>
                    <Box w='80%' p='2'>
                         <Box className='add-product' w='100%'>
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
                         </Box>
                         <Button bg='blue.500' color={'white'} mr='10' onClick={AddProductIntoDb}>Add Product</Button>
                         <Button bg='blue.500' color={'white'} onClick={() => setProduct(initialState)}>Reset</Button>
                    </Box>
               </Box>

          </Box>
     )
}

export default AddProduct