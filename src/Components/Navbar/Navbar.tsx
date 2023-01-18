import { Box, Flex, Heading, Hide, Image, Show, Text, } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import apnidukan from "./apnidukan.png"
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <Hide below='lg'>
        <Box boxShadow='sm' >
          <Flex position={'relative'} w={"95%"} align="center" m='auto' h={"75px"} justify="space-between" color={"gray.600"}>
            <Image w="120px" src={apnidukan} alt='' />
            <Flex w="35%" justifyContent={"space-between"}>
              <Box className='nav-link'>
                <Heading size={"xs"} id="navmen">MEN</Heading>
                <Box className='mega-menu'>
                  <Box className='mega-menu-container'></Box>
                  sdfasdf
                </Box>
              </Box>


              <Box>
                <Heading size={"xs"} id="navwomen">WOMEN</Heading>
                <Box></Box>
              </Box>

              <Box>
                <Heading size={"xs"} id="navkid">KIDS</Heading>
              </Box>

              <Box>
                <Heading size={"xs"} id="navhome">HOME & LIVING</Heading>
              </Box>

              <Box>
                <Heading size={"xs"} id="navbeauty">BEAUTY</Heading>
              </Box>

              <Box>
                <Heading size={"xs"} id="navstudio">STUDIO</Heading>
              </Box>
              <i className="fa fa-font-awesome" aria-hidden="true"></i>
            </Flex>
            <Box id="navsearchbox">
              <Box id='navsearch'>
                <BsSearch />
                <input placeholder='Search for products, brand and more' />
              </Box>
            </Box>
            <Flex color={"gray.600"}>
              <Flex flexDir={"column"} justify="center" align={"center"}>
                <SlUser />
                <Text fontSize={"12px"} fontWeight="bold">Profile</Text>
              </Flex>
            </Flex>
            <Flex color={"gray.600"}>
              <Flex flexDir={"column"} justify="center" align={"center"}>
                <SlHeart />
                <Text fontSize={"12px"} fontWeight="bold">Wishlist</Text>
              </Flex>
            </Flex>
            <Flex color={"gray.600"}>
              <Flex flexDir={"column"} justify="center" align={"center"}>
                <SlHandbag />
                <Text fontSize={"12px"} fontWeight="bold">Bag</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Hide>
      <Show below='lg'>
        <Box boxShadow='sm' >
          <Flex w={"95%"} align="center" m='auto' h={"75px"} justify="space-around" color={"gray.600"}>

            <Image w="120px" src={apnidukan} alt='apnidukan' />
            <Flex gap={"30px"}>
              <Box  >
                <BsSearch />
              </Box>
              <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlUser />
                  <Text fontSize={"12px"} fontWeight="bold">Profile</Text>
                </Flex>
              </Flex>
              <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlHeart />
                  <Text fontSize={"12px"} fontWeight="bold">Wishlist</Text>
                </Flex>
              </Flex>
              <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlHandbag />
                  <Text fontSize={"12px"} fontWeight="bold">Bag</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Show>
    </div>
  )
}

export default Navbar