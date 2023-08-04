import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AppLogo } from '../AppLogo';
import { mobileContainerStyles, mobileSearchWrapper } from './style';
import { Search } from '../Search/Search';

export const MobileNav = () => {
  return (
<div>
    <Flex {...mobileContainerStyles}>
     <Box>Nav Menu</Box>
     <AppLogo />
      
     <Stack direction="row" spacing={1}>
     <Text>Megusta🤍</Text>
     <Text>Cart🛒</Text>
     </Stack>

    </Flex> 
    <Box {...mobileSearchWrapper}>
    <Search />
    </Box>
    </div>

)
};
