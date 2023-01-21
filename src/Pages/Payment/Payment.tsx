
import { Box, Button, Flex, Heading, Image, Radio, Text } from '@chakra-ui/react'
import React, { useState, useMemo, Dispatch } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import img from "/Images/apnidukan.png"
import secure from "/public/Images/secure.png"
import { CiPercent } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "./payment.css"
import { RootState } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { Checkout, FindTotal } from '../../Redux/CartRedux/Action.cart'
import { IUser } from '../../Constants/Constant'
import UseToastMsg from '../../Custom-hooks/UseToastMsg'



interface IAuth {
     userCredential: IUser
}


const Payment = () => {
     const navigate = useNavigate()
     const location = useLocation();
     const { Toast } = UseToastMsg();
     const [toggle, setToggle] = useState(false)
     const dispatch: Dispatch<any> = useDispatch()
     const { cart } = useSelector((store: RootState) => store.cart);
     const { userCredential }: IAuth = useSelector((store: RootState) => store.auth)
     const { TotalMRP, TotalDiscount, TotalPrice, TotalItems } = useMemo(() => FindTotal(cart), [cart]);
     const couponDiscount = location?.state?.coupon || 0; //todo: getting coupon from location state

     // todo: to checkout from cart after getting the paymment
     const CheckoutCart = () => {
          const limit = cart.length;
          dispatch(Checkout(cart, userCredential, limit, navigate, Toast));
     }

     const getchange = () => {
          setToggle(!toggle)
     }

     return (
          <Box>
               <Flex m={"auto"} align='center' className='cartlogo' boxShadow='base' rounded='md' p={"15px"} alignItems={"center"}>
                    <Flex w={["100%", "100%", "100%", "100%"]} className='cartlogoss' justifyContent={"space-between"}>
                         <Flex flex={1}>
                              <Link to='/'>
                                   <Image w={"80px"} src={img} alt='apnidukan' />
                              </Link>
                         </Flex>
                         <Flex gap='10px' align={'center'} fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">
                              <Link to='/cart'>
                                   BAG
                              </Link>
                              --------
                              <Link to='/cart/address'>
                                   ADDRESS
                              </Link>
                              --------
                              <Link to='/cart/payment'>
                                   <Text as='span' borderBottom={'2px'} style={{ color: "#339933", }}>
                                        PAYMENT
                                   </Text>
                              </Link>
                         </Flex>
                         <Flex flex={1} gap='2' justifyContent={"flex-end"} alignItems="center">
                              <Image w={["10px", "20px", "30px"]} src={secure} alt="secure" />
                              <Text fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">100% SECURE</Text>
                         </Flex>
                    </Flex>
               </Flex>
               <Box className='cart' w={"70%"} m="auto" gap="20px" >
                    <Box w="100%">
                         <Box boxShadow='md' rounded='md' p={"30px"} my="20px">
                              <Flex fontSize={"14px"} color="gray.700" alignItems={"center"} gap="5px" fontWeight="bold"> <CiPercent /> Bank Offers</Flex>
                              <Text fontSize={"12px"} color="gray.600" p="5px">10% Instant Discount on Citi Credit and Debit Cards on a min spend of 3,000. TCA</Text>
                              <Box onClick={getchange} >
                                   {!toggle ? <Flex alignItems={"center"} cursor={"pointer"}> <Heading size="xs" color={"red.500"} p="5px">Show More</Heading><MdOutlineKeyboardArrowDown /> </Flex> : (
                                        <>
                                             <Text fontSize={"12px"} color="gray.600" p="5px">Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1,000. TCA</Text>
                                             <Text fontSize={"12px"} color="gray.600" p="5px">5% Cashback on Paytm Postpaid Transactions on a min spend of Rs 1,500. TCA</Text>
                                             <Text fontSize={"12px"} color="gray.600" p="5px">5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</Text>
                                             <Text fontSize={"12px"} color="gray.600" p="5px">10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</Text>
                                             <Flex alignItems={"center"}>
                                                  <Heading cursor={"pointer"} size="xs" color={"red.500"} p="5px"> Show More</Heading>
                                                  <MdOutlineKeyboardArrowUp />
                                             </Flex>
                                        </>
                                   )}
                              </Box>
                         </Box>

                         <Box>
                              <Flex w='100%' boxShadow={'base'} p='5' fontSize={'1.2em'}>
                                   <Radio colorScheme='red' value='2' >
                                        <Text fontSize={'1.3em'} fontWeight='semibold' pl='2' opacity={'.8'}>CASH ON DELIVERY</Text>
                                   </Radio>
                              </Flex>
                         </Box>
                    </Box>
                    <Box w="100%">
                         <Box boxShadow='md' p='5' my="20px">
                              <Box className='cartprice' >
                                   <Text fontWeight="bold" color={"gray.600"}>PRICE DETAILS ({cart.length} Items)</Text>
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
                                   <hr />
                                   <Box py={"20px"}>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Heading fontSize="16px">Total Amount</Heading>
                                             <Heading fontSize="16px">₹{(couponDiscount ? (TotalPrice - couponDiscount) : TotalPrice).toLocaleString()}</Heading>
                                        </Flex>
                                   </Box>
                              </Box>
                         </Box>
                         <Button w='100%' onClick={CheckoutCart} className='btn-clicked' colorScheme={'red.600'} _hover={{ bg: 'red.600' }} borderRadius={0} bg={"red.500"} py="14px" cursor={"pointer"}>
                              <Heading color={"white"} size="xs" textAlign={"center"} letterSpacing="wide">PAY NOW</Heading>
                         </Button>
                    </Box>
               </Box>
          </Box>

     )
}

export default Payment