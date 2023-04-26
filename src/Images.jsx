import React from 'react';
import {IndividualImage} from './IndividualImage'


const Images=({images})=>{

    return (
        images.map((image)=>(
            <IndividualImage key={image.id} image={image}></IndividualImage>
        ))
    )
  
    
}

export default Images;