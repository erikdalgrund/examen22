import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { combineProducts } from '../../shoppingCart/context/ShopContextProvider';
import { ShopContext } from '../../shoppingCart/context/ShopContextProvider';

function OneProduct() {

    const { addToCart, CartItems } = useContext(ShopContext);
    const { id } = useParams(); 
    const cartItemAmount = CartItems[id]; 

    const singleProduct = combineProducts.find(product => product.id == id);

  return (
    <div className='cartItem'>
        <div className='cartItem__image'>
            <img src={singleProduct.image} />
        </div>
        <div className='cartItem__info'>
            <h3 className='cartItem__title'>{singleProduct.productName}</h3>
            <p className='cartItem__description'>{singleProduct.description}</p>
            <p className='cartItem__price'> ${singleProduct.price}</p>
            <button 
                className='tool__addToCart' 
                onClick={() => addToCart(id)}>Add to cart {cartItemAmount >  0 && <> ({cartItemAmount}) 
            </>}
            </button>
        </div>
    </div>  
  )
}

export default OneProduct
