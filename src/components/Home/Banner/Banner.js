import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h1>Stay Healthy and Fit With Your Coach</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h1>Reach Your Goal</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h1>Healthy Body Healthy Life</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
