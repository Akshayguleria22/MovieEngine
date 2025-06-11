import { useContext } from "react";
import { MovieContext } from "./MovieContext"; // Adjust path as needed

export const useMovieContext = () => useContext(MovieContext);
