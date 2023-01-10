import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextProvider';
import CartItem from '../cartItem/CartItem'
// Product data
import { paintBrushes, rollers, puttyKnife } from '../../../productData/productTools';

function Cart() {

    const { CartItems } = useContext(ShopContext);
    console.log(CartItems)
  return (
    <div className='cart'>
        <h3>Your Cart Items</h3>
        <div className='cart__items'>
            <div className='cart__items--brushes'>
                {paintBrushes.map((product) => {  
                    if(CartItems[product.id] !==0 ) {
                        return <CartItem key= {product.id} data={ product } /> ;  
                    }
                })};
            </div>
            <div className='cart__items--puttyKnife'>
                {puttyKnife.map((product) => { 
                     if(CartItems[product.id] !== 0) { 
                        return <CartItem key= {product.id} data={ product } /> ;
                     }
                })};
            </div>
            <div className='cart__items--rollers'>
                {rollers.map((product) => {  
                    if(CartItems[product.id] !== 0) { 
                        return <CartItem key= {product.id} data={ product } /> ; 
                    } 
                })};
            </div>
        </div>
    </div>
  )
}

export default Cart
