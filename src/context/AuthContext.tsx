import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};

// import React from 'react';
// import {
//     onAuthStateChanged,
//     getAuth,
// } from 'firebase/auth';
// import firebase_app from '@/firebase/config';

// const auth = getAuth(firebase_app);

// export const AuthContext = React.createContext({});

// export const useAuthContext = () => React.useContext(AuthContext);

// export const AuthContextProvider = ({
//     children,
// }) => {
//     const [user, setUser] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser(null);
//             }
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {loading ? <div>Loading...</div> : children}
//         </AuthContext.Provider>
//     );
// };