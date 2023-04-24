import React from 'react'

export const IndividualImage=({image})=> {
  return (
    <div>
        <img src={image.urls.small} alt="unsplash images"></img>
    </div>
  )
}
