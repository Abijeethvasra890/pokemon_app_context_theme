import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import AuthContext from "./AuthContext";

const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);
    
    const toggleDarkMode = () => {
        if (isAuthenticated) {
            setDarkMode(prevDarkMode => !prevDarkMode);
        } else {
            alert("User not authenticated. Cannot change theme.");
        }
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
