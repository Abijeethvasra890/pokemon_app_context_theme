import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import ThemeContext from '@/context/ThemeContext';
import '../Home/Home.css'

const Home = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <>
      <Navbar />
      <div className = {`home ${darkMode ? 'dark' : ''}`} style={{ padding: '20px' }}>
        <h1 className = {`text ${darkMode ? 'dark' : ''}`}>Welcome to Our Pokémon App!</h1>
        {/*<h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>*/}
        <p className = {`text ${darkMode ? 'dark' : ''}`}>
          This is a fun and interactive application where you can explore information about various Pokémon.
          Whether you're a seasoned Pokémon Trainer or just starting your journey, our app has something for everyone!
        </p>
        <p className = {`text ${darkMode ? 'dark' : ''}`}>
          Get started by browsing through the Pokédex, discovering the unique abilities, base experience, height, and weight of each Pokémon.
          You can also search for specific Pokémon or navigate through different pages to find the information you need.
        </p>
        <p className = {`text ${darkMode ? 'dark' : ''}`}>
          Ready to begin your adventure? Start exploring now!
        </p>
      </div>
    
  
    </>
  );
};

export default Home;
