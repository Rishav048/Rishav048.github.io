import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from 'react'
import GitHubCalendar from "react-github-calendar";

const GithubCalender = () => {
  return (
    <Box
      pt={{ base: 3, md: 4, lg: 8 }}
      pb={{ base: 5, md: 6, lg: "30px" }}
      border={"0px solid blue"}
      h={"auto"}
     
    >
      <Heading textAlign={"center"} color={"blue.600"}>
        GitHub Calender
      </Heading>

      <Flex justify={"center"} align={"center"} mt={{ base: 6, md: 7, lg: 8 }}>
        <Box
          bg={"white"}
          w={"fit-content"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={4}
          borderRadius={"10px"}
          _hover={{
            boxShadow: "rgb(1, 255, 242) 0px 3px 8px",
            transition: "2s",
          }}
        >
          <GitHubCalendar
            style={{ border: "0px solid red", width: "100%" }}
            username="Rishav048"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
          <Image
            w={"100%"}
            h={{ base: "100px", md: "150px",lg:'200px'}}
            src="https://github-readme-streak-stats.herokuapp.com/?user=Rishav048&theme=light&background=cbd5e0"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}

export default GithubCalender