import {
    Box,
    Center,
    Heading,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
  
  export default function SkillCard({src ,name}) {
    return (

      <Center bg={'#cbd5e0'} py={12}>
        
        <Box
          role={'group'}
          p={6}
          maxW={'180px'}
          w={'full'}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          rounded={'lg'}
          bg={"white"}
          h={'220px'}
         >
          <Box
            rounded={'lg'}
            mt={0}
            height={'70%'}
            >
            <Image
              rounded={'lg'}
              height={120}
              width={100}
              objectFit={'cover'}
              src={src}
              margin="auto"
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'15px'} fontFamily={'body'} fontWeight={'bold'}>
              {name}
            </Heading>
          </Stack>
        </Box>
      </Center>
    );
  }