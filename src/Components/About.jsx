import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import CarouselComponent from './slider';
  

  
  
  export default function AboutMe() {
    return (
      <Container maxW={'80%'} py={12}>
        <SimpleGrid justifyContent={'space-between'} columns={{ base: 1, md: 2 }} spacing={40}>
          <Flex border={'0px solid blue'} alignItems={'center'} justifyContent={'center'} >
         <CarouselComponent />
          </Flex>

          <Stack spacing={4}>
            <Heading textAlign={'left'} color={'blue.600'} >About Me</Heading>
            <hr style={{color:"black", height:"3px" , fontWeight:"bolder" }} />
            <Text textAlign={'left'}  color={'gray.500'} fontSize={'lg'}>
            A self-motivated, hard-working, and ambitious Full-Stack Web
            Developer and a good learner with proficiency in JavaScript.
            Having a Problem-solving mindset, and 1200+ hrs of hands-on
            experience in developing fully functional E-commerce
            applications. Looking forward to working as a developer and
            competent employee in an exciting tech company.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }