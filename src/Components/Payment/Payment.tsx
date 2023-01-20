import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from "./apnidukan.png"

const Payment = () => {
  return (
    <Box>
    <Box>
           <Box display={"flex"}  justifyContent={"space-between"} pl="10" pr="10" pt="2">
        <Image className='logo_img_mou' w="15" h="10" src={img}/>
        <Box className='nav_m' display={"flex"}>
          <Text>BAG</Text>
          <Text>-----------</Text>
          <Text >ADDRESS</Text>
          <Text>-----------</Text>
          <Text textDecor={"underline"} color="#2cdca7">PAYMENT</Text> 
        </Box>
        <Flex>
        <Image w="5" h="5" src="https://cdn-icons-png.flaticon.com/512/1035/1035668.png"/>
        <Text>100% SECURE</Text>
        </Flex>
      </Box>
      </Box>
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
            {/* </Box> */}

            </Flex>

        </Box>

      </Box>
    </Box>
  )
}

export default Payment