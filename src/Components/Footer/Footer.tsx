import React from "react";
import { Box, Button, Center, Flex, Heading, Image, Input, SimpleGrid, Text, } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "./Footer.css"
const Footer = () => {
   return (
      <Box>

         <Box mt={"25px"} width={"100%"} h="40px" bg={"gray.100"}></Box>

         <Box width={"100%"} bg={"gray.700"}>
            <SimpleGrid margin={"auto"} padding="30px" width={"80%"} columns={[2, 2, 3]} color={"white"}>
               <Box>
                  <Text as="h5" fontSize={["sm","md","lg"]} fontWeight={"500"}>
                     <i style={{ fontSize: "23px" }} className="fa fa-envelope" aria-hidden="true"></i>
                     Get special discount on your inbox
                  </Text>
                  <br />
                  <Flex alignItems={"center"} >
                     <Input width={"180px"} borderRadius={"none"} color={"white"} border={"none"} borderBottom={"1px solid white"} placeholder="Your Email" />
                     <Button ml={"10px"} borderRadius={"none"} colorScheme="White" variant="outline" className="footer_btn">
                        Send
                     </Button>
                  </Flex>
               </Box>
               <Box>
                  <Flex alignItems={"center"} gap="10px">
                     <Text fontSize={"4xl"}>
                        <FcPhoneAndroid />
                     </Text>
                     <Text as="h5" fontSize={["sm","md","lg"]} fontWeight={"500"}>
                        EXPERIENCE THE APNI DUKAN MOBILE APP
                     </Text>
                  </Flex >
                  <Flex alignItems={"center"} className="payStoreBtn">
                     <Image width={"150px"} src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=fr" alt="avtar" />
                     <Image borderRadius={"6px"} width={"120px"} src="https://e7.pngegg.com/pngimages/2/670/png-clipart-logo-app-store-font-brand-product-app-store-play-store-text-logo.png" alt="avtar" />
                  </Flex>
               </Box>
               <Box className="footerdown">
                  <Flex alignItems={"center"} gap="10px">
                     <Text fontSize={["md","lg","3xl"]} >
                        <BsFillTelephoneFill />
                     </Text>
                     <Text as="h5" fontSize={["sm","md","lg"]} fontWeight={"500"}>
                        FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444
                     </Text>
                  </Flex>
                  <Text ml={"40px"} as="h5" fontSize={["sm","md","lg"]}>
                     (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
                  </Text>
               </Box>
            </SimpleGrid>
         </Box>

         <Box width={"100%"} bg={"black"}>
            <SimpleGrid margin={"auto"} padding="40px" width={"80%"} columns={[2, 2, 4]} color={"white"} transition="all 600ms">
               <Flex flexDir={"column"} gap="10px" transition="all 600ms" cursor={"pointer"}>
                  <Text as="h4" fontStyle={"italic"} fontSize="xl" color={"red.500"}>
                     Apni Dukan
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Careers
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Authenticity
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Press
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Testimonials
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Responsible Disclosure
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Investor Relation
                  </Text>
               </Flex>
               <Flex flexDir={"column"} gap="14px" cursor={"pointer"}>
                  <Text as="h4" fontSize="xl" color={"red.500"}>
                     Help
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Contact Us
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Frequently asked questions
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Store Locator
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Cancellation & Return
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Shipping & DElivery
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Sell on Apni Dukan
                  </Text>
               </Flex>
               <Flex flexDir={"column"} gap="14px" cursor={"pointer"} >
                  <Text as="h4" fontSize="xl" color={"red.500"}>
                     Inspire me
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Beauty Book
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Apni Dukan TV
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Apni Dukan Network
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Buying Guides
                  </Text>
               </Flex>

               <Flex flexDir={"column"} gap="14px" cursor={"pointer"}>
                  <Text as="h4" fontSize="xl" color={"red.500"}>
                     Top Categories
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Men
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Women
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Kids
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Home & Living
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Beauty
                  </Text>
                  <Text _hover={{ color: "red.500" }} as="h5" fontSize="sm">
                     Studio
                  </Text>
               </Flex>
            </SimpleGrid>
         </Box>
         <Box width={"100%"} h="30px" bg={"red.500"} color="white" fontSize={"sm"} fontWeight="bold" display={"flex"} alignItems="center" justifyContent={"center"} gap="5px"><BsFillSuitHeartFill /> MADE BY APNI DUKAN</Box>
      </Box>
   );
};

export default Footer;
