import { Box, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import {BsHeart} from 'react-icons/bs';
import {BsHandbagFill} from 'react-icons/bs';
import {BsTruck,} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaAmazonPay} from 'react-icons/fa';
import {CgArrowsExchange} from 'react-icons/cg';
import {TbListDetails} from 'react-icons/tb';

type Props = {}

const SingleProductPage = (props: Props) => {
     return (
          <Box>
     <Box border={"0px solid black"} height={50} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
     <Box><Text padding={1}>Home</Text></Box>
     <Box><Text padding={1}>/</Text></Box>
     <Box><Text padding={1}>Clothing</Text></Box>
     <Box><Text padding={1}>/</Text></Box>
     <Box><Text padding={1}>Men Clothing</Text></Box>
     <Box><Text padding={1}>/</Text></Box>
     <Box><Text padding={1}>Tshirt</Text></Box>  
    </Box> 
    <Box border={"0px solid yellow"} height={"1200px"} display={"flex"}>
    <Box border={"0px solid red"} width={"57%"} height={"800px"} display={"flex"} justifyContent={"space-around"}>
        <Box border={"0px solid red"} height={"500px"} width={"47%"} marginTop={"5"}>
            <Image height={"100%"} src="https://rukminim1.flixcart.com/image/832/832/kpydrbk0/shirt/r/0/w/s-black-5-jai-textiles-original-imag42m5ehzt3paz.jpeg?q=70"/>
        </Box>
        <Box border={"0px solid red"} height={"500px"} width={"47%"} marginTop={"5"}>
            <Image height={"100%"} src="https://rukminim1.flixcart.com/image/832/832/kpydrbk0/shirt/z/k/b/s-black-5-jai-textiles-original-imag42m5qhjdsqzf.jpeg?q=70"/>
        </Box>
    </Box>
    <Box border={"0px solid red"} width={"43%"} height={"1200px"}>
        <Box border={"0px solid red"} width={"97%"} height={"1200px"} marginLeft={"10px"} marginTop={"5"}>
            <Box><Text fontSize={24} fontWeight={800}>HRX by Hrithik Roshan</Text></Box>
            <Box><Text fontSize={15} marginTop={1}>Men Teal Blue Printed Pure Cotton T-shirt</Text></Box>
            <Box border={"1px solid #eaeaec"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} width={"150px"} marginTop={2}>
                <Box><Text>4.2</Text></Box>
                <Box><Text color={"#14958e"}><AiFillStar/></Text></Box>
                <Box>|</Box>
                <Box>50.6k Ratings</Box>
            </Box>
            <Box border={"1px solid #e9eaec"} marginTop={2}></Box>
            <Box width={"250px"}  marginTop={2.5} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} height={"40px"} marginLeft={"-5px"}>
            <Box><Text fontWeight={800} fontSize={22}>Rs.1,099</Text></Box>
            <Box><Text textDecoration={"line-through"} fontSize={".9em"}>Rs 1888</Text></Box>
            <Box><Text color={"#ff905a"} fontWeight={800} >( 45 % OFF)</Text></Box> 
            </Box>
            <Box marginTop={2} width={"250px"}><Text color={"#39b49a"}>inclusive of all taxes</Text></Box>
            <Box  marginTop={2} width={"300px"} height={"50px"} display={"flex"} alignItems={"center"}>
                <Box><Text fontWeight={"700"} fontStyle={"normal"} fontSize={"16px"}>SELECT SIZE</Text></Box>
                <Box><Text fontWeight={"700"} fontSize={"14px"} marginLeft={"60px"} color={"#ff3e6b"}>SIZE CHART </Text></Box>
            </Box>
            <Box  height={"55px"} width={"280px"} display={"flex"} alignItems={"center"} justifyContent={'space-between'}>
            <Box height={"50px"} width={"50px"} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px solid black"} fontSize={"22px"} ><Text>S</Text></Box>
            <Box height={"50px"} width={"50px"} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px solid black"} fontSize={"22px"} ><Text>M</Text></Box>
            <Box height={"50px"} width={"50px"} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px solid black"} fontSize={"22px"} ><Text>L</Text></Box>
            <Box height={"50px"} width={"50px"} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px solid black"} fontSize={"22px"} ><Text>XL</Text></Box>
            <Box height={"50px"} width={"50px"} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px solid black"} fontSize={"22px"} ><Text>XXL</Text></Box>
            </Box>

            <Box border={"0px solid black"} height={"70px"} display={"flex"} width={"auto"} alignItems={"center"} marginTop={"10px"}>
            <Box><Button width={"250px"} height={"50px"} backgroundColor={"#E53E3E"} color={"white"}><Text marginRight={"10px"}><BsHandbagFill/></Text>ADD TO BAG</Button></Box>
            <Box><Button width={"150px"} height={"50px"} marginLeft={"10px"} border={"1px solid #e9eaec"} backgroundColor={"white"} color={"black"}><Text marginRight={"10px"}><BsHeart/></Text>WISHLIST</Button></Box>
            </Box>

            <Box border={"1px solid #e9eaec"} marginTop={2.5}></Box>

            <Box  height={"90px"} marginTop={"12px"}>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <Box><Text fontWeight={800}>Rs. 1,099</Text></Box>
                <Box><Text textDecoration={"line-through"} fontSize={".9em"}>Rs 1888</Text></Box>
                <Box><Text color={"#ff905a"} fontWeight={400} >( 45 % OFF)</Text></Box>

            </Box>
            <Box><Text>Get it by Fri, Jan 20 - 110085</Text></Box>
            <Box display={"flex"}>
            <Box><Text>Seller:</Text></Box>
            <Box><Text color={"#E53E3E"}> Omnitech Retail</Text></Box>    
            </Box>

            <Box border={"1px solid #e9eaec"} marginTop={4}></Box>

            <Box  height={"50px"} display={"flex"} alignItems={"center"}>
            <Box><Text fontWeight={800}>DELIVERY OPTIONS</Text></Box>
            <Box><Text marginLeft={"10px"}><BsTruck/></Text></Box>
            </Box>
            <Box><Button justifyContent={"space-between"} width={"225px"} height={"50px"} backgroundColor={"#f4f4f5"}><Text fontWeight={400}>110085</Text><Text color={"#E53E3E"}>Change</Text></Button></Box>

            <Box border={"0px solid black"} height={"50px"} marginTop={"3"} display={"flex"} alignItems={"center"} width={"200px"} justifyContent={"space-between"}>
            <Box><Text fontSize={35}><TbTruckDelivery/></Text></Box>
            <Box><Text fontWeight={800}>Get it by Fri, Jan 20</Text></Box>
            </Box>
            
            <Box border={"0px solid black"} height={"50px"} marginTop={"3"} display={"flex"} alignItems={"center"} width={"250px"} justifyContent={"space-between"}>
            <Box><Text fontSize={35} ><FaAmazonPay/></Text></Box>
            <Box><Text fontWeight={800}>Pay on delivery available</Text></Box>
            </Box>

            <Box border={"0px solid black"} height={"50px"} marginTop={"3"} display={"flex"} alignItems={"center"} width={"360px"} justifyContent={"space-between"}>
            <Box><Text fontSize={35}><CgArrowsExchange/></Text></Box>
            <Box><Text fontWeight={800}>Easy 30 days return & exchange available</Text></Box>
            </Box>

            <Box marginTop={"3"}><Text fontWeight={100}>100% Original Products</Text></Box>
            <Box border={"1px solid #e9eaec"} marginTop={4}></Box>
            <Box  height={"50px"} display={"flex"} alignItems={"center"}>
            <Box><Text fontWeight={800}>PRODUCT DETAILS </Text></Box>
            <Box><Text marginLeft={"10px"}><TbListDetails/></Text></Box>
            </Box>

            <Box>
                <Text fontWeight={100} width={500}>
                This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie.
                </Text>
            </Box>
            </Box>
        </Box>
        
    </Box>
    </Box>
    </Box>
     )
}

export default SingleProductPage