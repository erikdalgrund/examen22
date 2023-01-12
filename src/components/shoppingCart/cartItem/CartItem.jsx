import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider';

function CartItem(props) {

    const { id, productName, price, image, description } = props.data;
    const { CartItems, addToCart, removeToCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='cartItem'>
        <div className='cartItem__image'>
            <img src={image} />
        </div>
        <div className='cartItem__info'>
            <h3 className='cartItem__title'>{productName}</h3>
            <p className='cartItem__description'>{description}</p>
            <p className='cartItem__price'> ${price}</p>
            <div className="cartItem__amount">
                <button onClick={() => removeToCart(id)}> - </button>
                <input value={CartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>  
  )
}

export default CartItem
