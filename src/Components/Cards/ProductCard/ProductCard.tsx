import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { BsHandbagFill } from 'react-icons/bs'
import React, { Dispatch, useState } from 'react'
import './ProductCard.css'
import { IProduct, IUser } from '../../../Constants/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { AddProductToCart } from '../../../Redux/CartRedux/Action.cart'
import { RootState } from '../../../Redux/store'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import { Link, useNavigate } from 'react-router-dom'
import { addProductToWishlist } from '../../../Redux/WishlistRedux/Action.wishlist'
// import { type } from './../../../Redux/store';

interface IUserCred {
     userCredential: IUser;
}
interface IProps {
     product: IProduct
     type: string | undefined
}

const ProductCard = ({ product, type }: IProps) => {

     const { Toast } = UseToastMsg()
     const navigate = useNavigate()
     const dispatch: Dispatch<any> = useDispatch()
     const { userCredential }: IUserCred = useSelector((store: RootState) => store.auth)
     const { id, brand, description, defaultImage, images, rating, price, mrp, discount, totalReview, category } = product;

     // todo: add the product into cart
     const AddToCartProduct = () => {
          if (!userCredential?.email) return navigate('/login')
          dispatch(AddProductToCart(product, userCredential?.email, Toast))
     }

   
     // todo: add the product into cart
     const AddToWishlistProduct = () => {
          if (!userCredential?.email) return navigate('/login')
          dispatch(addProductToWishlist(product, userCredential?.email, Toast))
     }

     return (
          <Flex border={'0px'} flexDir='column' boxShadow={'lg'} w='100%' h='100%'>
               <Box w='100%' h='fit-content' border={'0px'} pos='relative' className='card-image-container'>
                    <Box display={'flex'} alignItems='center' w='100%' h='320px' border={'0px'} className='card-images'>
                         <Flex className='card-image-front' w='100%' h='100%' minW='100%'>
                              <Tooltip label={description} aria-label='A tooltip'>
                                   <Link to={`/product-detail/${type}-${product.id}`}>
                                        <Image src={defaultImage} h='fit-content' />
                                   </Link>
                              </Tooltip>
                         </Flex>
                         <Flex className='card-image-back' w='100%' h='100%' minW='100%'>
                              <Tooltip label={description} aria-label='A tooltip'>
                                   <Link to={`/product-detail/${type}-${product.id}`}>
                                        <Image src={images.image1} h='fit-content' />
                                   </Link>
                              </Tooltip>
                         </Flex>
                    </Box>
                    <Tooltip label={`Rating: ${rating} & Review: ${totalReview}`} aria-label='A tooltip'>
                         <Flex px='2' py='1' pos={'absolute'} bottom='7px' left={'7px'} align='center' gap='4px' fontWeight={'bold'} fontSize={'.78em'} bg='whiteAlpha.700' borderRadius={'2px'}>
                              <Text>{rating}</Text>
                              <Text color={'cyan.500'}><AiFillStar /></Text>
                              <Text>|</Text>
                              <Text>{totalReview}</Text>
                         </Flex>
                    </Tooltip>
                    <Tooltip label="Wishlist" aria-label='A tooltip'>
                         <Flex pos='absolute' bg='whiteAlpha.600' top='7px' right='7px' justify={'center'} align='center' fontSize={'2em'} w='35px' h='35px' _hover={{ color: 'red.700' }} cursor='pointer' borderRadius={'50%'} border='px' p='1' onClick={AddToWishlistProduct}>
                              <AiOutlineHeart />
                         </Flex>
                    </Tooltip>
                    <Tooltip label="Cart" aria-label='A tooltip'>
                         <Flex pos='absolute' bg='whiteAlpha.600' bottom='7px' right='7px' _hover={{ color: 'red.700' }} cursor='pointer' justify={'center'} align='center' fontSize={'1.4em'} borderRadius={'50%'} border='px' p='1.5' onClick={AddToCartProduct}>
                              <BsHandbagFill />
                         </Flex>
                    </Tooltip>
               </Box>
               <Link to={`/product-detail/${type}-${product.id}`}>
                    <Flex flexDir={'column'} p='4' gap={'5px'}>
                         <Tooltip label={brand} aria-label='A tooltip'>
                              <Text fontWeight={'bold'} fontSize='.9em' textTransform='uppercase'>{brand}</Text>
                         </Tooltip>
                         <Tooltip label={description} aria-label='A tooltip'>
                              <Text fontSize={'.9em'}>{description.slice(0, 20)}...</Text>
                         </Tooltip>
                         <Flex fontSize={'.8em'} gap='5px'>
                              <Tooltip label={`₹${price}`} aria-label='A tooltip'>
                                   <Text fontWeight={'bold'}>Rs.{price}</Text>
                              </Tooltip>
                              <Tooltip label={`₹${mrp}`} aria-label='A tooltip'>
                                   <Text color={'gray.500'} textDecoration={'line-through'}>Rs.{mrp}</Text>
                              </Tooltip>
                              {discount && <Tooltip label={discount + "% oFF"} aria-label='A tooltip'>
                                   <Text color={'#E53E3E'}>({discount} % OFF)</Text>
                              </Tooltip>}
                         </Flex>
                    </Flex>
               </Link>
          </Flex >
     )
}

export default ProductCard