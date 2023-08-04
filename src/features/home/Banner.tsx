"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./styles";
import Link from "next/link";

export const Banner = () => {
    return (
        <Flex {...bannerStyles} >
         <Box w={{base: "100%", lg: "80%"}}>
         <Heading { ...bannerHeadingStyles}>
            SiempreVerde <br /> GrowShop🌱
        </Heading>
        <Text {...bannerTextStyles}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptatem voluptatum recusandae molestias ex mollitia, quos possimus aliquam tempora, velit rerum 
            dolorem aliquid illum autem suscipit nulla voluptates ad quia.
        </Text>   
        <Link href="/products">   
        <Button rounded="full" minW="10rem" bgColor="bg.primary" color="black" _hover={{ bgColor: "green.500"}}  mx="4.5rem">
            Ir a la Tienda (50% Descuento)
        </Button> 
        </Link>
         </Box>
         <Box w={{base: "100%", lg: "70%"}}>
         <Box mx="4rem"
          w={{ base: "300px", lg: "600px"}}
          h={{ base: "300px", lg: "500px"}}
          bg="center / cover no-repeat url(logo-no-background.svg)" 
          />
            </Box>
        

        </Flex>
    );
};