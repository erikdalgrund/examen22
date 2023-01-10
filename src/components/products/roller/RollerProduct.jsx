import React, { useContext } from 'react'
import { ShopContext } from '../../shoppingCart/context/ShopContextProvider';

function RollerProduct(props) {

    const { id, productName, price, image} = props.data
    const { addToCart } = useContext(ShopContext);

  return (
    <div className='tool'>
        <h3 className='tool__title'>{productName}</h3>
        <div className='tool__image'>
            <img src={image} />
        </div>
        <p className='tool__price'> ${price}</p>
        <button 
          className='tool__addToCart' 
          onClick={() => addToCart(id)}>Add to cart
        </button>
    </div>  
  )
}

export default RollerProduct