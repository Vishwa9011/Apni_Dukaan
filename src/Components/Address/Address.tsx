import { Box, Button, Checkbox, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import "./Address.css"
import img from "./apnidukan.png"

const Address = () => {
  return (
    <Box >
      <Box className='nav_moumita'>
      <Box display={"flex"}  justifyContent={"space-between"} pl="10" pr="10" pt="5">
        <Image className='logo_img_mou' w="15" h="10" src={img}/>
        <Box className='nav_m' display={"flex"}>
          <Text>BAG</Text>
          <Text>-----------</Text>
          <Text textDecor={"underline"} color="#2cdca7">ADDRESS</Text>
          <Text>-----------</Text>
          <Text>PAYMENT</Text> 
        </Box>
        <Flex>
        <Image w="5" h="5" src="https://cdn-icons-png.flaticon.com/512/1035/1035668.png"/>
        <Text>100% SECURE</Text>
        </Flex>
      </Box>
      </Box>
      <Box border={"1px solid #D3D3D3"}></Box>
        <Box className='flex_mou'  w="100%" m="auto" pl="10" pr={"10"} >
            <Box className='main_mou'  w="100%" display={"flex"}  justifyContent="center">
                <Box className='flexmain_mou' m="auto"  w="80%"   p="5" h={"60%"} mt="8">
                <Box  display={"flex"} justifyContent="center" flexDir={"column"} gap="5" >
                    <Text fontWeight={"bold"}>CONTACT DETAILS</Text>
                    <Input placeholder='name*'/>
                    <Input placeholder='Mobile No*'/>
                    <Text fontWeight={"bold"}>ADDRESS</Text>
                    <Input placeholder='Pin Code*'/>
                    <Input placeholder='Address*'/>
                    <Input placeholder='Locality*'/>
                    <Flex gap={"3"} >
                    <Input placeholder='City/District*'/>
                    <Input placeholder='State*'/>

                    </Flex>
                    <Text fontWeight={"bold"}>SAVE ADDRESS AS</Text>
                    <Flex gap="3">
                      <Button borderRadius={"50"} border="1px solid red" color={"red"} backgroundColor="white">Home</Button>
                      <Button borderRadius={"50"} border="1px solid black" color={"black"} backgroundColor="white">Work</Button>

                    </Flex>
                    <Checkbox>Make this my default address</Checkbox>
                    <Button backgroundColor={"#E93D67"} color="white">ADD ADDRESS</Button>


                </Box>
                <Box className="box_mou">
                <Box mt={"10"} display="flex"   >
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"/>

                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"/>
                  <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"/>


                </Box>
                </Box>
                </Box>
         
            </Box>
         
            {/* right part */}
            <Box className='main_mou' w="100%" display={"flex"} justifyContent="center">
                <Box className='main_boxx' w="80%" m="auto"   p="5" h={"40%"} mt="8">
                <Box  display={"flex"} justifyContent="center" flexDir={"column"} gap="5" >
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
            </Box>
        </Box>
    </Box>
  )
}

export default Address