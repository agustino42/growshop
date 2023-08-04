import { Button } from '@chakra-ui/react'
import React from 'react'

export const AddToCartButton = () => {
  return (
    <Button 
    variant="outline" 
    borderColor="brand.primary"
    color="green.400" 
    rounded="full"
    size="sm"
    w="140px"
    fontWeight="extrabold"
    >
        Añadir al Carro🛒
    </Button>
  )
}
