import { AddProductToCart, DeleteProductCart, FindTotal, getCartProduct, UpdateQty } from '../../Redux/CartRedux/Action.cart';
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, useDisclosure } from '@chakra-ui/react';
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect, Dispatch, useMemo, useState, useRef } from 'react'
import CartCard from '../../Components/Cards/CartCard/CartCard';
import { IProduct, IUser } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { useDispatch, useSelector } from 'react-redux'
import { BsTag, BsTruck } from "react-icons/bs";
import { RootState } from '../../Redux/store';
import apnidukan from "/Images/apnidukan.png"
import { CiPercent } from "react-icons/ci";
import giftbig from "/Images/giftbig.png";
import secure from '/Images/secure.png';
import { Link } from 'react-router-dom';
import "./cart.css"

interface IUserCred {
     userCredential: IUser
}

const Cart = () => {
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const couponRef = useRef<HTMLInputElement>(null);
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [couponDiscount, setCouponDiscount] = useState<number>()
     const { cart } = useSelector((store: RootState) => store.cart)
     const { userCredential }: IUserCred = useSelector((store: RootState) => store.auth)
     const { TotalMRP, TotalDiscount, TotalPrice, TotalItems } = useMemo(() => FindTotal(cart), [cart]);


     // todo: deleteProduct
     const deleteProducFromCart = (id: string) => {
          dispatch(DeleteProductCart(id, userCredential?.email, Toast))
     }

     useEffect(() => {
          dispatch(getCartProduct(userCredential?.email, Toast))
     }, [userCredential])

     return (
          <>
               <Box m={"auto"} className='cartlogo' boxShadow='base' rounded='md' p={"15px"} justifyContent="space-between" alignItems={"center"}>
                    <Box w="20%">
                         <Link to='/'>
                              <Image w={"30%"} src={apnidukan} alt='apnidukan' />
                         </Link>
                    </Box>
                    <Flex w={["100%", "100%", "100%", "60%"]} className='cartlogoss' justifyContent={"space-between"}>
                         <Flex gap='10px' align={'center'} fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">
                              <Link to='/cart'>
                                   <Text as='span' borderBottom={'2px'} style={{ color: "#339933", }}>
                                        BAG
                                   </Text>
                              </Link>
                              -------- <Link to='/cart/address'>ADDRESS</Link> -------- PAYMENT
                         </Flex>
                         <Flex justifyContent={"center"} alignItems="center">
                              <Image w={["10px", "12%", "15%"]} src={secure} alt="secure" />
                              <Text fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">100% SECURE</Text>
                         </Flex>
                    </Flex>
               </Box>
               <Flex justifyContent={"center"} alignItems="center" boxShadow='base' p='6' rounded='md' h="50px">
                    <Text color={"gray.600"} fontSize={['12px', '12px', '12px', 'sm']} letterSpacing="wide">Sale End In <span style={{ color: "#ff4d4d", fontSize: "20px", fontWeight: "bold" }}>03</span><span style={{ fontSize: "13px" }}>Hrs:</span> <span style={{ color: "#ff4d4d", fontSize: "20px", fontWeight: "bold" }}>40</span><span style={{ fontSize: "13px" }}>Min:</span> <span style={{ color: "#ff4d4d", fontSize: "20px", fontWeight: "bold" }}>24</span><span style={{ fontSize: "13px" }}>Sec</span> </Text>
               </Flex>

               <Box className='cart' w="70%" m="auto">
                    <Box w={"55%"} className="cartitem" boxShadow='base' p='6' rounded='md' pr="20px">
                         <Box boxShadow='base' rounded='md' mt={"20px"}>
                              <Popover>
                                   <PopoverTrigger>
                                        <Box className='cart' justifyContent={"space-between"} alignItems="center" p={"16px"}>
                                             <Heading size={"xs"} color="gray.700" textTransform={'capitalize'}>Check delivery time & Services</Heading>
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

                         <Box boxShadow='base' rounded='md' p={"20px"} my="20px">
                              <Flex fontSize={"14px"} color="gray.700" alignItems={"center"} gap="5px" fontWeight="bold"> <CiPercent /> Available Offers</Flex>
                              <Text fontSize={"12px"} color="gray.600">10% Instant Discount on Citi Credit and Debit Cards on a min spend of 3,000. TCA</Text>
                         </Box>
                         <Box boxShadow='base' rounded='md' p={"10px"} alignItems={"center"} my="3px" display={"flex"}>
                              <BsTruck />  <Text fontSize={"12px"} color="gray.600"> Yay! <span style={{ color: "#333333", fontWeight: "bold" }}>No convenience free</span> on this order</Text>
                         </Box>
                         <Flex className='cartitemscount' alignItems="center" justifyContent={"space-between"} rounded='md' p={"25px"} my="20px">
                              <Heading size={"sm"} color="gray.600">{TotalItems} Items</Heading>
                              <Flex alignItems={"center"} gap="10px" pt={"20px"}>
                                   <Text fontSize={"12px"} fontWeight="bold" color="gray.600">  REMOVE </Text>
                                   <Box>|</Box>
                                   <Text fontSize={"12px"} fontWeight="bold" color="gray.600"> MOVE TO WISHLIST</Text>
                              </Flex>
                         </Flex>
                         <Flex flexDir={'column'} gap='20px'>
                              {cart.map((product: IProduct) => (
                                   <CartCard product={product} key={product.id} />
                              ))}
                         </Flex>
                    </Box>
                    <Box className='cartbill' w="40%" p={"20px"}>
                         <Box>
                              <Heading size={"xs"} fontWeight="bold" color="gray.600">COUPONS</Heading>
                              <Flex p="16px" justifyContent={"space-between"} alignItems="center" boxShadow='base' rounded='md'>
                                   {couponDiscount ?
                                        <Flex w='100%' alignItems="center">
                                             <Box>
                                                  <Text fontSize={'1.2em'} fontWeight="bold" color="gray.800">COUPON</Text>
                                                  <Text fontSize={"xs"} color="green.400">You saved additional ₹{couponDiscount}</Text>
                                             </Box>
                                        </Flex>
                                        :
                                        <Flex gap='20px' align={'center'}>
                                             <Text fontSize={'1.2em'}><BsTag /></Text>
                                             <Text fontWeight='semibold'>Apply Promo</Text>
                                        </Flex>
                                   }
                                   <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                                        <PopoverTrigger>
                                             <Box cursor={'pointer'} color={"red.500"} fontSize="11px" fontWeight={"bold"} border="1px solid red" p='1' px='3'>{couponDiscount ? "EDIT" : "APPLY"}</Box>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                             <PopoverCloseButton />
                                             <Box p="5" boxShadow={'md'}>
                                                  <Text mb='1' fontWeight={'semibold'}>Apply Coupon</Text>
                                                  <Input type="text" placeholder='Enter Counon Code' _placeholder={{ textTransform: 'capitalize' }} ref={couponRef} textTransform='uppercase' />
                                                  <Flex justify={'flex-end'} mt='3'>
                                                       <Button display={'flex'} colorScheme='red.600' _hover={{ bg: 'red.600' }} className='btn-clicked' cursor={'pointer'} alignItems={'center'} justifyContent='center' bg={"red.500"} fontSize={'1rem'} p='0'
                                                            px='4' h='35px' color="white" onClick={() => {
                                                                 if (couponRef.current?.value.toUpperCase() === 'AD200') setCouponDiscount(200);
                                                                 else setCouponDiscount(0)
                                                                 onClose();
                                                            }}>
                                                            Apply
                                                       </Button>
                                                  </Flex>
                                             </Box>
                                        </PopoverContent>
                                   </Popover>
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
                         <Box boxShadow='base' rounded='md'>
                              <Box className='cartprice' my="20px" p={"16px"}>
                                   <Text fontSize={"12px"} fontWeight="bold" color={"gray.600"}>PRICE DETAILS (2 Items)</Text>
                                   <Flex flexDir={"column"} gap="10px" py={"10px"} fontSize='15px' fontWeight={'semibold'} opacity='.9'>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Total MRP</Text>
                                             <Text color={"blackAlpha.900"} >₹{TotalMRP.toLocaleString()}</Text>
                                        </Flex>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Discount on MRP</Text>
                                             <Text color={"green.500"} >₹{TotalDiscount.toLocaleString()}</Text>
                                        </Flex>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Coupon Discount</Text>
                                             <Text color={couponDiscount ? "green.500" : "red.500"} >{couponDiscount ? `₹${couponDiscount.toLocaleString()}` : 'Apply Promo'}</Text>
                                        </Flex>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Convenience Fee</Text>
                                             <Text color={"green.500"} ><Text as='span' color='blackAlpha.800' mr='1' textDecor={'line-through'}>₹99</Text>FREE</Text>
                                        </Flex>
                                   </Flex>
                                   <Box py={"20px"}>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Heading fontSize="16px">Total Amount</Heading>
                                             <Heading fontSize="16px">₹{(couponDiscount ? (TotalPrice - couponDiscount) : TotalPrice).toLocaleString()}</Heading>
                                        </Flex>
                                   </Box>
                              </Box>
                         </Box>
                         <Box bg={"red.500"} py="14px">
                              <Link to='/cart/address'>
                                   <Heading color={"white"} size="xs" textAlign={"center"} letterSpacing="wide">PLACE ORDER</Heading>
                              </Link>
                         </Box>
                    </Box>
               </Box>
          </>

     )
}

export default React.memo(Cart)