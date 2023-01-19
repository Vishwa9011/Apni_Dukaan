import {  useRef, } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { PrevBtn, NextBtn } from "./Btn";
import "./CardSlider.css";
import { Image } from "@chakra-ui/react";

import {
  AiOutlineHeart,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const ProductSlider = () => {
  const sliderContainer = useRef(null);

  return (
    <Box w={["98%", "98%", "90%"]} m="auto" >
      <Heading
        as={"p"}
        my={[2, 2, 3, 5]}
        fontSize={["1.3em", "1.3em", "1.8em"]}
        textAlign="center"
      >
        Best Sellers
      </Heading>
      <Box className="productmain" py="4">
        <Box
          as="button"
          className="sliderBtn sliderPrev"
          _hover={{ bg: "red.600" }}
          w="40px"
          h="40px"
          onClick={() => PrevBtn(sliderContainer)}
        >
          <AiOutlineArrowLeft />
        </Box>

        <Box
          as="div"
          className="productContainer"
          id="productContainer"
          ref={sliderContainer}
          py="2"
          w="100%"
          m="auto"
          display={"flex"}
          overflow="hidden"
          justifyContent={"space-between"}
        
          gap="5"
        >
          <Box gap="10" className="box-card-mou">
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
              <Text display={"flex"} gap="2">₹ 499 <Text textDecoration={"line-through"}>1499</Text></Text>
           
              <Text>53%</Text>
            </Box>
          </Box>
          {/* second */}
          <Box gap="10" className="box-card-mou">
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
          {/* 3rd */}
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
          {/* 4th */}
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
          {/* 5th */}
          <Box gap="10" className="box-card-mou">
            <Box w="100%" >
              <Image
                w="100%"
                src="https://images.bewakoof.com/t320/women-s-purpleweirdos-oversized-t-shirt-568926-1673613996-1.jpg"/>
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
        </Box>

        <Box
          as="button"
          className="sliderBtn sliderNext"
          _hover={{ bg: "red.600" }}
          w="40px"
          h="40px"
          onClick={() => NextBtn(sliderContainer)}
        >
          <AiOutlineArrowRight />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSlider;
