import { Box, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import React from "react"
import {SearchIcon} from "@chakra-ui/icons";
import { searchInputStyles } from "./style";

export const Search = () => {
    return (
    <Box>
    <InputGroup size="sm" w={{base: "100%", lg: "32rem"}}>
    <InputLeftElement 
    pointerEvents='none' 
   /* children={<SearchIcon color='gray.600'/>} */ 
    />
    <Input {...searchInputStyles} />
  </InputGroup>
  </Box>
);
};