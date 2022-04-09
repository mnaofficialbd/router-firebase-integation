import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import "./Home.css"
 const auth=getAuth(app)
const Home = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>Home Area</h2>
            <h4>Current user: {user? user.displayName : 'No Body'}</h4>
        </div>
    );
};

export default Home;