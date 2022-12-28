import React from 'react'

function CardInfo({imageSrc, title, content, contentSecond, outro}) {
  return (
    <div className='card-info'>
        <img src={imageSrc} className="card-info--image"/>
        <div className='card-info--wrapper'>
            <h3 className='card-info--title'>
                {title}
            </h3>
            
            <span className='card-info--items'>
                <p>
                    {content}
                </p>
                <p>
                    {contentSecond}
                </p>
            </span>
            <span className='card-info--outro'>
                <h3>
                    {outro}
                </h3>
            </span>
        </div>
    </div>
  )
}

export default CardInfo