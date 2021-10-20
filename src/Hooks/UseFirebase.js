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
        login ? signInUsingEmail(email, password, name) : createWithEmailAndPassword(email, password, name)
    }

    const createWithEmailAndPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((result) => {
                setUser(result.user);
                result.user.displayName = name;
                setName(result.user.displayName);
                console.log(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const signInUsingEmail = (email, password, name) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password, name)
            .then((result) => {
                setUser(result.user);
                result.user.displayName = name;
                setName(result.user.displayName);
                setError("");
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    /* Email Sign In */

    /* Google Sign In */
    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        /* .then((result) => {
            setUser(result.user);
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false)); */
    }

    /* Observer */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setName(user.displayName);
            } else {
                setUser({});
                setName("");
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