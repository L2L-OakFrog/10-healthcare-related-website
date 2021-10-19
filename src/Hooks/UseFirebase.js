import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase-init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();

    /* Email Sign In */
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        setLogin(e.target.checked);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be minimum 6 characters')
            return;
        }
        login ? signInUsingEmail(email, password) : createWithEmailAndPassword(email, password, name)
    }

    const createWithEmailAndPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((result) => {
                setUser(result.user);
                result.user.displayName = name;
                setName(name);
                console.log(result.user);
                setError("");
            });
    }
    const signInUsingEmail = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .finally(() => setLoading(false));
    }
    /* Email Sign In */

    /* Google Sign In */
    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .finally(() => setLoading(false));
    }

    /* Observer */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    /* Sign Out */
    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }
    return {
        user,
        loading,
        login,
        error,
        signInUsingGoogle,
        handleName,
        handleEmail,
        handlePassword,
        handleLogin,
        handleRegister,
        logout
    }
}

export default useFirebase;