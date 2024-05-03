import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import PLP from './Pages/PLP/PLP'
import PDP from './Pages/PDP/PDP'
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeContextProvider from './context/ThemeContextProvider'
import AuthContextProvider from './context/AuthContextProvider'


const queryClient = new QueryClient();


function App() {
  return (
    <AuthContextProvider>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pokemons" element={<PLP />} />
            <Route path="/pokemons/:id" element={<PDP />} />
          </Routes>  
      </QueryClientProvider>
    </ThemeContextProvider>
    </AuthContextProvider>
  )
}

export default App
