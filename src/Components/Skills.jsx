import Slider from "react-slick";
import SkillCard from "./SkillCard";
import { Box, Heading } from "@chakra-ui/react";

const SkillsImg = [
  {
    src: "https://sachin-kumar-keshri-portfolio.netlify.app/static/media/html_logo.2fcf94ab.png",
    name: "HTML",
  },
  { src: "https://cdn-icons-png.flaticon.com/512/919/919826.png", name: "CSS" },
  {
    src: "https://sachin-kumar-keshri-portfolio.netlify.app/static/media/JavaScript_Logo.2e10b2a2.png",
    name: "JavaScript",
  },
  {
    src: "data:image/png;base64,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",
    name: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    name: "Redux",
  },

  {
    src: "https://camo.githubusercontent.com/c457309037aabdce151cc0e197d6db98234a31636ef41f2cc1c339832fe20de3/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f6c6f676f732f6e6578746a732d6c6f676f2e706e67",
    name: "Next.js",
  },
  {
    src: "https://external-preview.redd.it/bpj8UAYC3vJ1Zvve83Ai-x0_iNl-pZVaD7YswP7-jp4.jpg?width=640&crop=smart&auto=webp&s=2ff425fecc739489ea39cb1f9f7e75865508aea4",
    name: "Chakra UI",
  },
  {
    src: "https://sachin-kumar-keshri-portfolio.netlify.app/static/media/materialUi_logo.5b2d8a0a.png",
    name: "MIUI",
  },
  {
    src: "https://www.soat.fr/assets/images/formation/NodeJS.png",
    name: "Node.js",
  },
  {
    src: "data:image/png;base64,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",
    name: "Express",
  },
  {
    src: "data:image/png;base64,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",
    name: "Mongo DB",
  },
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX////FNzXKNjT039/TWljMMzHXeHfCJCPtxMTFOTf++/vDKSblqajUYF/13NvENDHOLyz57e3PT03or67jmpnioqH89vbELCrHRELJPz3biorMVVPOMzHUcXDFMS/PXFnZg4LfkpHSKSbaNTPcXFrMUU/pvr3ntbTYdnTuxMT67+8zQXVcAAAC8ElEQVR4nO3ca3OaQBSAYSRF5ZIoXkKMkZBLY5v//wObmU52DxmW7hGrQt5nOvlQXHZfyEzEAYMAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6J2roQt+DF0QDl0wGjoK+4/C/qOw/75VYfzxT6u2rxOP9txv7RyGkVYoh6tHR90m91uVLJw9jrW2Yvhmpx2924jAbaWe3eVx5vgtTZfqK5PMHq7Z9ZV29O3CDI/nK/XkTsvUcQ7TLNHuay0Lb7Sj8/9TmGSXWqie3YFCFQrbUXggClUobEfhgShsMq3ujSf5Iq/CfGVH30/lBp/CpDb5bfOqqlXerXD1/PBpHslJvAqvFnMz/DlTF2Z28odYhARPL5FZ1euNHKEvXBf26nKjL9zOzPBSXr/4FS5LO/mdLFyFm88N4XXXwtRcN4cHFZpXFfpzuCzsHPXCyK7qeIUxhRRSSCGFFFJIIYUUUkghhRRSSOGQC81SigM+iepB4c+i/DQZ5DnMq531NsTCJBfk6MEUOlFIIYUUUkghhZ73Jh65sDExOe85zJoLE1dh0lLovIM2k4VyIVmnwndZuHa9ai8La4dXFsrbd5130JbjZbP9r9IUjjbZ3m4Yj8wk7sLbvWO/2Z09QNHuzfGqcWmXuFmLyXd2dLiQG8ZmuV8KR2XabCJHjNKJkYrJ2+7FmDSThzouJ47ZxRwf15eODbNiYtdVG1F/3qJ+H7/8b7ml+b5/v3sxWh4b8PExxLVGu9OWpxF0k5kff/l8ihF/HX9Erv0d75kZv89pTo9CfxSeC4X+Blqo/GtxDt/gHDreUHmqvWtzPbuW28J4VHabUC+YdlKJg+V8/lA+ZlhW09/dptRyHHZf4uqp5RlS8Zpi33FGvaSD2hVwy5O8sjDrNuUhi+ykVuij0D+nel76wuzfO70oFFJ4+SgcQqHy45b+/bWIlN+8lfbtHC5fld+etjj9u7ZucvVX4L2fe8kAAAAAAAAAAAAAAAAAAAAAAAAAAADA5fsDyzPKUmhRuO4AAAAASUVORK5CYII=",
    name: "NPM",
  },
  {
    src: "data:image/png;base64,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",
    name: "Mongoose",
  },
  {
    src: "data:image/png;base64,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",
    name: "JWT",
  },
  {
    src: "data:image/png;base64,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",
    name: "Swagger",
  },
];

function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="skills" h={"fit-content"} bg={"#cbd5e0"}>
      <hr />
      <Heading textAlign={"center"} color={"blue.600"} mt={'10px'}>
        Technical Skills
      </Heading>
      <Slider {...settings}>
        {SkillsImg.map((el) => (
          <SkillCard key={el.src} src={el.src} name={el.name} />
        ))}
      </Slider>
    </Box>
  );
}

export default Skills;
