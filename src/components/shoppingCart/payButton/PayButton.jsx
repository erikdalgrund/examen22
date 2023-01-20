import React from 'react'
import Axios from 'axios';

function PayButton({cartItems}) {

    const url = 'http://localhost:3001'

    const handleCheckout = () => {
        const filteredItems = {}

        for (const [key, value] of Object.entries(cartItems)) {
          if (value > 0) {
            filteredItems[key] = value;
          }
          console.log(`${key}: ${value}`);
        }

        Axios.post(`${url}/create-checkout-session`, filteredItems)
        .then((res) => {
            console.log(res.data)
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
