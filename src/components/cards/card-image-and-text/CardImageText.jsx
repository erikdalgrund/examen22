import React from 'react'

function CardImageText( {cssClass, image, title, content} ) {
  return (
    <div className={cssClass}>
        <div className={cssClass + "-left"}>
            <div className={cssClass + "-imgContainer"}>
                <img src={image} alt="" className={cssClass + "-image"} />
            </div>
        </div>
        <div className={cssClass + "-right"}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default CardImageText