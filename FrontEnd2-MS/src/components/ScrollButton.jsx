import React, { useEffect, useState } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <>
    {showButton && (
          <BsFillArrowUpCircleFill onClick={scrollToTop} className='hover:text-gray-500 back-to-top z-10'/>
      )}
    </>
  )
}
