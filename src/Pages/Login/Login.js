import React from 'react';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>login</h1>
            <button onClick={signInUsingGoogle}>google</button>
        </div>
    );
};

export default Login;