
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'white'}
    _hover={{
      textDecoration: 'none',
      color:'#f6c461'
      
    }}
    href={'#'}>
    {children}
  </Link>
);

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
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((el) => (
                <Box  _hover={{ fontWeight: 'semibold'  , fontSize:"20px" }} >
                <NavLink key={el}>{el}</NavLink>
                </Box>
              ))}
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

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Box className='TopBars' >
                <NavLink key={link}>{link}</NavLink>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </>
  );
}