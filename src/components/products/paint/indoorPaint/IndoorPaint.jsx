import React, { useContext } from 'react';
import { ShopContext } from '../../../shoppingCart/context/ShopContextProvider';

function IndoorPaint(props) {

    const { id, productName, price, image} = props.data;
    const { addToCart, CartItems } = useContext(ShopContext);
    const cartItemAmount = CartItems[id];

  return (
    <div className='tool'>
        <h3 className='tool__title'>{productName}</h3>
        <div className='tool__image'>
            <img src={image} />
        </div>
        <p className='tool__price'> ${price}</p>
        <button 
          className='tool__addToCart' 
          onClick={() => addToCart(id)}>Add to cart {cartItemAmount >  0 && <> ({cartItemAmount}) </>}
        </button>
    </div>  )
}

export default IndoorPaint