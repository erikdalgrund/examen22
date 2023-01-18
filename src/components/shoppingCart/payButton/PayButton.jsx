import React from 'react'
import Axios from 'axios';

function PayButton({cartItems}) {

    const handleCheckout = () => {
        Axios.post('http://localhost:3000/create-checkout-session', {
            cartItems
        }).then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message));
    }
  return (
    <button onClick={handleCheckout}>Pay!</button>
  )
}

export default PayButton
