import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselVistaPrevia({ imgsPortada, nombre }) {


  return (
    <div className="w-100 h-[96]">
      <Carousel pause={"hover"} variant="light" className=" h-[33rem]">
        {imgsPortada.length == 0 ? (
          <>
            <Carousel.Item key={"src/assets/not-found.png"} className="">
              <img
                className="w-100 h-[33rem]"
                src={"src/assets/not-found.PNG"}
                // src={"src/assets/not-found.png"}
                
                alt="First slide"
                width=""
                height=""
              />
              <Carousel.Caption className="ml-0 justify-start">
                <div className="bg-black bg-opacity-50 text-center">
                  <h1 className="left-0 font-extrabold text-5xl justify-start">
                    {nombre}
                  </h1>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </>
        ) : imgsPortada.map((img) => (
          <Carousel.Item key={URL.createObjectURL(img)} className="">
            <img
              className="w-100 h-[33rem]"
              src={URL.createObjectURL(img)}
              alt="First slide"
              width=""
              height=""
            />
            <Carousel.Caption className="ml-0 justify-start">
              <div className="bg-black bg-opacity-50 text-center">
                <h1 className="left-0 font-extrabold text-5xl justify-start">
                  {nombre}
                </h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselVistaPrevia;
