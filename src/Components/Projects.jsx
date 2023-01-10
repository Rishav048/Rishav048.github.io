import { Box ,Heading, Flex ,SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import style from "./Projects.module.css"




const Projects = () => {


      return (
   <>
<Heading textAlign={'center'} color={'blue.600'} >Projects</Heading>
    <SimpleGrid columns={{ base:1, md:2, lg:2 }} gap={'40px'} className={style.portfolio} >
       <div className={style.portfoliocontent}>
            <div className={style.portfolioimg}>
                <Box h={'fit-content'} >
                 <div className={style.projectName}>
                 <h3>Max Fashion - Clone</h3>
                 </div>
                <div className={style.aboutProject}>
                 <p style={{textAlign:"left", color:"blue"}}>About Project :</p>   
                <p style={{fontSize:"14px", textAlign:"left"}}>Max Fashion is an e-commerce website, offers apparel, footwear and accessories for the entire family - women, men and children. Here I implemented some functionalities like Login, Signup, Product's Page, Filtering, Adding & Removing products from cart, etc.</p>
                </div>
                <br></br>
                <img className={style.projectimg} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-11/Screenshot%20%2838%29_662577.png" alt="Max Fashion SS" />
                </Box>
                <br></br>
                <div className={style.Techstacks} >
                <p style={{textAlign:"left", color:"blue"}}>Tech Stacks :</p> 
                <p style={{fontSize:"13px"}}>HTML | CSS | JavaScript</p>
                </div>
                <Flex mt={'30px'} pt={'20px'} justifyContent={'space-evenly'}>
                
                <button className={style.btn}  >
                <img style={{borderRadius:"50%"  ,background:"white" , marginRight:"5px" , display:"inline" ,width:"20px", height:"20px"}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitIcon" />  Github
                </button>
              
                <button className={style.btn}>
                  <img style={{borderRadius:"50%"  ,background:"white" , marginRight:"5px" , display:"inline" ,width:"20px", height:"20px"}} src="https://cdn-icons-png.flaticon.com/512/0/375.png" alt="PlayIcon" />  Live
                </button>
                </Flex>
            </div>  
        </div>

{/* ................ 2nd Project .................. */}

        <div className={style.portfoliocontent}>
            <div className={style.portfolioimg}>
                <Box h={'fit-content'} >
                 <div className={style.projectName}>
                 <h3>Max Fashion - Clone</h3>
                 </div>
                <div className={style.aboutProject}>
                 <p style={{textAlign:"left", color:"blue"}}>About Project :</p>   
                <p style={{fontSize:"14px", textAlign:"left"}}>Max Fashion is an e-commerce website, offers apparel, footwear and accessories for the entire family - women, men and children. Here I implemented some functionalities like Login, Signup, Product's Page, Filtering, Adding & Removing products from cart, etc.</p>
                </div>
                <br></br>
                <img className={style.projectimg} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-11/Screenshot%20%2838%29_662577.png" alt="Max Fashion SS" />
                </Box>
                <br></br>
                <div className={style.Techstacks} >
                <p style={{textAlign:"left", color:"blue"}}>Tech Stacks :</p> 
                <p style={{fontSize:"13px"}}>HTML | CSS | JavaScript</p>
                </div>
                <Flex mt={'30px'} pt={'20px'} justifyContent={'space-evenly'}>
                <button className={style.btn}>
                    Github
                </button>
                <button className={style.btn}>
                    Live
                </button>
                </Flex>
            </div>  
        </div>

        {/* ................ 3rd Project .................. */}

        <div className={style.portfoliocontent}>
            <div className={style.portfolioimg}>
                <Box h={'fit-content'} >
                 <div className={style.projectName}>
                 <h3>Max Fashion - Clone</h3>
                 </div>
                <div className={style.aboutProject}>
                 <p style={{textAlign:"left", color:"blue"}}>About Project :</p>   
                <p style={{fontSize:"14px", textAlign:"left"}}>Max Fashion is an e-commerce website, offers apparel, footwear and accessories for the entire family - women, men and children. Here I implemented some functionalities like Login, Signup, Product's Page, Filtering, Adding & Removing products from cart, etc.</p>
                </div>
                <br></br>
                <img className={style.projectimg} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-11/Screenshot%20%2838%29_662577.png" alt="Max Fashion SS" />
                </Box>
                <br></br>
                <div className={style.Techstacks} >
                <p style={{textAlign:"left", color:"blue"}}>Tech Stacks :</p> 
                <p style={{fontSize:"13px"}}>HTML | CSS | JavaScript</p>
                </div>
                <Flex mt={'30px'} pt={'20px'} justifyContent={'space-evenly'}>
                <button className={style.btn}>
                    Github
                </button>
                <button className={style.btn}>
                    Live
                </button>
                </Flex>
            </div>  
        </div>

        {/* ................ 4th Project .................. */}

        <div className={style.portfoliocontent}>
            <div className={style.portfolioimg}>
                <Box h={'fit-content'} >
                 <div className={style.projectName}>
                 <h3>Max Fashion - Clone</h3>
                 </div>
                <div className={style.aboutProject}>
                 <p style={{textAlign:"left", color:"blue"}}>About Project :</p>   
                <p style={{fontSize:"14px", textAlign:"left"}}>Max Fashion is an e-commerce website, offers apparel, footwear and accessories for the entire family - women, men and children. Here I implemented some functionalities like Login, Signup, Product's Page, Filtering, Adding & Removing products from cart, etc.</p>
                </div>
                <br></br>
                <img className={style.projectimg} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-11/Screenshot%20%2838%29_662577.png" alt="Max Fashion SS" />
                </Box>
                <br></br>
                <div className={style.Techstacks} >
                <p style={{textAlign:"left", color:"blue"}}>Tech Stacks :</p> 
                <p style={{fontSize:"13px"}}>HTML | CSS | JavaScript</p>
                </div>
                <Flex mt={'30px'} pt={'20px'} justifyContent={'space-evenly'}>
                <button className={style.btn}>
                    Github
                </button>
                <button className={style.btn}>
                    Live
                </button>
                </Flex>
            </div>  
        </div>
    </SimpleGrid>
    </>
  )
}

export default Projects