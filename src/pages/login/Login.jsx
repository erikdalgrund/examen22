import React from 'react'

function Login() {
  return (
    <div className='loginPage'>
        <div className="form-wrapper">
            <div className='form-wrapper--login'>
                <h3> Login </h3>
                <label> Username </label>
                <input type="text" />
                <label htmlFor=""> Password </label>
                <input type="text" />
                <button> Login </button>
            </div>
            <div className="form-wrapper--register">
                <h3> register </h3>
                <label> Username </label>
                <input type="text" />
                <label htmlFor=""> Email </label>
                <input type="text" />
                <label htmlFor=""> Password </label>
                <input type="text" />
                <button> Register </button>
            </div>
        </div>
    </div>
  )
}

export default Login
