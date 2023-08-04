import { BoxProps, ButtonProps, FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";

export const bannerStyles: FlexProps = {
    justify:"center",
    align:"center",
    gap:"2", 
    flexDir:{ base: "column", lg: "row"},
    w:{ base: "100%", lg: "90%"},
    mx:"auto", 
    p:"2rem",
};

export const bannerHeadingStyles: HeadingProps = {
    size:{ base: "xl", lg: "3xl"},
    alignContent: "center",
    lineHeight: "4rem",
    color: "green.600",
};

export const bannerTextStyles: TextProps = {
    fontSize:{base: "md", lg: "lg"}, 
    py:"1rem",
    maxW:"600px",
    color: "green.900",
    fontFamily: "cursive",
    fontWeight:"extrabold"
};

export const bannerBtnStyles: ButtonProps = {
    rounded: "full",
    minW: "10rem",
    bgColor: "darkgreen",
    color: "black",
    _hover: {bgColor: "brand.primaryDark"},
};

export const bannerImageBoxStyles: BoxProps = {
my: "2rem",
w: {base: "300px", lg: "600px"},
h: {base: "300px", lg: "500px"},
bg: "center / cover no-repeat url(icons8-hoja-de-marihuana-64.png)"
}