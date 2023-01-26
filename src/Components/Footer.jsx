import { Box, Heading, Text } from "@chakra-ui/react";
import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <Box bg={"#2a2b2b"} w={"100%"} h={"170px"} border={"2px solid black"} p={6}>
      <Heading className={style.Thankyou} fontFamily={"Fugaz One, cursive"}>
        Thank you for visiting.😊
      </Heading>
      <Text fontWeight={"500"} textAlign={"center"} color={"white"}>
        © 2023 Designed and Built by Rishav Chakraborty
      </Text>
    </Box>
  );
}

export default Footer