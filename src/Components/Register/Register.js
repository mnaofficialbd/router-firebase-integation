import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <div style={{margin: '20px'}}>
            <button>Google Sign In</button>
            </div>
            <form >
                <input type="text" placeholder='Your Name'/>
                <br />
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;