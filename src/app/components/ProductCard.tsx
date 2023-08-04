import { Button,
   ButtonGroup,
    Card, 
    CardBody, 
    CardFooter,
    Divider,
    Flex,
    Heading,
    Image,
    Stack,
    Text
         } from '@chakra-ui/react'
import React from 'react'
import { Rating } from './Rating'
import { AddToCartButton } from './AddToCartButton'

export const ProductCard = () => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    <Flex justify="space-between" align="center">
    <Heading size='md'>Living room Sofa</Heading>
    <Flex color="brand.primaryDark" fontWeight="extrabold">
       
       <Text fontSize="sm">$</Text>
       
       <Text fontSize="lg" fontWeight="extrabold" fontFamily="mono">100</Text>

    </Flex>
    </Flex>  
    
      <Text fontWeight="semibold">
        This sofa is perfect for modern tropical spaces, baroque inspired
       
      </Text>
      <Rating />

  
      <AddToCartButton />
    </Stack>
  </CardBody>
</Card>
  )
}
