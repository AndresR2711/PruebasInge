import "photoswipe/dist/photoswipe.css";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { RViewer, RViewerTrigger } from "react-viewerjs";

export function MyGallery({ images, deleteImage }) {
  const [imagesUrls, setImagesUrls] = useState(
    images.map((blob) => URL.createObjectURL(blob))
  );

  useEffect(() => {
    setImagesUrls(images.map((blob) => URL.createObjectURL(blob)));
  }, [images]);

  return (
    <>
      <div className="bg-slate-300 w-full h-[17rem] overflow-auto">
        <RViewer imageUrls={imagesUrls}>
          <div className="grid grid-cols-3  gap-3 h-[10rem] rounded-md">
            {imagesUrls.map((img, index) => (
              <div className="rounded-md bg-white h-[14rem]">
                <RViewerTrigger index={index}>
                  <img
                    src={img}
                    key={index}
                    className="w-100 h-[80%] rounded-md"
                  />
                </RViewerTrigger>
                <div className="w-100 text-center h-[15%]">
                  <Button
                    onClick={() => {
                      deleteImage(index);
                    }}
                    color=""
                    className="m-2"
                    variant="outline-primary"
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </RViewer>
      </div>
    </>
  );
}

{
  /* <div className="bg-slate-300 w-full h-[17rem] overflow-auto">
<div className="grid grid-cols-3  gap-3">
  {imagesUrls.map((img, index) => (
    <div>
      <div onClick={() => setShow(true)} key={index} className="bg-white h-[15rem] rounded-md">
        <img
          src={img}
          onClick={() => openImageViewer(index)}
          width="300"
          
          key={index}
          // style={{ margin: "2px" }}
          className="w-100 h-[80%] rounded-md"
        />
        
        <div className="w-100 text-center h-[15%]">
          <Button
            onClick={() => {
              deleteImage(index);
            }}
            color=""
            className="m-2"
            variant="outline-primary"
          >
            <BsFillTrashFill></BsFillTrashFill>
          </Button>
        </div>
      </div>
    </div>
  ))}
</div>

<Modal className="bg-transparent" style={{backgroundColor:"transparent"}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
<Modal.Header closeButton>
</Modal.Header>
<Modal.Body>
<ZoomImage image={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"}></ZoomImage>
</Modal.Body>
</Modal>

{/* {isViewerOpen && (
  // <ImageViewer
  //   src={imagesUrls}
  //   currentIndex={currentImage}
  //   onClose={closeImageViewer}
  //   disableScroll={false}
  //   backgroundStyle={{
  //     backgroundColor: "rgba(0,0,0,0.9)",
  //   }}
  //   closeOnClickOutside={true}
  // />
  
)}
</div> */
}
