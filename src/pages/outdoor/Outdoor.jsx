import React from 'react';
import { CardImageText } from '../../components/cards';
import { outdoorColorArr } from '../../productData/productOutdoorColor';
import { OutdoorPaint } from '../../components/products';

function Outdoor() {
  return (
    <div className='outdoor'>
      <div className="outdoor-header">
        <CardImageText 
          cssClass="cardIndoor"
          image="/images/paint/can-of-paint.jpeg"
          title="Paint outdoor"
          content="Here you will find all the colors you can imagine to spice up f.eg your house"
          />
      </div>
      <div className='tools__allTools'>
          <div className='tools__title'>
              <h3>Indoor Paint</h3>
          </div>
          <div className='brush__wrapper'>
              {outdoorColorArr.map((paint) => {
                  return <OutdoorPaint key={paint.id} data={paint} />
              })}
          </div>
      </div>
    </div>
  )
}

export default Outdoor