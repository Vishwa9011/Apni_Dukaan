import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, Grid, useDisclosure } from '@chakra-ui/react'
import { DeleteProductCart, moveProductToWishlist, UpdateQty } from '../../../Redux/CartRedux/Action.cart';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { IProduct, IUser } from '../../../Constants/Constant';
import UseToastMsg from '../../../Custom-hooks/UseToastMsg';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrowCircle } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';
import { RootState } from '../../../Redux/store';
import React, { Dispatch } from 'react'
import "./cartcard.css"

type Props = {
     product: IProduct
}

interface IUserCred {
     userCredential: IUser
}

const itemQty = new Array(10).fill(0)

const CartCard = ({ product }: Props) => {
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const { onOpen, onClose, isOpen } = useDisclosure();
     const { userCredential }: IUserCred = useSelector((store: RootState) => store.auth)

     // todo: updateQtyOfProduct
     const UpdateQtyOfProduct = (value: number) => {
          product = { ...product, qty: value }
          dispatch(UpdateQty(product, userCredential?.email, Toast))
     }

     // todo: deleteProduct
     const deleteProducFromCart = () => {
          dispatch(DeleteProductCart(product.id, userCredential?.email, Toast))
     }

     // todo: Move Product to wishlist
     const MoveProductToWishlist = () => {
          dispatch(moveProductToWishlist(product, userCredential?.email, Toast))
     }

     return (
          <Flex className='cartcard' boxShadow='md' rounded='md' p="15px" pos='relative'>
               <Box w={"40%"} m="auto">
                    <Image w={"100%"} src={product.defaultImage} h='200px' />
               </Box>
               <Box className='cartcartdetail' w="100%" px={"12px"} >
                    <Flex justifyContent={"space-between"}>
                         <Text fontWeight={'semibold'} textTransform='uppercase' fontSize={['.9em', '.9em', '1em', '1.1em']}>{product.brand}</Text>
                         <Button display={'flex'} onClick={deleteProducFromCart} colorScheme='red.600' _hover={{ bg: 'red.600' }} className='btn-clicked' pos='absolute' right={'7px'} top='7px' cursor={'pointer'} alignItems={'center'} justifyContent='center' borderRadius='50%' bg={"red.500"} fontSize={'1rem'} p='0' maxH={'25px'} minW={'25px'} color="white" >
                              <AiOutlineClose />
                         </Button>
                    </Flex>
                    <Text fontSize={"14px"} color="gray.700">{product.description}</Text>
                    <Text fontSize={"13px"} color="gray.500">Sold by: Flashstar Commerce</Text>
                    <Flex>
                         <Box bg={"gray.100"} mt={"10px"}>
                              <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                                   <PopoverTrigger>
                                        <Flex cursor={'pointer'} justifyContent={"space-between"} alignItems="center" p={"5px"} >
                                             <Heading size={"xs"} color="gray.700">Qty : {product.qty}</Heading>
                                             <MdArrowDropDown />
                                        </Flex>
                                   </PopoverTrigger>
                                   <PopoverContent>
                                        <PopoverCloseButton />
                                        <Grid gap={"10px"} gridTemplateColumns='repeat(5,1fr)' p='20px'>
                                             {itemQty.map((el, i) => (
                                                  <Box border="1px solid black" key={i} cursor={"pointer"} display={"flex"} _hover={{ color: "red", border: "2px solid red", fontWeight: "bold" }}
                                                       w="40px" h="40px" onClick={() => { onClose(); UpdateQtyOfProduct(i + 1) }} borderRadius={"50%"} alignItems="center" justifyContent={"center"}>
                                                       {i + 1}
                                                  </Box>
                                             ))}
                                        </Grid>
                                   </PopoverContent>
                              </Popover>
                         </Box>
                    </Flex>
                    <Flex mt={"10px"} align={'center'} gap='5px' fontSize={"xs"} fontWeight="bold">
                         <Text>Rs.{product.price.toLocaleString()}</Text>
                         <Text as='span' style={{ color: "gray" }} fontSize='.8em' textDecoration='line-through'>Rs.{product.mrp.toLocaleString()}</Text>
                         <Text as='span' style={{ color: "red" }}>{product.discount}% OFF</Text>
                    </Flex>
                    <Flex alignItems={"center"} pt="10px">
                         <Text><BiLeftArrowCircle /></Text>
                         <Text fontSize={"xs"} fontWeight="bold">15 days return available</Text>
                    </Flex>
                    <Flex>
                         <Button variant={'unstyled'} onClick={MoveProductToWishlist} className='btn-clicked' transition={"600"} border={'2px'} borderColor='blackAlpha.500' _hover={{ border: '2px solid red', color: 'red.500' }} h='35px' mt='2' borderRadius={0} px='4' style={{ transition: "all 600ms" }}>
                              MOVE TO WISHLIST
                         </Button>
                    </Flex>
               </Box>
          </Flex>
     )
}


export default CartCard