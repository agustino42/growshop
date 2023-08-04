import { Flex, Text } from '@chakra-ui/react'
import { colors } from '@src/theme';
import React from 'react';
import ReactStars from 'react-stars';

export const Rating = () => {
  return (
    <Flex>
     <ReactStars count={5} value={4} half={true} size={21} color2={colors.brand.primary} edit={false} />
     <Text>
        ({200})
     </Text>
    </Flex>
  )
}
