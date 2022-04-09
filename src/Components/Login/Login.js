import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div>
            <h3>Login</h3>
            <form >
                
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;