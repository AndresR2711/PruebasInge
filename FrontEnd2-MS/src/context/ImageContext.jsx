import { createContext, useState, useEffect } from "react";
import React from "react";

export const ImageContext = createContext();

export function ImageContextProvider(props) {
  const n=0;
  const imageData = [];

  const [images, setImages] = useState([]);

  function addImage(newImage){
      setImages([...images,{
        id:newImage.id,
        url:newImage.url
      }])
  }

  function deleteImage(id) {
    setImages(images.filter((image) => image.id !== id));
    // console.log("delete")
  }

  useEffect(() => {
    setImages(imageData);
  }, []);

  return (
    <ImageContext.Provider
      value={{
        images,
        addImage,
        deleteImage
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
}
