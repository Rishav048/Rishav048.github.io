import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";

export default function ContactSection() {
  return (
    <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
      <Heading id="contactme" textAlign={"center"} color={"blue.600"}>
        Contact Me
      </Heading>
      <Flex>
        <Box
          bg="blue.600"
          _hover={{
            boxShadow: "rgb(1, 255, 242) 0px 3px 8px",
            transition: "2s",
          }}
          color="white"
          borderRadius="lg"
          m={{ base: 4, md: 10, lg: 10 }}
          mt={{ md: 6 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading
                    fontSize={{ base: "16px", md: "18px", lg: "22px" }}
                    textAlign={"left"}
                    color={"white"}
                  >
                    Liked my work? Want to get in touch?
                  </Heading>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight={"bold"}
                    mt={{ sm: 3, md: 3, lg: 5 }}
                    color="white"
                  >
                    You can reach out to me at :
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={{ base: 1, md: 2, lg: 3 }}
                      alignItems="left"
                    >
                      <Button
                        textAlign={"left"}
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="black" size="25px" />}
                      >
                        +91-9123160776
                      </Button>
                      <Button
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="black" size="25px" />}
                      >
                        chakrabortyrishav048@gmail.com
                      </Button>
                      <Button
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="black" size="25px" />}
                      >
                        Bokaro, Jharkhand, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Link href={"https://github.com/Rishav048"} isExternal>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/rishav-chakraborty048/"
                      }
                      isExternal
                    >
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </Link>
                    <a
                      href="mailto:chakrabortyrishav048@gmail.com"
                      title="chakrabortyrishav048@gmail.com"
                      target="blank"
                    >
                      <IconButton
                        aria-label="Email"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<IoMailOpenOutline size="30px" />}
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
