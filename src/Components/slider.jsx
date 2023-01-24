
import { Image } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel
      style={{
        width: "100%",
        height: "350px",
        border: "0px solid red",
      }}
    >
      <Carousel.Item
        style={{ border: "0px solid yellow", width: "100%", height: "350px" }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          className="d-block w-100"
          src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item
        style={{ border: "0px solid yellow", width: "100%", height: "350px" }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          className="d-block w-100"
          src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item
        style={{ border: "0px solid yellow", width: "100%", height: "350px" }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          className="d-block w-100"
          src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
