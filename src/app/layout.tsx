'use client';



import { CacheProvider} from "@chakra-ui/next-js"
import { Box, ChakraProvider} from "@chakra-ui/react"
import './page.css'

import { theme } from "@/theme";
import Link from "next/link";
import { Navbar } from "./components/Navbar/Navbar";





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>  
    <title>SiempreVerdeGrowShop🌱🌱🥦</title>
    <meta title="description" content="SiempreVerdeGroShop 50% Descuento 💥💲"></meta>
    <link rel="icon" type="image/png" sizes="32x32" href="icons8-hoja-de-marihuana-64.png" />
    </head>
      <body>
      <CacheProvider>
      
      <ChakraProvider theme={theme}>
      <Navbar />
        {children}
        </ChakraProvider>
      </CacheProvider>


      </body>
      
    </html>
  )
}
