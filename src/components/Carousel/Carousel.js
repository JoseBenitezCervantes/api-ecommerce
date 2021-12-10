import React from "react";
import { Carousel } from "react-responsive-carousel";
import "css/Carrousel.css";
import dataMock from "./data";
import "./Carousel.sass"
const CarouselE = ({dataParam}) => {
  const data = dataParam ?? dataMock;
  return (
    <Carousel autoPlay showStatus={false}>
      {data.map((img) => (
        <img src={img.image} alt={img.title} className={dataParam ? "imgProd" : ""} key={img.title} />
      ))}
    </Carousel>
  );
};

export default CarouselE;
