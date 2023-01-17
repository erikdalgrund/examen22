import React, { createContext, useState } from 'react'
import { paintBrushes, rollers, puttyKnife } from '../../../productData/productTools';
import { indoorColorArr } from '../../../productData/productIndoorColor';
import { outdoorColorArr } from '../../../productData/productOutdoorColor'; 


// In here is functionality for the shopping cart 

export const ShopContext = createContext(null);

export const combineProducts = paintBrushes.concat(rollers, puttyKnife, indoorColorArr, outdoorColorArr);

export const GetDefaultCart = () => {

    let cart = {}

    for (let i = 1; i < 
        paintBrushes.length + 
        rollers.length + 
        puttyKnife.length +
        indoorColorArr.length +
        outdoorColorArr.length + 1; i++) {
        cart[i] = 0
    }

    return cart;
}
function ShopContextProvider(props) {

    const [CartItems, setCartItems] = useState(GetDefaultCart());

    const addToCart = (itemId) => {
        setCartItems(( prev => ({...prev, [itemId]: prev[itemId] + 1 })))
    };

    const removeToCart = (itemId) => {
        setCartItems(( prev => ({...prev, [itemId]: prev[itemId] - 1 })))
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0; 
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = combineProducts.find((product) => product.id === Number(item));
                totalAmount += CartItems[item] * itemInfo.price 
             }
        }   
        return totalAmount
    };

    const contextValue = {   
        CartItems, 
        addToCart, 
        removeToCart, 
        updateCartItemCount,
        getTotalCartAmount,
    };

    // console.log(CartItems)


  return <ShopContext.Provider value={contextValue}> { props.children } </ShopContext.Provider>;

}

export default ShopContextProvider
