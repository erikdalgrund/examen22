import React from 'react'

function Carousel( {images} ) {
  return (
    <div className='carousel'>
        <div className='carousel-wrapper'>
        {images.map((image, index) => {
            return (
                <div key={index} className="carousel-card">
                    <img src={image.image} alt="" />
                    <h2 className='carousel-card--title'>
                        {image.title}
                    </h2>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Carousel