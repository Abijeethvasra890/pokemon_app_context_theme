import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    const login = (name) => {
        setIsAuthenticated(true);
        setUserName(name);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserName('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userName }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
