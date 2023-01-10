import React, { createContext, useState } from 'react'
import { paintBrushes, rollers, puttyKnife } from '../../../productData/productTools';

export const ShopContext = createContext(null);

export const GetDefaultCart = () => {

    let cart = {}

    for (let i = 1; i < paintBrushes.length + rollers.length + puttyKnife.length + 1; i++) {
        cart[i] = 0
    }

    return cart;
}

function ShopContextProvider(props) {

    const [CartItems, setCartItems] = useState(GetDefaultCart());

    const addToCart = (itemId) => {
        setCartItems(( prev => ({...prev, [itemId]: prev[itemId] + 1 })))
    }

    const removeToCart = (itemId) => {
        setCartItems(( prev => ({...prev, [itemId]: prev[itemId] - 1 })))
    }

    const contextValue = { CartItems, addToCart, removeToCart };

    // console.log(CartItems)


  return <ShopContext.Provider value={contextValue}> { props.children } </ShopContext.Provider>;

}

export default ShopContextProvider
