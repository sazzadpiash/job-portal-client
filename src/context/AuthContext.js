import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

export const Auth = createContext({});
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    const signIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const logOut = () =>
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    const authValue = {
        googleSignIn,
        loading,
        user,
        logOut,
        createUser,
        signIn,
        setUser,
        setLoading,
    };
    return <Auth.Provider value={authValue}>{children}</Auth.Provider>;
};

export default AuthContext;
