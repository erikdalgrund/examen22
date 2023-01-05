import React, { useState } from 'react';
import Axios from 'axios';

function Login() {

    // State for register new user
    const [usernameReq, setUsernameReq] = useState('');
    const [passwordReq, setPasswordReq] = useState('');
    const [emailReq, setEmailReq] = useState('');

    // State for login user
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // State for login message 
    const [loginStatus, setLoginStatus] = useState('');

    // Function for register new user
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReq,
            password: passwordReq,
            email: emailReq
        }).then((response) => {
            console.log(response);
        });
    }

    // Function for login user
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }
        });
    }

  return (
    <div className='loginPage'>
        <div className="form-wrapper">
            <div className='form-wrapper--login'>
                <h3> Login </h3>
                <label> Username </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}  
                />
                <label htmlFor=""> Password </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}  
                />
                <button onClick={login}> Login </button>
            </div>
            <div className="form-wrapper--register">
                <h3> register </h3>
                <label> Username </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setUsernameReq(e.target.value)
                    }} 
                />
                <label htmlFor=""> Email </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setEmailReq(e.target.value)
                    }} 
                />
                <label htmlFor=""> Password </label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setPasswordReq(e.target.value)
                    }} 
                />
                <button onClick={register}> Register </button>
            </div>
        </div>
        <h2>{loginStatus}</h2>
    </div>
  )
}

export default Login
