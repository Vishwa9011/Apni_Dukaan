import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import "./cartcard.css"
import {
     Popover,
     PopoverTrigger,
     PopoverContent,  
     PopoverCloseButton
   } from '@chakra-ui/react'
   import { MdArrowDropDown } from "react-icons/md";
   import { BiLeftArrowCircle } from "react-icons/bi";
import React from 'react'

type Props = {}

const CartCard = (props: Props) => {
     return (
          <Box className='cartcard'  boxShadow='base' rounded='md' p="15px">
               <Box w={"40%"} m="auto">
                    <Image w={"100%"} src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6832788/2018/9/3/45ee8ee8-b288-4c5e-a535-ac3a34d6b9381535966265533-WROGN-Men-Green-Printed-Hooded-Sweatshirt-3441535966263619-1.jpg" />
               </Box>
               <Box className='cartcartdetail' w="100%" px={"12px"} >
                    <Flex  justifyContent={"space-between"}>
                         <Heading fontSize={['11px', '12px', '10px', 'xs']}>WROGN</Heading>
                         <Box>
                             <Button  fontWeight={"bold"} bg={"red.500"}  fontSize={['8px', '10px', '10px', 'xs']} h={[ "16px","20px","25px","30px"]} w={["30px","40px", "60px"]} color="white">DELETE</Button> 
                         </Box>
                    </Flex>
                    <Text fontSize={"13px"} color="gray.700">Men Yellow Printed Cotton Pure Cotton T-shirt. </Text>
                    <Text fontSize={"13px"} color="gray.500">Sold by: Flashstar Commerce</Text>
                   
                    <Flex>
                    <Box bg={"gray.100"} mt={"10px"}>
                         <Popover>
                            <PopoverTrigger>
                                <Flex justifyContent={"space-between"} alignItems="center" p={"5px"} >
                                   <Heading size={"xs"} color="gray.700">Qty : 1</Heading>
                                   <MdArrowDropDown/>
                                </Flex>
                            </PopoverTrigger>
                        <PopoverContent>
                        <PopoverCloseButton />
                        <Flex gap={"20px"} p="10" flexDir={"column"}>
                         <Flex gap={"10px"}>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>1</Box>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>2</Box>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>3</Box>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>4</Box>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>5</Box>
                         </Flex>
                          <Flex gap={"10px"}>
                           <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>6</Box>
                            <Box border="1px solid black"cursor={"pointer"}  display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>7</Box>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>8</Box>
                            <Box border="1px solid black"  cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>9</Box>
                            <Box border="1px solid black" cursor={"pointer"} display={"flex"} _hover={{color:"red", border:"2px solid red", fontWeight:"bold"}} w="40px" h="40px" borderRadius={"50%"} alignItems="center" justifyContent={"center"}>10</Box>
                           </Flex>
                            
                        </Flex>
                        </PopoverContent>
                         </Popover>
                      </Box>
                   </Flex>
                   <Text mt={"10px"} fontSize={"xs"} fontWeight="bold">Rs.1,048 <del style={{color:"gray"}}>Rs.4,195</del> <span style={{color:"red"}}>75% OFF</span> </Text>
                  <Flex alignItems={"center"} pt="10px">
                    <Text><BiLeftArrowCircle/></Text>
                    <Text fontSize={"xs"} fontWeight="bold">15 days return available</Text>
                  </Flex>
               </Box>
          </Box>
     )
}

export default CartCard