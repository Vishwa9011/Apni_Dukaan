import { Box, Button, Checkbox, Flex, Image, Input, Text } from '@chakra-ui/react'
import img from "../../../public/Images/apnidukan.png";
import secure from '../../../public/Images/secure.png'
import { IAddress } from '../../Constants/Constant';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Address.css"
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const initialAddress = {
   name: '',
   state: '',
   phone: 0,
   pincode: 0,
   address: '',
   localiy: '',
   district: '',
}

const Address = () => {
   const [address, setAddrees] = useState<IAddress>(initialAddress);
   const { cart } = useSelector((store: RootState) => store.cart);

   const HandleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddrees(prev => ({ ...prev, [e.target.name]: e.target.value }));
   }

   return (
      <Box >
         <Box className='nav_moumita'>
            <Box m={"auto"} className='cartlogo' boxShadow='base' rounded='md' p={"15px"} justifyContent="space-between" alignItems={"center"}>
               <Box w="20%">
                  <Link to='/'>
                     <Image w={"30%"} src={img} alt='apnidukan' />
                  </Link>
               </Box>
               <Flex w={["100%", "100%", "100%", "60%"]} className='cartlogoss' justifyContent={"space-between"}>
                  <Flex align={'center'} fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest"> BAG -------- <Text as='span' borderBottom={'2px'} style={{ color: "#339933" }}>ADDRESS</Text> -------- PAYMENT</Flex>
                  <Flex justifyContent={"center"} alignItems="center">
                     <Image w={["10px", "12%", "15%"]} src={secure} alt="secure" />
                     <Text fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">100% SECURE</Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
         <Box border={"1px solid #D3D3D3"}></Box>
         <Box className='flex_mou' w="100%" m="auto" p='10'>
            <Box className='main_mou' w="100%" display={"flex"} justifyContent="center">
               <Box className='flexmain_mou' m="auto" w="80%" p="5" h={"fit-content"} mt="8">
                  <Box display={"flex"} justifyContent="center" flexDir={"column"} gap="5">
                     <Text fontWeight={"bold"} fontSize='1.2em'>CONTACT DETAILS</Text>
                     <Input placeholder='Name*' name='name' onChange={HandleOnChangeAddress} />
                     <Input placeholder='Mobile No*' name='phone' onChange={HandleOnChangeAddress} />
                     <Text fontWeight={"bold"} fontSize='1.2em'>ADDRESS</Text>
                     <Input placeholder='Pin Code*' name='pincode' onChange={HandleOnChangeAddress} />
                     <Input placeholder='Address*' name='address' onChange={HandleOnChangeAddress} />
                     <Input placeholder='Locality*' name='locality' onChange={HandleOnChangeAddress} />
                     <Flex gap={"3"}>
                        <Input placeholder='City/District*' name='district' onChange={HandleOnChangeAddress} />
                        <Input placeholder='State*' name='state' onChange={HandleOnChangeAddress} />
                     </Flex>
                     <Text fontWeight={"bold"}>SAVE ADDRESS AS</Text>
                     <Flex gap="3">
                        <Button bg='white' className='btn-clicked' borderRadius={"50"} border="2px solid red" color={"red"} >
                           Home
                        </Button>
                        <Button bg='white' className='btn-clicked' borderRadius={"50"} border="2px solid black" color={"black"} >
                           Work
                        </Button>
                     </Flex>
                     <Checkbox>Make this my default address</Checkbox>
                     <Button className='btn-clicked' backgroundColor={"red.500"} colorScheme='red.500' color="white">ADD ADDRESS</Button>
                  </Box>
                  <Box className="box_mou">
                     <Box mt={"10"} display="flex">
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" />
                        <Image w="10" h="8" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" />
                     </Box>
                  </Box>
               </Box>

            </Box>

            {/* right part */}
            <Box className='main_mou' w="100%" display={"flex"} justifyContent="center">
               <Box className='main_boxx' w="80%" m="auto" p="5" h={"40%"} mt="8">
                  <Box>
                     <Text>DELIVERY ESTIMATES</Text>
                     <Flex>
                        <Image src='' boxSize={'40px'} />
                        <Text>Estimated 13 January</Text>
                     </Flex>
                  </Box>
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
                        <Text display={"flex"} gap="2">Convenice Fee <Text as='span' color={"red"}>Know More</Text></Text>
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