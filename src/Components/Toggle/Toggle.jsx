import { useContext } from 'react';
import themeContext from '../../context/ThemeContext'
import "./Toggle.css";

export const Toggle = () => {
    const { darkMode, setdarkMode } = useContext(themeContext);
    const handleToggle = () => {
        setdarkMode(!darkMode); // Toggle darkMode value
      };
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={darkMode}
        onChange={handleToggle}
      />
      <label htmlFor="check"></label>
    </div>
  );
};