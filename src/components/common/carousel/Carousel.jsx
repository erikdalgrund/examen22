import React, { useEffect, useState } from 'react'

function Carousel( {images} ) {
    
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = 
        autoPlay && setTimeout(() => {
            slideRight();
        }, 4000);
    });

    const slideRight = () => {
        setCurrent(current === images.length -1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length -1 : current -1);
    }

  return (
    <div className='carousel' 
            onMouseEnter={() => {
                setAutoPlay(false)
                }} 
            onMouseLeave={() => {
                setAutoPlay(true)
                clearTimeout(timeOut)
                }}>
        <div className='carousel-wrapper'>
            {images.map((image, index) => {
                return (
                    <div key={ index } className={ index == current
                            ? "carousel-card carousel-card--active" 
                            : "carousel-card"
                            }>
                            <img src={image.image} className='carousel-card--img' />
                            <div className="carousel-card--overlay">
                                <h2 className='carousel-card--title card-primary'>
                                    {image.title}
                                </h2>
                                <div className='carousel-card--content'>
                                    {image.content}
                                    <a href={image.href} className='button-info'> {image.link} </a>
                                </div>
                            </div>
                    </div>
                )
            })}
            <div className='carousel-arrow carousel-arrow--left' onClick={slideLeft}>&lsaquo;</div>
            <div className='carousel-arrow carousel-arrow--right' onClick={slideRight}>&rsaquo;</div>
        </div>
    </div>
  )
}

export default Carousel