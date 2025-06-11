import React from 'react';
import { useMovieContext } from '../contexts/useMovieContext';

const MovieCard = ({ movie }) => {
  const { isFav, addToFav, removeFav } = useMovieContext();
  const Favourite = isFav(movie.id);

  const fav = (e) => {
    e.preventDefault();
    if (Favourite) removeFav(movie.id);
    else addToFav(movie);
  };

  return (
    <div className="relative group transition-transform transform hover:scale-105 duration-300 ease-in-out bg-gray-900 rounded-lg overflow-hidden shadow-md">
      <button
        className={`absolute top-2 right-2 z-10 text-13 w-8 p-1 rounded-full transition-all ${Favourite ? 'bg-red-600 text-white' : 'bg-white text-red-600'
          } hover:scale-110`}
        onClick={fav}
        title={Favourite ? 'Remove from Favourites' : 'Add to Favourites'}
      >
        ♡
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[370px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white truncate">{movie.title}</h3>
        <p className="text-sm text-gray-300">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
