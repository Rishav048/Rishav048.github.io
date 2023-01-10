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
      <Stack direction={{ base: 'column', md: 'row' }} bg='#cbd5e0' boxShadow='2xl'  >
        <Flex border={'0px solid black'} h={['200px','200px',"400px","400px"]} flex={1} justifyContent={'center'} >
          <Image
            alt={'Rishav Image'}
            objectFit={'cover'}            
            borderRadius={'50%'}
            boxShadow='2xl'
            src={
              'https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-02/new_776068.jpeg'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading  fontSize={{ base: '2xl', md: '3xl', lg: '4xl'  }}>
              <Text color={'blue.600'} as={'span'}>
              Hi 👋, I'am Rishav Chakraborty
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'} textAlign={'left'} >
            Detailed-oriented and responsible Full-Stack Web Developer with a great knowledge of Web Development.
            Passionate about coding and looking for an opportunity in software development.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                    bg: 'gray.200',
                    color:'black'
                }}>
                Download CV<DownloadIcon />
              </Button>
              <Button rounded={'full'} _hover={{
                  bg: 'blue.400',
                  color:'white'
                }}>  Contact Me</Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }