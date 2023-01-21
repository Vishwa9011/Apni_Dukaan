import { Box, Button, Checkbox, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import img from "../../../public/Images/apnidukan.png";
import secure from '../../../public/Images/secure.png'
import { IAddress, IProduct, IUser } from '../../Constants/Constant';
import React, { Dispatch, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Address.css"
import { GoPrimitiveDot } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { FindTotal, getCartProduct } from '../../Redux/CartRedux/Action.cart';
import UseToastMsg, { ToastType } from '../../Custom-hooks/UseToastMsg';
import { AddAddressUserProfile } from '../../Redux/Auth/Action.auth';

const initialAddress = { name: '', state: '', phone: 0, pincode: 0, address: '', locality: '', district: '', addressType: 'home' }

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

interface IAuth {
   userCredential: IUser
}

const Address = () => {
   const location = useLocation()
   const { Toast } = UseToastMsg();
   const dispatch: Dispatch<any> = useDispatch()
   const couponDiscount = location?.state?.coupon || 0; //todo: getting coupon from location state
   const { cart } = useSelector((store: RootState) => store.cart);
   const [address, setAddress] = useState<IAddress>(initialAddress);
   const { userCredential }: IAuth = useSelector((store: RootState) => store.auth)
   const { TotalMRP, TotalDiscount, TotalPrice, TotalItems } = useMemo(() => FindTotal(cart), [cart]);

   // todo: handle state of User with string type
   const HandleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(prev => ({ ...prev, [e.target.name]: e.target.value }));
   }

   // todo: handle state of User with number type
   const HandleOnChangeAddressNum = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNaN(+e.target.value)) {
         Toast('Enter only Number.', ToastType.warning);
         return
      };
      setAddress(prev => ({ ...prev, [e.target.name]: e.target.value }));
   }

   // todo: Delivery time estimate
   const DeliveryTimeEstimate = () => {
      const date = new Date();
      const nextRandomDay = Math.ceil(Math.random() * 7);
      const DeliveryDate = new Date(date.setDate(date.getDate() + nextRandomDay))
      return `${DeliveryDate.getDay() + 1} ${month[DeliveryDate.getMonth() + 1]} ${DeliveryDate.getFullYear()}`
   }

   // todo: Add address into userProfile
   const AddAddress = () => {
      // todo: validate address input
      for (let [key, value] of Object.entries(address)) {
         if ((value === '') && (key !== 'locality')) {
            Toast('Please fill required feilds.', ToastType.warning)
            return
         }
      }
      setAddress(initialAddress);
      dispatch(AddAddressUserProfile(address, userCredential?.uid, Toast))
   }

   const SetAddressType = (type: string) => {
      setAddress(prev => ({ ...prev, addressType: type }))
   }

   useEffect(() => {
      if (userCredential) {
         dispatch(getCartProduct(userCredential?.email, Toast))
      }
   }, [userCredential]);

   return (
      <Box>
         <Box className='nav_moumita'>
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
                        <Text as='span' borderBottom={'2px'} style={{ color: "#339933", }}>
                           ADDRESS
                        </Text>
                     </Link>
                     --------
                     <Link to='/cart/payment'>
                        PAYMENT
                     </Link>
                  </Flex>
                  <Flex flex={1} gap='2' justifyContent={"flex-end"} alignItems="center">
                     <Image w={["10px", "20px", "30px"]} src={secure} alt="secure" />
                     <Text fontSize={['10px', '10px', '10px', 'xs']} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">100% SECURE</Text>
                  </Flex>
               </Flex>
            </Flex>
         </Box>
         <Box className='flex_mou' w="100%" m="auto" >
            {/* Left part */}
            {/* <AddressInput address={address} AddAddress={AddAddress} HandleOnChangeAddressNum={HandleOnChangeAddressNum} SetAddressType={SetAddressType} HandleOnChangeAddress={HandleOnChangeAddress} /> */}

            <Flex className='main_mou' w="100%" justifyContent="center" >
               <Box className='flexmain_mou' m="auto" w="80%" p="5" px='7' h={"fit-content"} mt="8">
                  <Box>
                     <Text fontSize={'1.5em'} fontWeight='semibold'>Saved Address</Text>
                     <Flex gap='2' p='2' align={'center'}>
                        <Box h='100%' alignSelf={'stretch'} pt='1'>
                           <Text border={'2px'} borderRadius='50%' color='red.500' fontSize={'1.2em'} h='fit-content'><GoPrimitiveDot /></Text>
                        </Box>
                        <Flex flexDir={'column'}>
                           <Flex fontSize={'1.2em'} fontWeight='semibold' gap='10px' align={'center'}>
                              <Text>Vishwa Vivek Yadav</Text>
                              <Text border={'2px'} borderRadius='2px' color='green' px='2' fontSize={'.6em'}>Home</Text>
                           </Flex>
                           <Box color={'gray.600'} fontSize={'.9em'} my='1'>
                              <Text textTransform={'capitalize'}>malik mau gayatri nagar</Text>
                              <Text textTransform={'capitalize'}>district state</Text>
                           </Box>
                           <Box color={'gray.600'} fontSize={'.9em'} my='1'>
                              <Flex gap='5px'>Mobile:<Text color={'black'} fontWeight='semibold'> 8423017075</Text> </Flex>
                           </Box>
                           <Box fontSize={'.9em'} my='1'>
                              <Flex color={'gray.600'}>&#x2022; Pay on Delivery available</Flex>
                           </Box>
                        </Flex>
                     </Flex>
                  </Box>

                  <Text>
                     CONTINUE
                  </Text>

               </Box>


            </Flex>

            {/* right part */}
            <Box className='main_mou' w={{ base: "100%", sm: '100%', md: '50%' }} display={"flex"} justifyContent="center">
               <Box className='main_boxx' w="80%" m="auto" p="5" h={"fit-content"} mt="8">
                  <Box>
                     <Text fontWeight={'semibold'}>DELIVERY ESTIMATES</Text>
                     <Box h='160px' mb='2' overflowY={'scroll'} className='address-cartitems-scroll'>
                        {cart.map((item: IProduct) => (
                           <Flex key={item.id} gap='20px' align={'center'} my='1' h='50px' border={'1px'} borderColor='gray.200' px='1'>
                              <Image src={item.defaultImage} w='35px' h={'40px'} border='1px' borderColor='gray.200' />
                              <Flex align={'center'} gap='5px'>
                                 <Text fontSize={'.9em'}>Estimated delivery by </Text>
                                 <Text as={'span'} fontWeight='semibold'>{DeliveryTimeEstimate()}</Text>
                              </Flex>
                           </Flex>
                        ))}
                     </Box>
                  </Box>
                  <Box className='cartprice' my="20px">
                     <Text fontWeight="bold" color={"gray.600"}>PRICE DETAILS (2 Items)</Text>
                     <Flex flexDir={"column"} gap="10px" py={"10px"} fontSize='15px' fontWeight={'semibold'} opacity='.9'>
                        <Flex justifyContent={'space-between'} alignItems="center">
                           <Text >Total MRP</Text>
                           <Text color={"blackAlpha.900"} >₹{TotalMRP.toLocaleString()}</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems="center">
                           <Text >Discount on MRP</Text>
                           <Text color={"green.500"} >₹{TotalDiscount.toLocaleString()}</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems="center">
                           <Text >Coupon Discount</Text>
                           <Text color={couponDiscount ? "green.500" : "red.500"} >{couponDiscount ? `₹${couponDiscount.toLocaleString()}` : 'Apply Promo'}</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems="center">
                           <Text >Convenience Fee</Text>
                           <Text color={"green.500"} ><Text as='span' color='blackAlpha.800' mr='1' textDecor={'line-through'}>₹99</Text>FREE</Text>
                        </Flex>
                     </Flex>
                     <hr />
                     <Box py={"20px"}>
                        <Flex justifyContent={'space-between'} alignItems="center">
                           <Heading fontSize="16px">Total Amount</Heading>
                           <Heading fontSize="16px">₹{(couponDiscount ? (TotalPrice - couponDiscount) : TotalPrice).toLocaleString()}</Heading>
                        </Flex>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default Address


interface IAddressInput {
   address: IAddress
   SetAddressType(value: string): void
   AddAddress(): void
   HandleOnChangeAddress(e: React.ChangeEvent<HTMLInputElement>): void
   HandleOnChangeAddressNum(e: React.ChangeEvent<HTMLInputElement>): void
}

const AddressInput = ({ address, AddAddress, HandleOnChangeAddress, SetAddressType, HandleOnChangeAddressNum }: IAddressInput) => {
   return (
      <Box className='main_mou' w="100%" display={"flex"} justifyContent="center">
         <Box className='flexmain_mou' m="auto" w="80%" p="5" px='7' h={"fit-content"} mt="8">
            <Box display={"flex"} justifyContent="center" flexDir={"column"} gap="5">
               <Text fontWeight={"bold"} fontSize='1.2em'>CONTACT DETAILS</Text>
               <Input value={address.name} placeholder='Name*' name='name' onChange={HandleOnChangeAddress} />
               <Input maxLength={10} value={address.phone || ''} placeholder='Mobile No*' name='phone' onChange={HandleOnChangeAddressNum} />
               <Text fontWeight={"bold"} fontSize='1.2em'>ADDRESS</Text>
               <Input maxLength={6} value={address.pincode || ''} placeholder='Pin Code*' name='pincode' onChange={HandleOnChangeAddressNum} />
               <Input value={address.address} placeholder='Address*' name='address' onChange={HandleOnChangeAddress} />
               <Input value={address.locality} placeholder='Locality/Town*' name='locality' onChange={HandleOnChangeAddress} />
               <Flex gap={"3"}>
                  <Input value={address.district} placeholder='City/District*' name='district' onChange={HandleOnChangeAddress} />
                  <Input value={address.state} placeholder='State*' name='state' onChange={HandleOnChangeAddress} />
               </Flex>
               <Text fontWeight={"bold"}>SAVE ADDRESS AS</Text>
               <Flex gap="3">
                  <Button onClick={() => SetAddressType('home')} bg='white' className='btn-clicked' borderRadius={"50"} border="2px" color={address.addressType == 'home' ? "red" : 'black'} >
                     Home
                  </Button>
                  <Button onClick={() => SetAddressType('work')} bg='white' className='btn-clicked' borderRadius={"50"} border="2px" color={address.addressType == 'work' ? "red" : 'black'} >
                     Work
                  </Button>
               </Flex>
               <Checkbox>Make this my default address</Checkbox>
               <Button className='btn-clicked' onClick={AddAddress} backgroundColor={"red.500"} colorScheme='red.500' color="white">ADD ADDRESS</Button>
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
   )
}