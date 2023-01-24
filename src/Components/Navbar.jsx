import {Link} from "react-scroll"
import {
  Box,
  Flex,
  Image,
  
} from '@chakra-ui/react';
import style from "./Navbar.module.css"






export default function Navbar() {

  return (
    <>
      <Box
        display={"flex"}
        w={"100%"}
        justifyContent={"space-between"}
        className={style.navbardiv}
        bg="#2a2b2b"
        mb="0.2vh"
        pl={{ base: "5px", md: "25px", lg: "40px" }}
        paddingRight={{ base: "15px", md: "50px", lg: "40px" }}
        border={"0px solid red"}
        borderBottom={"0px solid yellow"}
        boxShadow="2xl"
      >
        <Flex
          w={{ base: "95%", md: "70%", lg: "60%" }}
          border={"0px solid blue"}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"black"}
          fontWeight={"bold"}
        >
          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <Link to="" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
            >
              Skills
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <Link
              to="contactme"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <Link
              to="Resume"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Resume
            </Link>
          </Box>
        </Flex>

        <Box
          w={{ base: "0%", md: "5%", lg: "5%" }}
          display={{ base: "none", md: "flex", lg: "flex" }}
          border={"0px solid red"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box h={"fit-content"}>
            <Link
              to="contentsec"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Image
                w={"50px"}
                borderRadius={"50%"}
                src={
                  "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-02/new_776068.jpeg"
                }
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}