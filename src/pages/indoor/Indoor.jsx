import React from 'react';
import { CardImageText } from '../../components/cards';
import { IndoorPaint } from '../../components/products';
import { indoorColorArr } from '../../productData/productIndoorColor';

function Indoor() {
  return (
    <div className='indoor'>
      <div className="indoor-header">
        <CardImageText 
          cssClass="cardIndoor"
          image="/images/paint/can-of-paint.jpeg"
          title="Paint indoor"
          content="Here you will find all the colors you can imagine to spice up your room"
          />
      </div>
      <div className='tools__allTools'>
          <div className='tools__title'>
              <h3>Indoor Paint</h3>
          </div>
          <div className='brush__wrapper'>
              {indoorColorArr.map((paint) => {
                  return <IndoorPaint key={paint.id} data={paint} />
              })}
          </div>
      </div>
    </div>
  )
}

export default Indoor