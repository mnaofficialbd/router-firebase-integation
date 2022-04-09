import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user}=useFirebase();
    return (
        <div>
            <h2>Took!!! Took!! Who is there</h2>
            <h3>{user?user.displayName : " Nobody"}</h3>
        </div>
    );
};

export default Products;