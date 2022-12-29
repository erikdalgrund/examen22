import React from 'react';
import { CardImageText } from '../../components/cards';

function Indoor() {
  return (
    <div className='indoor'>
      <div className="indoor-header">
        <CardImageText 
          cssClass="cardIndoor"
          image="/images/paint/can-of-paint.jpeg"
          />
      </div>
    </div>
  )
}

export default Indoor