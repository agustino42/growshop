import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const AppLogo = () => {
  return (
    <Link href="/">  
    <Text color="green.500" fontWeight="bold">SiempreVerde{" "}

<Text as="span" color="darkolivegreen">GrowShop</Text>
    </Text>
    </Link>
  );
};
