import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import ImageViewer from "react-simple-image-viewer";

export function Viewer({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imagesUrls, setImagesUrls] = useState(images.map(blob => URL.createObjectURL(blob)));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    setImagesUrls(images.map(blob => URL.createObjectURL(blob)))

  }, [images])
  


  return (
    <div>
      <div className="row">  
        {imagesUrls.map((img, index) => (
          <>
            <div key={index} className="col-sm-4">
              <img
                src={img}
                onClick={() => openImageViewer(index)}
                width="300"
                key={index}
                style={{ margin: "2px" }}
                alt=""
                className="rounded-md"
              />
            </div>
          </>
        ))} 
      </div> 

      {isViewerOpen && (
        <ImageViewer
          src={imagesUrls}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}
