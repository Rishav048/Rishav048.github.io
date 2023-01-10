import React from 'react'

import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Flex
  } from '@chakra-ui/react';
  
  
  function StatsCard(props) {
    const { cource,location ,year } = props;
    return (
      <Stat
        bg={'#cbd5e0'}
        textAlign={'left'}
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} color={'blue.600'} >
          {year}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {cource}
        </StatNumber>
        <StatLabel fontSize={'18px'}  fontWeight={'30px'} >
          {location}
        </StatLabel>
        
      </Stat>
    );
  }
  
  export default function Educations() {
    return (
      <>
      <chakra.h1
          textAlign={'left'}
          ml={'125px'}
          color={'blue.600'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Educations
        </chakra.h1>
      <Box display={'flex'} border={'0px solid red'} maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
    
        <SimpleGrid h={"100%"} w={{base:'100%',md:'50%',lg:'50%'}} columns={{ base: 1, md: 1}} spacing={{ base: 5, lg: 8 }}>
         <Flex><img style={{width:"70px", height:"70px"}} src="https://img.freepik.com/free-vector/illustration-graduation-hat_53876-5920.jpg?auto=format&h=200" alt="one" /><StatsCard cource={'Full-Stack Web Development (Full-Time)'} location={'Masai School | Bangalore'} year={'July 2022 - Present'} /></Flex>
         <Flex><img style={{width:"70px", height:"70px"}} src="https://img.freepik.com/free-vector/illustration-graduation-hat_53876-5920.jpg?auto=format&h=200" alt="one" /><StatsCard cource={'B-Tech in Mechanical Engineering'} location={'Dr. B.C. Roy Eng. College, Durgapur'} year={'August 2016 - July 2020'}  /></Flex>
         <Flex><img style={{width:"70px", height:"70px"}} src="https://img.freepik.com/free-vector/illustration-graduation-hat_53876-5920.jpg?auto=format&h=200" alt="one" /><StatsCard cource={'Intermediate'} location={'Bharat Sen. Sc.School, Kota, Rajasthan'} year={'March 2015 - May 2016'}  /></Flex>
         <Flex><img style={{width:"70px", height:"70px"}} src="https://img.freepik.com/free-vector/illustration-graduation-hat_53876-5920.jpg?auto=format&h=200" alt="one" /><StatsCard cource={'Matriculation'} location={'Aadarsh Vidya Mandir,Bokaro | CBSE'} year={'March 2013 - April 2014'}  /></Flex> 
        </SimpleGrid>

        <SimpleGrid display={'flex'} alignItems="center" border={'0px solid green'} w={{base:'0%',md:'50%',lg:'50%'}} columns={{ base: 1, md: 1}} spacing={{ base: 5, lg: 8 }}>
        <img style={{ width:"100%" , height:"50%"}}  src="https://img.freepik.com/premium-vector/guy-developer-character-thinking-work-laptop-create-debugging-code-with-flat-cartoon-style_197170-380.jpg?w=2000" alt="cartoon"  />  
        </SimpleGrid>
      </Box>
      </>
    );
  }