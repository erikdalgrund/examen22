import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider';


// Product data
import { paintBrushes, puttyKnife, rollers } from '../../productData/productTools'


function Cart() {

    const { cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
        <h3>Your Cart Items</h3>
        <div className='cart__items'>
            <div className='cart__items--brushes'>
                {paintBrushes.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default Cart