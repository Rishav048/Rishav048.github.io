import { Container , VStack , HStack, Image ,Box,Divider,Stack  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'


export const Content = ()=>{
    return (
    <Stack  h='350px' bg='#f6c461' boxShadow='2xl' direction={['column', 'row']} >
  <Container h='100%' maxW='30%' bg='#f6c461' color='white' border='0px solid red' p='10px' >
  <Image borderRadius='50%' boxShadow='2xl' boxSize='100%' src='https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-02/new_776068.jpeg' alt='Rishav Image' />
  </Container>
  <Container h='100%' maxW='60%' bg='#f6c461' display="flex" flexDirection='column' alignItems="center" justifyContent='center' >
    <Box><h1 style={{fontSize:"30px" , fontWeight:"bolder", color:"blue" }}>Hi 👋, I'am
Rishav Chakraborty</h1></Box>
<Divider />

    <Box>
Detailed-oriented and responsible Full-Stack Web Developer with a great knowledge of Web Development.
Passionate about coding and looking for an opportunity in software development.</Box>
<Divider />
    <Box display='flex' direction='row' justifyContent='space-between' align='center' border='0px solid red' w='35%' mt='20px' >
    <Button bg='#cbd5e0' variant='solid'>
    Download CV<DownloadIcon />
  </Button>
  <Button bg='#cbd5e0' variant='solid'>
    Contact
  </Button>
    </Box>
  </Container>
</Stack>
    )
}