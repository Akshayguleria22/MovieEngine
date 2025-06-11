import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites");
        if (storedFavs) setFavourites(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const addToFav = (movie) => {
        if (!favourites.some((fav) => fav.id === movie.id)) {
            setFavourites((prev) => [...prev, movie]);
        }
    };

    const removeFav = (movieid) => {
        setFavourites((prev) => prev.filter((movie) => movie.id !== movieid));
    };

    const isFav = (movieid) => {
        return favourites.some((movie) => movie.id === movieid);
    };

    return (
        <MovieContext.Provider value={{ favourites, addToFav, removeFav, isFav }}>
            {children}
        </MovieContext.Provider>
    );
};
