import React from 'react'

function CardInfo({imageSrc, title, content, contentSecond, outro, cssClass}) {
  return (
    <div className={cssClass}>
        <img src={imageSrc} className={cssClass + "--image"}/>
        <div className={cssClass + "--wrapper"}>
            <h3 className={cssClass + "--title"}>
                {title}
            </h3>
            <span className={cssClass + "--items"}>
                <p>
                    {content}
                </p>
                <p>
                    {contentSecond}
                </p>
            </span>
            <span className={cssClass + "--outro"}>
                <h3>
                    {outro}
                </h3>
            </span>
        </div>
    </div>
  )
}

export default CardInfo