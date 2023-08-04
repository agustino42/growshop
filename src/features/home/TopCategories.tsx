"use client";

import { Box, Card, CardBody, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import SectionHeading from '@src/app/components/SectionHeading'
import React from 'react'

export const TopCategories = () => {
  return (
    <Box w={{base: "100%", lg: "85%"}} mx="auto" py="3rem" px="7rem">
     <SectionHeading title="" />  
     
     <Grid templateColumns={{
        base: "repeat(1, 1fr)",
         md: "repeat(2, 1fr)", 
         xl: "repeat(4, 1fr)",
         }}
         gap="4"
         >
       <GridItem>
    <TopCategoryCard />
        </GridItem>  
        <GridItem>
    <TopCategoryCard />
        </GridItem>  
        <GridItem>
    <TopCategoryCard />
        </GridItem>  
        <GridItem>
    <TopCategoryCard />
        </GridItem>  
     </Grid>
    </Box>
  );
};

const TopCategoryCard = () => {
    return (
        <Card 
        direction="row"
        align="center"
        overflow="hidden" 
        variant="outline"
        w="100%"
        h="100%"
        p="10px"
        _hover={{ cursor: "pointer", bgColor: "green.400"}}
             >
  <Image src="icons8-hoja-de-marihuana-64.png" alt="" />

<CardBody>

    <Heading size={{base: "sm", lg: "md"}}>Accesorios Indoor💮</Heading>
</CardBody>
        </Card>   
    )
}