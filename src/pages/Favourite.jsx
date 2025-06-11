import React from 'react';
import { useMovieContext } from '../contexts/useMovieContext';
import MovieCard from '../components/MovieCard';

const Favourite = () => {
  const { favourites } = useMovieContext();

  if (!favourites || favourites.length === 0) {
    return (
      <div className="flex items-center justify-center m-12">
        <div className="flex flex-col items-center border-2 m-6 p-15 w-fit border-red-400 justify-center">
          <h2 className="text-2xl font-bold text-red-600">No Favourite Movies Yet</h2>
          <p className="text-[13px] font-semibold text-gray-200">Start adding movies to your Favourites</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-white text-center my-4">Your Favourites</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3 m-4">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
