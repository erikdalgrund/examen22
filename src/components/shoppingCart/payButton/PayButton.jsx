import React from 'react'
import Axios from 'axios';

function PayButton({cartItems}) {

    const url = 'http://localhost:3001'

    const handleCheckout = () => {
        Axios.post(`${url}/create-checkout-session`, cartItems)
        .then((res) => {
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
