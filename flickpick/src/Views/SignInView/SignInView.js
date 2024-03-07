import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export function SignInView({ onSignIn }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignIn = async () => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            onSignIn(userCredential.user); 
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignUp = async () => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            onSignIn(userCredential.user);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Sign In or Create Account</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Create Account</button>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default SignInView;
