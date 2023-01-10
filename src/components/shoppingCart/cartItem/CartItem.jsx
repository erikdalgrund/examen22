import React from 'react'

function CartItem(props) {

    const { id, productName, price, image } = props.data;

  return (
    <div className='cartItem'>
        <div className='cartItem__image'>
            <img src={image} />
        </div>
        <div className='cartItem__info'>
            <h3 className='cartItem__title'>{productName}</h3>
            <p className='cartItem__price'> ${price}</p>
        </div>
    </div>  
  )
}

export default CartItem
