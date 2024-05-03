import { useContext } from 'react';
import themeContext from '../../context/ThemeContext'
import "./Toggle.css";
import AuthContext from '@/context/AuthContext';

export const Toggle = () => {
    const { darkMode, toggleDarkMode } = useContext(themeContext);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={darkMode}
        onChange={()=>toggleDarkMode()}
      />
      <label htmlFor="check"></label>
    </div>
  );
};