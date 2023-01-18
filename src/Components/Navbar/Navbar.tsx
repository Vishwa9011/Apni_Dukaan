import { Box, Flex, Heading, Hide, Image, Show, Text, } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router-dom';
import apnidukan from "./apnidukan.png"
import {Dropbeauty, Drophome, Dropkid, Dropmen, Dropwomen} from './dropdwon/Dropdown';
import Profile from './dropdwon/Profile';
import Studio from './dropdwon/Studio';
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <Hide below='lg'>
        <Box boxShadow='sm' >
          <Flex position={'relative'}  w={"95%"} align="center" m='auto' h={"75px"} justify="space-between" color={"gray.600"}>
            <Link to="/shop/men">
            <Image w="90px" src={apnidukan} alt='' />
             </Link>
            <Flex w="35%" justifyContent={"space-between"}>
              <Box className='nav-link' >
                <Link to="#" id="navmen">MEN</Link>
                <Box className='mega-menu'>
                  <Box className='mega-menu-container'> <Dropmen/> </Box>
                </Box>
              </Box>

              <Box className='nav-link'>
                <Link to="/shop/women" id="navwomen">WOMEN</Link>
                <Box className='mega-menu'>
                  <Box className='mega-menu-container'><Dropwomen/></Box>
                </Box>
              </Box>

              <Box className='nav-link'>
                <Link to="/shop/kids"  id="navkid">KIDS</Link>
                <Box className='mega-menu'>
                  <Box className='mega-menu-container'><Dropkid/></Box>
                </Box>
              </Box>

              <Box className='nav-link'>
                <Link to="/shop/home"  id="navhome">HOME & LIVING</Link>
                <Box className='mega-menu'>
                  <Box className='mega-menu-container'><Drophome/></Box>
                </Box>
              </Box>

              <Box className='nav-link'>
                <Link to="/shop/beauty" id="navbeauty">BEAUTY</Link>
                <Box className='mega-menu'>
                  <Box className='mega-menu-container'><Dropbeauty/></Box>
                </Box>
              </Box>

              <Box className='nav-link-studio'>
                <Link to="/shop/studio" id="navstudio">STUDIO</Link>
                <Box className='mega-menu-studio'>
                  <Box className='mega-menu-container-studio'><Studio/></Box>
                </Box>
              </Box>
              <i className="fa fa-font-awesome" aria-hidden="true"></i>
            </Flex>


            <Box id="navsearchbox">
              <Box id='navsearch'>
                <BsSearch />
                <Box fontSize={"sm"}>Search for products, brand and more</Box>
              </Box>
            </Box>
            <Flex color={"gray.600"}>
              <Flex flexDir={"column"} justify="center" align={"center"} className='nav-link-profile'>
                <SlUser />
                <Text fontSize={"12px"} fontWeight="bold">Profile</Text>
                <Box className='mega-menu-profile'>
                  <Box className='mega-menu-container-profile'><Profile/></Box>
                </Box>
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
          <Flex w={"95%"} align="center" m='auto' h={"75px"} justify="space-between" color={"gray.600"}>

            <Image w="60px" src={apnidukan} alt='apnidukan' />
            <Flex gap={"30px"}  >
              <Box  display={"flex"} alignItems="center">
                <BsSearch />
              </Box>
              {/* <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <SlUser />
                  <Text fontSize={"12px"} fontWeight="bold">Profile</Text>
                </Flex>
              </Flex> */}
              <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"}  fontSize="1.5rem">
                  <SlHeart />
                  {/* <Text fontSize={"12px"} fontWeight="bold">Wishlist</Text> */}
                </Flex>
              </Flex>
              <Flex color={"gray.600"}>
                <Flex flexDir={"column"} justify="center" align={"center"} fontSize="1.5rem">
                  <SlHandbag />
                  {/* <Text fontSize={"12px"} fontWeight="bold">Bag</Text> */}
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