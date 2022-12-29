import React from 'react';
import { CardImageText } from '../../components/cards';

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
    </div>
  )
}

export default Indoor