import {Link} from "react-scroll"
import {
  Box,
  Flex,
  Image,
  
} from '@chakra-ui/react';
import style from "./Navbar.module.css"
import RishavNameLogo from "./RishavNameLogo.png";


export default function Navbar() {

  return (
    <>
      <Box
        display={"flex"}
        w={"100%"}
        justifyContent={"space-around"}
        className={style.navbardiv}
        bg="#2a2b2b"
        mb="0.2vh"
        paddingRight={{ base: "10px", md: "50px", lg: "40px" }}
        pl={{ base: "10px", md: "50px", lg: "40px" }}
        border={"0px solid red"}
        borderBottom={"0px solid yellow"}
        boxShadow="2xl"
      >
        <Flex
          w={{ base: "90%", md: "70%", lg: "60%" }}
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
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
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
              duration={300}
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
              duration={300}
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
              duration={300}
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
              duration={300}
            >
              Contact
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
            className={style.navitems}
          >
            <a
              href="https://drive.google.com/file/d/1Cf-LzAsffKnlKtRYU2TxMHSyGsM6NTqI/view?usp=share_link"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: "inherit" }}
            >
              Resume
            </a>
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
              duration={300}
            >
              <Image w={"40px"} borderRadius={"50%"} src={RishavNameLogo} />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}