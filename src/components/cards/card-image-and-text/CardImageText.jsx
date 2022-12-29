import React from 'react'

function CardImageText( {cssClass, image} ) {
  return (
    <div className={cssClass}>
        <div className={cssClass + "-left"}>
            <div className={cssClass + "-imgContainer"}>
                <img src={image} alt="" className={cssClass + "-image"} />
            </div>
        </div>
        <div className={cssClass + "-right"}>
            <h2>Paint indoor</h2>
            <p>Here you will find all the colors you can imagine to spice up your room</p>
        </div>
    </div>
  )
}

export default CardImageText