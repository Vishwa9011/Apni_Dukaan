import { useRef, } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { PrevBtn, NextBtn } from "./Btn";
import "./CardSlider.css";
import { Image } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineArrowRight, AiOutlineArrowLeft, } from "react-icons/ai";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { SliderData } from "../../../Pages/Home/HomeSliderData";

const ProductSlider = () => {
   const sliderContainer = useRef<HTMLDivElement>(null);
   const cardRef = useRef<HTMLDivElement>(null)
   const product = {
      brand: "HRX by Hrithik Roshan", category: "man", defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYbNiNtFIqeuXqN2__GaHH2Uzj_0TvxiGgw&usqp=CAU", description: "Men Yellow Printed Cotton Pure Cotton T-shirt",
      discount: 55, id: "3pgUUt3pHghKt1WsBsIe", images: { image2: '', image3: '', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8jWdbleNDhr6VhGWxXUcweasX_BfhLdiBA&usqp=CAU' }
      , mrp: 800, qty: 1, price: 314, rating: 4, totalReview: "2k"
   }

   return (
      <Box w={["98%", "98%", "98%"]} m="auto" >
         <Heading as={"p"} my={[2, 2, 3, 5]} fontSize={["1.3em", "1.3em", "1.8em"]} textAlign="center">
            Best Sellers
         </Heading>
         <Box className="productmain" py="4">
            <Box as="button" className="sliderBtn sliderPrev" _hover={{ bg: "red.600" }} w="40px" h="40px" onClick={() => PrevBtn(sliderContainer, cardRef)}>
               <AiOutlineArrowLeft />
            </Box>
            <Box as="div" className="productContainer" id="productContainer" ref={sliderContainer} py="2" w="100%" m="auto" display={"flex"} overflow="hidden" justifyContent={"space-between"} >
               {
                  SliderData.map((product) => (
                     <Box key={product.id} className="box-card-mou" ref={cardRef} p='2' h='450px'>
                        <ProductCard product={product} type={`${product.type}`} />
                     </Box>
                  ))
               }

               {/* <Box gap="10" className="box-card-mou">
                  <Box w="100%" >
                     <Image
                        w="100%"
                        src="https://images.bewakoof.com/t320/men-s-blackweb-slinger-oversized-full-sleeve-t-shirt-568921-1673610910-1.jpg"
                     />
                  </Box>
                  <Box display={"flex"} justifyContent="space-between" pr="2" ml="2" mt="2">
                     <Heading as="h3" fontSize={"md"}>Bewakoof</Heading>
                     <AiOutlineHeart />
                  </Box>
                  <Text ml="2">Men's Black Web...</Text>
                  <Box display={"flex"} justifyContent="space-between" p="2">
                     <Text display={"flex"} gap="2">₹ 499 <Text as='span' textDecoration={"line-through"}>1499</Text></Text>
                     <Text>53%</Text>
                  </Box>
               </Box> */}
               {/* <Box gap="10" className="box-card-mou">
                  <Box w="100%" >
                     <Image
                        w="100%"
                        src="https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentican-oversized-full-sleeve-t-shirt-569063-1673612954-1.jpg"
                     />
                  </Box>
                  <Box display={"flex"} justifyContent="space-between" pr="2" ml="2" mt="2">
                     <Heading as="h3" fontSize={"md"}>Bewakoof</Heading>
                     <AiOutlineHeart />
                  </Box>
                  <Text ml="2">Men's Black Web...</Text>
                  <Box display={"flex"} justifyContent="space-between" p="2">
                     <Text display={"flex"} gap="2">₹ 699 <Text textDecoration={"line-through"}>1499</Text></Text>

                     <Text>53%</Text>
                  </Box>
               </Box>
               <Box gap="10" className="box-card-mou">
                  <Box w="100%" >
                     <Image
                        w="100%"
                        src="https://images.bewakoof.com/t320/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg"
                     />
                  </Box>
                  <Box display={"flex"} justifyContent="space-between" pr="2" ml="2" mt="2">
                     <Heading as="h3" fontSize={"md"}>Bewakoof</Heading>
                     <AiOutlineHeart />
                  </Box>
                  <Text ml="2">Men's Black Web...</Text>
                  <Box display={"flex"} justifyContent="space-between" p="2">
                     <Text display={"flex"} gap="2">₹ 699 <Text textDecoration={"line-through"}>1499</Text></Text>

                     <Text>53%</Text>
                  </Box>
               </Box>
               <Box gap="10" className="box-card-mou">
                  <Box w="100%" >
                     <Image
                        w="100%"
                        src="https://images.bewakoof.com/t320/men-s-greenriot-xxxtentican-oversized-sweatshirt-568914-1673613116-1.jpg"
                     />
                  </Box>
                  <Box display={"flex"} justifyContent="space-between" pr="2" ml="2" mt="2">
                     <Heading as="h3" fontSize={"md"}>Bewakoof</Heading>
                     <AiOutlineHeart />
                  </Box>
                  <Text ml="2">Men's Black Web...</Text>
                  <Box display={"flex"} justifyContent="space-between" p="2">
                     <Text display={"flex"} gap="2">₹ 699 <Text textDecoration={"line-through"}>1499</Text></Text>

                     <Text>53%</Text>
                  </Box>
               </Box>
               <Box gap="10" className="box-card-mou">
                  <Box w="100%" >
                     <Image
                        w="100%"
                        src="https://images.bewakoof.com/t320/women-s-purpleweirdos-oversized-t-shirt-568926-1673613996-1.jpg" />
                  </Box>
                  <Box display={"flex"} justifyContent="space-between" pr="2" ml="2" mt="2">
                     <Heading as="h3" fontSize={"md"}>Bewakoof</Heading>
                     <AiOutlineHeart />
                  </Box>
                  <Text ml="2">Men's Black Web...</Text>
                  <Box display={"flex"} justifyContent="space-between" p="2">
                     <Text display={"flex"} gap="2">₹ 699 <Text textDecoration={"line-through"}>1499</Text></Text>

                     <Text>53%</Text>
                  </Box>
               </Box> */}
            </Box>

            <Box as="button" className="sliderBtn sliderNext" _hover={{ bg: "red.600" }} w="40px" h="40px" onClick={() => NextBtn(sliderContainer, cardRef)}>
               <AiOutlineArrowRight />
            </Box>
         </Box>
      </Box >
   );
};

export default ProductSlider;
