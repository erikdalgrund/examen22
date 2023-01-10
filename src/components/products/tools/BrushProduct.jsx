import React from 'react'

function BrushProduct(props) {
    const { id, productName, price, image} = props.data;
  return (
    <div className='tool'>
        <h3 className='tool__title'>{productName}</h3>
        <div className='tool__image'>
            <img src={image} />
        </div>
        <p className='tool__price'> ${price}</p>
        <button className='tool__addToCart'>Add to cart</button>
    </div>
  )
}

export default BrushProduct;
