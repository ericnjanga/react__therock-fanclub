import React from 'react';

const Figure = (props)=>{
  const { img, alt, caption } = props;
  return( 
    img && <figure className="Figure">
      <img className="img-fluid" src={img} alt={ alt?alt:''} />
      { caption && <figcaption>{caption}</figcaption> }
    </figure>  
  );
}

export default Figure;