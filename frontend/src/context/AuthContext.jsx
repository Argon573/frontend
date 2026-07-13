import { createContext, useState } from 'react';

const AuthContext = createContext({
    auth: false,
    setAuth: () => {}
});

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);

    const value = {
        auth,
        setAuth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;