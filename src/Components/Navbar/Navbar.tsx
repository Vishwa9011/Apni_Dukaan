import { Box, Flex, Heading, Hide, Image, Show, Text, } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import "./navbar.css"
const Navbar = () => {
  return (
    <Hide below='lg'>
      <Box  boxShadow='sm' >
        <Flex w={"95%"} align="center" m='auto' h={"75px"} justify="space-around" color={"gray.600"}>
          <Image w="120px" src='https://images.indianexpress.com/2021/01/myntra.png'  alt='' />
            <Flex gap={"20px"}>
              <Heading size={"xs"}>MEN</Heading>
              <Heading size={"xs"}>WOMEN</Heading>
              <Heading size={"xs"}>KIDS</Heading>
              <Heading size={"xs"}>HOME & LIVING</Heading>
              <Heading size={"xs"}>BEAUTY</Heading>
              <Heading size={"xs"}>STUDIO</Heading>
              <i className="fa fa-font-awesome" aria-hidden="true"></i>
            </Flex>
            <Box  id="navsearchbox">
              <Box id='navsearch'> 
               <BsSearch/>
                <input placeholder='Search for products, brand and more' />
               </Box>
            </Box>
            <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlUser/> 
                  <Text fontSize={"12px"} fontWeight="bold">Profile</Text>
                </Flex>
            </Flex>
            <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlHeart/> 
                  <Text fontSize={"12px"} fontWeight="bold">Wishlist</Text>
                </Flex>
            </Flex>
            <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlHandbag/> 
                  <Text fontSize={"12px"} fontWeight="bold">Bag</Text>
                </Flex>
            </Flex>
        </Flex>
      </Box>
    </Hide>
  )
}

export default Navbar