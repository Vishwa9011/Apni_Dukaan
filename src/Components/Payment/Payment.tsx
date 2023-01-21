import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import img from "/Images/apnidukan.png"
import secure from "/Images/secure.png"
import React from 'react'

const Payment = () => {
     return (
          <Box>
               <Flex m={"auto"} align='center' className='cartlogo' boxShadow='base' rounded='md' p={"15px"} alignItems={"center"}>
                    <Flex w={["100%", "100%", "100%", "100%"]} className='cartlogoss' justifyContent={"space-between"}>
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
               <Box border={"1px solid #D3D3D3"}></Box>
               <Box border={"1px solid red"} w="100">
                    <Box display={"flex"}>
                         <Flex flex={"60"} border="1px solid black" flexDir={"column"} >
                              <Box border={"1px solid blue"} m="auto">
                                   <Text>Bank Offer</Text>
                                   <Text>10% instant Discout on Citi Credit and Debit Cards on a min speed of Rs 3,000.TCA</Text>
                                   <Text>Show More</Text>
                              </Box>
                              <Box>
                                   <Text>Choose Payment Method</Text>
                                   <Box border={"1px solid blue"} m="auto">
                                   </Box>

                              </Box>

                         </Flex>
                         <Flex flex={"40"} border="1px solid black">
                              {/* <Box className='main_mou' w="100%" display={"flex"} justifyContent="center"> */}
                              <Box className='main_boxx' w="80%" m="auto" p="5" h={"40%"} mt="8">
                                   <Box display={"flex"} justifyContent="center" flexDir={"column"} gap="5" >
                                        <Text fontWeight={"bold"}>PRICE DETAILS(1 Item)</Text>
                                        <Flex justifyContent={"space-between"}>
                                             <Text>Total MRP</Text>
                                             <Text>2,499</Text>
                                        </Flex>
                                        <Flex justifyContent={"space-between"}>
                                             <Text>Discount on MRP</Text>
                                             <Text>-1,325</Text>
                                        </Flex>
                                        <Flex justifyContent={"space-between"}>
                                             <Text display={"flex"} gap="2">Convenice Fee <Text color={"red"}>Know More</Text></Text>
                                             <Text>Free</Text>
                                        </Flex>
                                        <Box border={"1px solid black"}></Box>
                                        <Flex justifyContent={"space-between"}>
                                             <Text fontWeight={"bold"}>Total Amount</Text>
                                             <Text>1,174</Text>
                                        </Flex>

                                   </Box>

                              </Box>
                              {/* </Box> */}

                         </Flex>

                    </Box>

               </Box>
          </Box>
     )
}

export default Payment