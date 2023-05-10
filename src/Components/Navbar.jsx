import { Link } from "react-scroll";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import style from "./Navbar.module.css";
import RishavNameLogo from "./RishavNameLogo.png";
import NavbarHamburger from "./NavbarHamburger";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleResume = () => {
    fetch("fw21_0959-Rishav-Chakraborty-Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "fw21_0959-Rishav-Chakraborty-Resume.pdf";
        file.click();
        file.target = "_blank";
      });
    });
  };

  return (
    <>
      <NavbarHamburger isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box>
        <Box
          display={"flex"}
          w={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
          className={style.navbardiv}
          bg="#2a2b2b"
          mb="0.2vh"
          paddingRight={{ base: "10px", md: "50px", lg: "40px" }}
          pl={{ base: "10px", md: "50px", lg: "40px" }}
          border={"0px solid red"}
          borderBottom={"0px solid yellow"}
          boxShadow="2xl"
        >
          <Button
            display={{ base: "block", md: "none", lg: "none" }}
            p={"0"}
            bg={"#CBD5E0"}
            color={"black"}
            fontWeight={"bold"}
            onClick={onOpen}
          >
            ☰
          </Button>
          <Flex
            w={{ base: "90%", md: "70%", lg: "60%" }}
            border={"0px solid blue"}
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={"black"}
            fontWeight={"bold"}
          >
            <Box color="white" className={style.navitems}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
              >
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  Home
                </Text>
              </Link>
            </Box>

            <Box color="white" className={style.navitems}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  About
                </Text>
              </Link>
            </Box>

            <Box color="white" className={style.navitems}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-140}
                duration={300}
              >
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  Skills
                </Text>
              </Link>
            </Box>

            <Box color="white" className={style.navitems}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  Projects
                </Text>
              </Link>
            </Box>

            <Box color="white" className={style.navitems}>
              <Link
                to="contactme"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  Contact
                </Text>
              </Link>
            </Box>

            <Box
              onClick={handleResume}
              color="white"
              className={style.navitems}
            >
              <a
                href="https://drive.google.com/file/d/1N1OmwtBPtYTG9tXFByeynqBLHvQKG4FP/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                style={{ color: "inherit" }}
              >
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  Resume
                </Text>
              </a>
            </Box>
          </Flex>

          <Box
            display={{ base: "none", md: "block", lg: "block" }}
            w={{ base: "0%", md: "5%", lg: "5%" }}
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
      </Box>
    </>
  );
}
