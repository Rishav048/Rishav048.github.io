import {Link} from "react-scroll"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';






export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg='#2a2b2b' px={4} mb='0.2vh' pl={'5vh'} pr={'5vh'} borderBottom={'2px solid black'}  boxShadow='2xl' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} color={"black"} fontWeight={"bold"} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
           
            <HStack
              as={'nav'}
              spacing={"80px"}
              display={{ base: 'none', md: 'flex' }}>
                <Box color="white"  _hover={{ borderBottom:"4px solid #F6C461", color:"#F6C461", fontWeight: 'semibold'  , fontSize:"20px" }} >
                 Home
                </Box>
                <Box color="white"   _hover={{borderBottom:"4px solid #F6C461", color:"#F6C461", fontWeight: 'semibold'  , fontSize:"20px" }} >
                About
                </Box>
                <Box color="white"   _hover={{borderBottom:"4px solid #F6C461", color:"#F6C461", fontWeight: 'semibold'  , fontSize:"20px" }} >
                Skills
                </Box>
                <Box color="white"   _hover={{borderBottom:"4px solid #F6C461", color:"#F6C461", fontWeight: 'semibold'  , fontSize:"20px" }} >
                Projects
                </Box>
                <Box color="white"  _hover={{borderBottom:"4px solid #F6C461", color:"#F6C461", fontWeight: 'semibold'  , fontSize:"20px" }} >
                Contact
                </Box>
            
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  
                  src={
                    'https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-02/new_776068.jpeg'
                  }
                />
              </MenuButton>
             
            </Menu>
          </Flex>
        </Flex>

       
      </Box>

    
    </>
  );
}