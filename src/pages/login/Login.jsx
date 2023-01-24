import React, { useEffect, useState } from 'react';
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

    // Axios default connection
    Axios.defaults.withCredentials = true;

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
    };

    // Function for logout 

    const logout = () => {
        Axios.post('http://localhost:3001/logout')
        console.log('test')
    }

    // Axios state to see if user is logged in 
    useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username)
            }
        });
    }, [])

  return (
    <div className='loginPage'>
        <div className="form-wrapper">
            <div className='form-wrapper--login'>
                <h3 className='form-wrapper--login-title'> Login </h3>
                <label className='form-wrapper--login-label'> Username </label>
                <input 
                    className='form-wrapper--login-input'
                    type="text"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}  
                />
                <label className='form-wrapper--login-label'> Password </label>
                <input 
                    className='form-wrapper--login-input'
                    type="text"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}  
                />
                <button className="form-wrapper--login-btn" onClick={ login }> Login </button>
                <button className="form-wrapper--login-btn" onClick={ logout }> Logout </button>
            </div>
            <div className="form-wrapper--register">
                <h3 className="form-wrapper--register-title"> Register </h3>
                <label className="form-wrapper--register-label"> Username </label>
                <input 
                    className="form-wrapper--register-input"
                    type="text"
                    onChange={(e) => {
                        setUsernameReq(e.target.value)
                    }} 
                />
                <label className="form-wrapper--register-label"> Email </label>
                <input 
                    className="form-wrapper--register-input"
                    type="text"
                    onChange={(e) => {
                        setEmailReq(e.target.value)
                    }} 
                />
                <label className="form-wrapper--register-label"> Password </label>
                <input 
                    className="form-wrapper--register-input"
                    type="text"
                    onChange={(e) => {
                        setPasswordReq(e.target.value)
                    }} 
                />
                <button className="form-wrapper--register-btn" onClick={register}> Register </button>
            </div>
        </div>
        <div className='loginPage--user'>
            <h2>{loginStatus}</h2>        
        </div>
    </div>
  )
}

export default Login
