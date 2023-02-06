
import { Box, Text, Heading, Flex, SimpleGrid, Link } from "@chakra-ui/react";
import React from 'react'
import style from "./Projects.module.css"

const DeployedLink = {
  maxfashion_D_Link: "https://adorable-kitten-07d0ff.netlify.app/",
  kfc_D_Link: "https://transcendent-stardust-f3081b.netlify.app/",
  nykaa_D_Link: "https://scintillating-meringue-fdf589.netlify.app/",
  healthkart_D_Link: "https://github.com/akaushik509/internal-appliance-3345",
};

const GithubLink = {
    maxfashionGithub :"https://github.com/Rishav048/phobic-lumber-7659",
    kfcGithub :"https://github.com/Rishav048/-unique-stretch-3372",
    nykaaGithub : "https://github.com/Rishav048/rustic-bone-9818",
    healthkartGithub : "https://github.com/akaushik509/internal-appliance-3345"
}

const { maxfashion_D_Link, kfc_D_Link, nykaa_D_Link, healthkart_D_Link } =
  DeployedLink;
const { maxfashionGithub, kfcGithub, nykaaGithub, healthkartGithub } =
  GithubLink;


const Projects = () => {


      return (
        <>
          <div id="projects">
            <Heading textAlign={"center"} color={"blue.600"}>
              Projects
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2 }}
              gap={"40px"}
              className={style.portfolio}
            >
              {/* ................ 1st Project(Health Kart) .................. */}

              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box className={style.upperBox}>
                    <div className={style.projectName}>
                      <h3>
                        <img
                          className={style.logoImg}
                          src="https://i.ibb.co/KNkk7GQ/logo-withname.png"
                          alt="Logo"
                        />{" "}
                        HealthKart.com - Clone
                      </h3>
                    </div>
                    <div className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p style={{ fontSize: "14px", textAlign: "left" }}>
                        HealthKart is an online health and fitness store which
                        sells authentic health supplements, fitness equipment,
                        protein supplements, sports gear and wellness products.
                        Here I Implemented functionalities like
                        Carousel, filter, sorting, pagination, dynamic products per page,
                        adding products.
                      </p>
                    </div>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://user-images.githubusercontent.com/26029251/215933811-50a82010-8114-476c-9627-e2484710c93a.png"
                      alt="Health Kart SS"
                    />
                  </Box>
                  <br></br>
                  <div className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      Next.js | Redux | CSS | Chakra UI
                    </p>
                  </div>
                  <Flex mt={"30px"} pt={"20px"} justifyContent={"space-evenly"}>
                    <button className={style.btn}>
                      <Link href={healthkartGithub}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>

                    <button className={style.btn}>
                      <Link href={healthkart_D_Link}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                  </Flex>
                </div>
              </div>
              {/* ****************** Nykaa ********************* */}
              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box className={style.upperBox}>
                    <div className={style.projectName}>
                      <img
                        className={style.logoImg}
                        src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
                        alt="Logo"
                      ></img>
                      <h3 className={style.nameP}>Nykaa - Clone</h3>
                    </div>
                    <div className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p style={{ fontSize: "14px", textAlign: "left" }}>
                        Nykaa is an Indian e-commerce company, It sells beauty,
                        wellness and fashion products. Here I built the
                        website's Home, Product's, Cart page. Implemented
                        functionalities like Carousel, filter, pagination,
                        dynamic products per page, adding & removing products.
                      </p>
                    </div>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-12/Screenshot%20%2845%29_544913.png"
                      alt="NYKAA SS"
                    />
                  </Box>
                  <br></br>
                  <div className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      React | JavaScript | HTML | CSS | Chakra UI{" "}
                    </p>
                  </div>
                  <Flex
                    border={"0px solid red"}
                    mt={"30px"}
                    pt={"20px"}
                    justifyContent={"space-evenly"}
                  >
                    <button className={style.btn}>
                      <Link href={nykaaGithub}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>

                    <button className={style.btn}>
                      <Link href={nykaa_D_Link}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                  </Flex>
                </div>
              </div>

              {/* ................ 3rd Project - (KFC) .................. */}
              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box className={style.upperBox}>
                    <div className={style.projectName}>
                      <img
                        className={style.logoImg}
                        src="data:image/png;base64,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"
                        alt="Logo"
                      />
                      <h3>KFC - Clone</h3>
                    </div>
                    <Box className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p style={{ fontSize: "14px", textAlign: "left" }}>
                        An American online food ordering and delivery
                        platform,that specializes in fried chicken. Here I Built
                        the website's Product's page, added search and filter
                        functionality, Adding & Removing products from cart,
                        Helped in making dynamic admin dashboard.
                      </p>
                    </Box>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-12/Screenshot%20%2843%29_774980.png"
                      alt="KFC SS"
                    />
                  </Box>
                  <br></br>
                  <Box  className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      HTML | CSS | JavaScript{" "}
                      <Text display={{ md: "null", lg: "none" }}>Adjust</Text>
                    </p>
                  </Box>
                  <Flex
                    border={"0px solid red"}
                    mt={"30px"}
                    pt={"20px"}
                    justifyContent={"space-evenly"}
                  >
                    <button className={style.btn}>
                      <Link href={kfcGithub}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>

                    <button className={style.btn}>
                      <Link href={kfc_D_Link}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                  </Flex>
                </div>
              </div>

              {/* ................ 4rth Project - (MAX FASHION) .................. */}

              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box className={style.upperBox}>
                    <div className={style.projectName}>
                      <h3>
                        <img
                          className={style.logoImg}
                          src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
                          alt="Logo"
                        />{" "}
                        Max Fashion - Clone
                      </h3>
                    </div>
                    <div className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p style={{ fontSize: "14px", textAlign: "left" }}>
                        Max Fashion is an e-commerce website, offers apparel,
                        footwear and accessories for the entire family - women,
                        men and children. Here I implemented some
                        functionalities like Login, Signup, Product's Page,
                        Filtering, Adding & Removing products from cart, etc.
                      </p>
                    </div>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-11/Screenshot%20%2838%29_662577.png"
                      alt="Max Fashion SS"
                    />
                  </Box>
                  <br></br>
                  <div className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>HTML | CSS | JavaScript</p>
                  </div>
                  <Flex mt={"30px"} pt={"20px"} justifyContent={"space-evenly"}>
                    <button className={style.btn}>
                      <Link href={maxfashionGithub}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>

                    <button className={style.btn}>
                      <Link href={maxfashion_D_Link}>
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                  </Flex>
                </div>
              </div>
            </SimpleGrid>
          </div>
        </>
      );
}

export default Projects