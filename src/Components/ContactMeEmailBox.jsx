import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
    MdOutlineEmail,
  } from 'react-icons/md';
  import {
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';

const ContactMeEmailBox = () => {

 // This is for Getting email from Email.js ( starts here )
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault()
  console.log("clicked submit")

   emailjs.sendForm('service_jux1b0z', 'template_d8vchc8', form.current, 'zm2Cn7B5v0sIJiNqp')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
         e.target.reset()
     });


     }

 // Ends here

  return (
    <Box m={8} color="#0B0E3F">
    <VStack spacing={5}>
      <form ref={form}  onSubmit={sendEmail} >
      <FormControl id="name">
        <FormLabel>Your Name</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputLeftElement
            pointerEvents="none"
            children={<BsPerson color="gray.800" />}
          />
          <Input type="text" size="md" name="user_name" />
        </InputGroup>
      </FormControl>
      <FormControl id="name">
        <FormLabel>Mail</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputLeftElement
            pointerEvents="none"
            children={<MdOutlineEmail color="gray.800" />}
          />
          <Input type="text" size="md" name="user_email" />
        </InputGroup>
      </FormControl>
      <FormControl id="name">
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          borderColor="gray.300"
          _hover={{
            borderRadius: 'gray.300',
          }}
          placeholder="message"
        />
      </FormControl>
      <FormControl id="name" float="right">
        <Input
         type={"submit"}
         value="Send Message"
          variant="solid"
          bg="#0D74FF"
          color="white"
          _hover={{}}>
         
        </Input>
      </FormControl>
      </form>
    </VStack>
  </Box>
  )
}

export default ContactMeEmailBox