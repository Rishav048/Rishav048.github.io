import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { DownloadIcon } from '@chakra-ui/icons'



  export default function ContentSec() {
    return (
      <Stack
        id="contentsec"
        border={"0px solid black"}
        h={{ base: "auto", md: "400px", lg: "500px" }}
        pt={"90px"}
        direction={{ base: "column", md: "row" }}
        bg="#cbd5e0"
        boxShadow="2xl"
      >
        <Flex
          border={"0px solid black"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
          p={{ base: "20px", md: "15px", lg: "10px" }}
          justifyContent={"center"}
        >
          <Image
            alt={"Rishav Image"}
            objectFit={"cover"}
            borderRadius={"50%"}
            boxShadow="2xl"
            src={
              "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-02/new_776068.jpeg"
            }
          />
        </Flex>
        <Flex
          border={"0px solid blue"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
          align={"center"}
          justify={"center"}
        >
          <Stack
            border={"0px solid green"}
            spacing={6}
            w={{ base: "92%", md: "98%", lg: "90%" }}
          >
            <Heading
              textAlign={{ base: "center", md: "left", lg: "left" }}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              <Text color={"blue.600"} as={"span"}>
                Hi 👋, I'am<br/>Rishav Chakraborty
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.800"}
              textAlign={{ base: "left", md: "left", lg: "left" }}
            >
              Detailed-oriented and responsible Full-Stack Web Developer with a
              great knowledge of Web Development. Capable of writing efficient
              code using ReactJS, CSS, NodeJS and Express. Passionate about
              coding and looking for an opportunity in software development.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "gray.200",
                  color: "black",
                }}
              >
                Download CV
                <DownloadIcon />
              </Button>
              <Button
                rounded={"full"}
                _hover={{
                  bg: "blue.400",
                  color: "white",
                }}
              >
                {" "}
                Contact Me
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }