import React, {useState} from "react";

import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({children}) =>{
    const [darkMode, setdarkMode] = useState(false);
    return(
        <ThemeContext.Provider value={{darkMode, setdarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
