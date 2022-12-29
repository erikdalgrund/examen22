import React from 'react';
import { CardImageText } from '../../components/cards';

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
    </div>
  )
}

export default Outdoor