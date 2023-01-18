import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContextProvider';
import CartItem from '../cartItem/CartItem';

// Product data

import { paintBrushes, rollers, puttyKnife } from '../../../productData/productTools';
import { indoorColorArr } from '../../../productData/productIndoorColor';
import { outdoorColorArr } from '../../../productData/productOutdoorColor';
import PayButton from '../payButton';

function Cart() {

    const { CartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()

    return (
        <div className='cart'>
            <h3>Your Cart Items</h3>
            <div className='cart__items'>
                <div className='cart__items--brushes'>
                    {paintBrushes.map((product) => {  
                        if(CartItems[product.id] !==0 ) {
                            return <CartItem key= {product.id} data={ product } />   
                        }
                    })}
                </div>
                <div className='cart__items--puttyKnife'>
                    {puttyKnife.map((product) => { 
                        if(CartItems[product.id] !== 0) { 
                            return <CartItem key= {product.id} data={ product } /> 
                        }
                    })}
                </div>
                <div className='cart__items--rollers'>
                    {rollers.map((product) => {  
                        if(CartItems[product.id] !== 0) { 
                            return <CartItem key= {product.id} data={ product } />  
                        } 
                    })}
                </div>
                <div className='cart__items--indoorPaint'>
                    {indoorColorArr.map((product) => {  
                        if(CartItems[product.id] !== 0) { 
                            return <CartItem key= {product.id} data={ product } />  
                        } 
                    })}
                </div>
                <div className='cart__items--outdoorPaint'>
                    {outdoorColorArr.map((product) => {  
                        if(CartItems[product.id] !== 0) { 
                            return <CartItem key= {product.id} data={ product } />  
                        } 
                    })}
                </div>
            </div>
            <div className='cartItem__checkout'>
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate('/')}> Continue Shopping </button>
                <PayButton cartItems = {CartItems}/>
            </div>
        </div>
    )
}

export default Cart
