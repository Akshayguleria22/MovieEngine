import React from 'react'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import Favourite from './pages/Favourite';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';
const App = () => {
  
  return (
    <>
      <MovieProvider >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourites" element={<Favourite/>}/>
      </Routes>
      </MovieProvider>
    </>
  );
}

export default App
