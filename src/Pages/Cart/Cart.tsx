import { Box, Button, Flex, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { AddProductToCart, DeleteProductCart, getCartProduct, UpdateQty } from '../../Redux/CartRedux/Action.cart';
import { RootState } from '../../Redux/store';
import apnidukan from "./apnidukan.png"
import secure from './secure.png'
import { CiPercent } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import giftbig from "./giftbig.png"
import {
     Popover,
     PopoverTrigger,
     PopoverContent,  
     PopoverCloseButton
   } from '@chakra-ui/react'
import CartCard from '../../Components/Card/CartCard/CartCard';
import "./cart.css"

const Cart = () => {
     const dispatch: Dispatch<any> = useDispatch();
     const { Toast } = UseToastMsg();
     const { cart } = useSelector((store: RootState) => store.cart)
     const { userCredential } = useSelector((store: RootState) => store.auth)
     console.log('cart: ', cart);

     // todo: updateQtyOfProduct
     const UpdateQtyOfProduct = (value: number, product: IProduct) => {
          if (product["qty"]) {
               product = { ...product, qty: product.qty + value }
          } else {
               product = { ...product, qty: 1 }
          }
          dispatch(UpdateQty(product, userCredential?.email, Toast))
     }


     // todo: deleteProduct
     const deleteProducFromCart = (id: string) => {
          dispatch(DeleteProductCart(id, userCredential?.email, Toast))
     }


     useEffect(() => {
          dispatch(getCartProduct(userCredential?.email, Toast))
     }, [userCredential])

     const addProduct = () => {
          dispatch(AddProductToCart(product, userCredential?.email, Toast))
     }


     const product = {
          brand: "HRX by Hrithik Roshan", category: "man", defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYbNiNtFIqeuXqN2__GaHH2Uzj_0TvxiGgw&usqp=CAU", description: "Men Yellow Printed Cotton Pure Cotton T-shirt",
          discount: 55, id: "3pgUUt3pHghKt1WsBsIe", images: { image2: '', image3: '', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8jWdbleNDhr6VhGWxXUcweasX_BfhLdiBA&usqp=CAU' }
          , mrp: 800, qty: 1, price: 314, rating: 4, totalReview: "Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look."
     }


     return (
          <div>
               {/* <Button onClick={() => UpdateQtyOfProduct(-1, product)}>Add Product</Button> */}
               <Box  m={"auto"}  className='cartlogo' boxShadow='base' rounded='md' p={"15px"} justifyContent="space-between" alignItems={"center"}>
                    <Box w="20%">
                         <Image w={"30%"} src={apnidukan} alt='apnidukan' />
                    </Box>
                    <Flex w={["100%", "100%", "100%","60%"]} className='cartlogoss' justifyContent={"space-between"}>
                    <Text  fontSize={['10px', '10px', '10px', 'xs']}  fontWeight="bolder" color={"gray.600"} letterSpacing="widest"> <span style={{color:"#339933",}}>BAG</span> -------- ADDRESS -------- PAYMENT</Text>
                    <Flex  justifyContent={"center"} alignItems="center">
                         <Image w={["10px", "12%","15%"]} src={secure} alt="secure" />
                         <Text fontSize={['10px', '10px', '10px', 'xs']}  fontWeight="bolder" color={"gray.600"} letterSpacing="widest">100% SECURE</Text>
                    </Flex>
                  </Flex>
               </Box>
               <Flex justifyContent={"center"} alignItems="center" boxShadow='base' p='6' rounded='md' h="50px">
                    <Text color={"gray.600"} fontSize={['12px', '12px', '12px', 'sm']} letterSpacing="wide" >Sale End In <span style={{color:"#ff4d4d", fontSize:"20px", fontWeight:"bold"}}>03</span><span style={{fontSize:"13px"}}>Hrs:</span> <span style={{color:"#ff4d4d", fontSize:"20px", fontWeight:"bold"}}>40</span><span style={{fontSize:"13px"}}>Min:</span> <span style={{color:"#ff4d4d", fontSize:"20px", fontWeight:"bold"}}>24</span><span style={{fontSize:"13px"}}>Sec</span> </Text>
               </Flex>


               <Box className='cart'  w="70%" m="auto">
                    <Box w={"100%"} className="cartitem" boxShadow='base' p='6' rounded='md' pr="20px">
                         <Box  boxShadow='base' rounded='md' mt={"20px"}>
                         <Popover>
                            <PopoverTrigger>
                                <Box  className='cart' justifyContent={"space-between"} alignItems="center" p={"16px"} >
                                   <Heading size={"xs"} color="gray.700">Check delivery time & Services</Heading>
                                   <Box p="7px" boxShadow='base' rounded='md' fontSize="11px" fontWeight={"bold"} color={"red.500"}>ENTER PIN CODE</Box>
                                </Box>
                            </PopoverTrigger>
                        <PopoverContent>
                        <PopoverCloseButton />
                        <Box p="10">
                            <Text>Enter delivery details</Text>
                            <br />
                            <Input type="text" placeholder='Enter pincode' />
                        </Box>
                        </PopoverContent>
                         </Popover>
                         </Box>

                         <Box  boxShadow='base' rounded='md'  p={"20px"} my="20px">
                          <Flex fontSize={"14px"} color="gray.700" alignItems={"center"} gap="5px" fontWeight="bold" > <CiPercent/> Available Offers</Flex>
                          <Text fontSize={"12px"} color="gray.600">10% Instant Discount on Citi Credit and Debit Cards on a min spend of 3,000. TCA</Text>
                         </Box>
                         <Box  boxShadow='base' rounded='md' p={"10px"} alignItems={"center"} my="3px" display={"flex"}>
                         <BsTruck/>  <Text fontSize={"12px"} color="gray.600"> Yay! <span style={{color:"#333333", fontWeight:"bold"}}>No convenience free</span> on this order</Text>
                         </Box>
                         <Box className='cartitemscount' alignItems="center" justifyContent={"space-between"}  rounded='md' p={"25px"} my="20px">
                            <Heading size={"sm"} >2/2 ITEMS SELECTED</Heading>
                            <Flex alignItems={"center"} gap="10px" pt={"20px"}>
                            <Text fontSize={"12px"} fontWeight="bold" color="gray.600">  REMOVE </Text>
                            <Box>|</Box>
                            <Text fontSize={"12px"} fontWeight="bold" color="gray.600"> MOVE TO WISHLIST</Text>
                            </Flex>
                         </Box>
                         <Box>
                         <CartCard/>
                         </Box>
                    </Box>
                    <Box className='cartbill' w="100%" p={"20px"}>
                         <Box>
                         <Heading size={"xs"} fontWeight="bold" color="gray.600">COUPONS</Heading>
                         <Flex p="16px" justifyContent={"space-between"} alignItems="center"  boxShadow='base' rounded='md'>
                              <Box >
                              <Heading size={"xs"} fontWeight="bold" color="gray.800">COUPONS</Heading> 
                              <Text fontSize={"xs"} color="green.400">You saved additional Rs.408</Text>
                              </Box>
                              <Box color={"red.500"} fontSize="11px" fontWeight={"bold"} border="1px solid red" py={"3px"} px={"10px"}>EDIT</Box>
                         </Flex>
                         </Box>
                         <Box mt="20px" display={"flex"} alignItems="center" gap={"20px"} bg="#ffe6e6">
                         <Image src={giftbig} alt="gift" w="40px" />
                         <Box p={"10px"}>
                         <Text size={"10px"} fontWeight="bold">Buying for loved one?</Text>
                         <Text fontSize={"12px"} color="gray.600">Gift wrap and personalised message on card, only for Rs.25</Text>
                         <Heading color={"red"} size="xs">ADD GIFT WRAP</Heading>
                         </Box>
                         </Box>
                         <Box boxShadow='base' rounded='md' >
                         <Box className='cartprice' my="20px" p={"16px"}>
                              <Text fontSize={"12px"}  fontWeight="bold" color={"gray.600"}>PRICE DETAILS (2 Items)</Text>
                              <Flex flexDir={"column"} gap="10px" py={"10px"}  >
                                <Flex justifyContent={'space-between'} alignItems="center">
                                   <Text fontSize="13px" >Total MRP</Text>
                                   <Text color={"green.500"} fontSize="13px">Rs.6,694</Text>
                                </Flex>
                                <Flex  justifyContent={'space-between'} alignItems="center">
                                   <Text fontSize="14px" >Discount on MRP</Text>
                                   <Text color={"green.500"} fontSize="14px">Rs.4,272</Text>
                                </Flex>
                                <Flex  justifyContent={'space-between'} alignItems="center">
                                   <Text fontSize="14px" >Coupon Discount</Text>
                                   <Text color={"green.500"} fontSize="14px">Rs.4,272</Text>
                                </Flex>
                                <Flex  justifyContent={'space-between'} alignItems="center">
                                   <Text fontSize="14px" >Convenience Fee</Text>
                                   <Text color={"green.500"}  fontSize="14px">FREE</Text>
                                </Flex>
                              </Flex>
                              <Box py={"20px"}>
                              <Flex  justifyContent={'space-between'} alignItems="center">
                                   <Heading fontSize="16px" >Total Amount</Heading>
                                   <Heading  fontSize="16px">Rs.2,014</Heading>
                                </Flex>
                              </Box>
                         </Box>
                         </Box>
                              <Box bg={"red.500"} py="14px">
                                   <Heading color={"white"} size="xs" textAlign={"center"} letterSpacing="wide" >PLACE ORDER</Heading>
                              </Box>
                    </Box>
                    
               </Box>
          </div>
     )
}

export default React.memo(Cart)