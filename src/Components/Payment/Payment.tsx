
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from "/Images/apnidukan.png"
import secure from "/public/Images/secure.png"
import { CiPercent } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "./payment.css"
const Payment = () => {
     const [toggle, setToggle] = useState(false)

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
                         <Box boxShadow='base' rounded='md' p={"30px"} my="20px">
                              <Flex fontSize={"14px"} color="gray.700" alignItems={"center"} gap="5px" fontWeight="bold"> <CiPercent /> Bank Offers</Flex>
                              <Text fontSize={"12px"} color="gray.600" p="5px">10% Instant Discount on Citi Credit and Debit Cards on a min spend of 3,000. TCA</Text>
                              <Box onClick={getchange} >
                                   {
                                        !toggle ? <Flex alignItems={"center"} cursor={"pointer"}> <Heading size="xs" color={"red.500"} p="5px">Show More</Heading><MdOutlineKeyboardArrowDown /> </Flex> : (
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
                                        )
                                   }
                              </Box>
                         </Box>
                    </Box>
                    <Box w="100%">
                         <Box boxShadow='base' rounded='md'  >
                              <Box className='cartprice' my="20px" p={"16px"}>
                                   <Text fontSize={"12px"} fontWeight="bold" color={"gray.600"}>PRICE DETAILS (2 Items)</Text>
                                   <Flex flexDir={"column"} gap="10px" py={"10px"} fontSize='15px' fontWeight={'semibold'} opacity='.9'>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Total MRP</Text>
                                             <Text color={"blackAlpha.900"} >₹ 000</Text>
                                        </Flex>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Discount on MRP</Text>
                                             <Text color={"green.500"} >₹000</Text>
                                        </Flex>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Coupon Discount</Text>
                                             <Text  >free</Text>
                                        </Flex>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Text >Convenience Fee</Text>
                                             <Text color={"green.500"} ><Text as='span' color='blackAlpha.800' mr='1' textDecor={'line-through'}>₹99</Text>FREE</Text>
                                        </Flex>
                                   </Flex>
                                   <Box py={"20px"}>
                                        <Flex justifyContent={'space-between'} alignItems="center">
                                             <Heading fontSize="16px">Total Amount</Heading>
                                             <Heading fontSize="16px">₹ 000</Heading>
                                        </Flex>
                                   </Box>
                              </Box>
                         </Box>
                         <Box bg={"red.500"} py="14px" cursor={"pointer"}>
                              <Heading color={"white"} size="xs" textAlign={"center"} letterSpacing="wide">PAY NOW</Heading>
                         </Box>
                    </Box>
               </Box>
          </Box>

     )
}

export default Payment