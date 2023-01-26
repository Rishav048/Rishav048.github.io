import React from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react";


const MyStatistics = () => {
  return (
    <Box pt={{ base: 3, md: 4, lg: 8 }} pb={{ base: 5, md: 6, lg: "30px" }}>
      <Heading mb={{ base: 4 }} textAlign={"center"} color={"blue.600"}>
        My Statistics
      </Heading>
      <Flex
        column={{ base: 2, md: 4, lg: 4 }}
        h={{ base: "115px", md: "150px", lg: "150px" }}
        justify={"space-between"}
        mt={{ base: "20px", md: "30px", lg: "35px" }}
        border={"0px solid blue"}
        w={{ base: "96%", md: "85%", lg: "70%" }}
        m={"auto"}
      >
        <Box
          w={"23.5%"}
          borderBottom={"2px solid blue"}
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
          p={{ base: 2, md: 4, lg: 6 }}
          bg={"#CBD5E0"}
          borderRadius={"5px"}
        >
          <Heading
            fontSize={{ base: "12px", md: "18px", lg: "21px" }}
            textAlign={"left"}
            color={"blue.600"}
          >
            1200+
          </Heading>
          <br />
          <Heading
            fontSize={{ base: "14px", md: "20px", lg: "23px" }}
            textAlign={"left"}
          >
            Hours Of <br /> Coding
          </Heading>
        </Box>
        <Box
          w={"23.5%"}
          borderBottom={"2px solid blue"}
          p={{ base: 2, md: 4, lg: 6 }}
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
          bg={"#CBD5E0"}
          borderRadius={"5px"}
        >
          <Heading
            fontSize={{ base: "12px", md: "18px", lg: "21px" }}
            textAlign={"left"}
            color={"blue.600"}
          >
            600+
          </Heading>
          <br />
          <Heading
            fontSize={{ base: "14px", md: "20px", lg: "23px" }}
            textAlign={"left"}
          >
            Hours Of <br /> DSA
          </Heading>
        </Box>

        <Box
          w={"23.5%"}
          borderBottom={"2px solid blue"}
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
          bg={"#CBD5E0"}
          borderRadius={"5px"}
          p={{ base: 2, md: 4, lg: 6 }}
        >
          <Heading
            fontSize={{ base: "12px", md: "18px", lg: "21px" }}
            textAlign={"left"}
            color={"blue.600"}
          >
            2+
          </Heading>
          <br />
          <Heading
            fontSize={{ base: "14px", md: "20px", lg: "23px" }}
            textAlign={"left"}
          >
            Mini Clone <br /> Projects
          </Heading>
        </Box>
        <Box
          w={"23.5%"}
          borderBottom={"2px solid blue"}
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
          p={{ base: 2, md: 4, lg: 6 }}
          bg={"#CBD5E0"}
          borderRadius={"5px"}
        >
          <Heading
            fontSize={{ base: "12px", md: "18px", lg: "21px" }}
            textAlign={"left"}
            color={"blue.600"}
          >
            6+
          </Heading>
          <br />
          <Heading
            fontSize={{ base: "14px", md: "20px", lg: "23px" }}
            textAlign={"left"}
          >
            Months Of Power Skills
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default MyStatistics