import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const handleResume = () => {
  fetch("fw21_0959-Rishav-Chakraborty-Resume.pdf").then((res) => {
    res.blob().then((blob) => {
      const fileUrl = window.URL.createObjectURL(blob);
      let file = document.createElement("a");
      file.href = fileUrl;
      file.download = "fw21_0959-Rishav-Chakraborty-Resume.pdf";
      file.click();
      file.target = "_blank";
    });
  });
};

export default function Home() {
  return (
    <Stack
      id="home"
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
              Hi 👋, I'am
              <br />
              Rishav Chakraborty
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "17px", lg: "lg" }}
            color={"gray.800"}
            textAlign={{ base: "center", md: "left", lg: "left" }}
          >
            Detailed-oriented and responsible Full-Stack Web Developer with a
            great knowledge of Web Development. Capable of writing efficient
            code using ReactJS, CSS, NodeJS and Express. Passionate about coding
            and looking for an opportunity in software development.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              onClick={handleResume}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "gray.200",
                color: "black",
              }}
            >
              <a
                href="https://drive.google.com/file/d/1N1OmwtBPtYTG9tXFByeynqBLHvQKG4FP/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                style={{ color: "inherit" }}
              >
                <Text m={"4px"}>Resume</Text>
              </a>
              <DownloadIcon />
            </Button>

            <Link
              to="contactme"
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
            >
              <Button
                rounded={"full"}
                mb={{ base: "8px", md: "20px" }}
                w={"full"}
                _hover={{
                  bg: "blue.400",
                  color: "white",
                }}
              >
                {" "}
                Contact Me
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
