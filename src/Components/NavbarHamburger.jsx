import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-scroll";
import style from "./hamburger.module.css";
function NavbarHamburger({ isOpen, onOpen, onClose }) {
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
    <Drawer
      placement={"left"}
      onClose={onClose}
      isOpen={isOpen}
      size={'xs'}
    >
      <DrawerOverlay />

      <DrawerContent>
        <Heading
          textAlign={"center"}
          color={"grey"}
          fontSize={"22px"}
          borderBottom={"1px solid #CBD5E0"}
          pb={3}
        >
          Menu
        </Heading>
        <DrawerBody>
          <Link to="home" spy={true} smooth={true} offset={-50} duration={300}>
            <Text className={style.navitems} onClick={onClose}>
              Home
            </Text>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <Text className={style.navitems} onClick={onClose}>
              About
            </Text>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-140}
            duration={300}
          >
            <Text className={style.navitems} onClick={onClose}>
              Skills
            </Text>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <Text className={style.navitems} onClick={onClose}>
              Projects
            </Text>
          </Link>
          <Link
            to="contactme"
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
          >
            <Text className={style.navitems} onClick={onClose}>
              Contact
            </Text>
          </Link>
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
              <a
                href="https://drive.google.com/file/d/1Cf-LzAsffKnlKtRYU2TxMHSyGsM6NTqI/view?usp=share_link"
                target="_blank"
                rel="noreferrer noopener"
                style={{ color: "inherit" }}
              >
                <Text className={style.navitems} onClick={handleResume}>
                  Resume
                </Text>
              </a>
            </a>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default NavbarHamburger
