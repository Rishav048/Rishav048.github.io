import React from 'react';
import ContactMeEmailBox from './ContactMeEmailBox';
import style from "./ContactMe.module.css"
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
    Link,
    Wrap,
    WrapItem,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn
  } from 'react-icons/md';
  import { BsGithub,BsLinkedin } from 'react-icons/bs';
  
  export default function ContactMe() {

    return (
    <Box  bg="#cbd5e0">
        <br />
      <Container  bg="#cbd5e0" maxW="full" mt={0} centerContent overflow="hidden">
      <Heading textAlign={'center'} color={'blue.600'} >Contact Me</Heading>
        <Flex >
          <Box
            bg="#cbd5e0"
            color="white"
            borderRadius="10px"
            m={{ sm: 4, md: 16, lg: 5 }}
            p={{ sm: 5, md: 5, lg: 5 }}>
            <Box p={4} bg="blue.600" className={style.contactbox} >
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                  <Heading fontSize={"20px"} textAlign={'center'} color={'white'} >Liked my work? Want to get in touch?</Heading>
                    <Text fontSize={'16px'} fontWeight={'bold'} mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                     You can reach out to me at :
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="black" size="20px" />}>
                          +91-9123160776
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="black" size="20px" />}>
                          chakrabortyrishav048@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="black" size="20px" />}>
                          Bokaro, Jharkhand, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <Link href={'https://github.com/Rishav048'}>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      </Link>
                      <Link href={'https://www.linkedin.com/in/rishav-chakraborty048/'}>
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      </Link>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                  <ContactMeEmailBox />
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </Box>
    );
  }