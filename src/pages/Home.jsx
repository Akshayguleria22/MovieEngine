import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from '../services/api'
const Home = () => {
    const [movies, SetMovies] = useState([]);
    const [error, SetError] = useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        const load = async () => {
            try {
                const popularmovies = await getPopularMovies()
                SetMovies(popularmovies)
            } catch (err) { 
                console.log(err)
                SetError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        load()
    },[])
    const HandleSubmit =async (e) => {
        e.preventDefault()
        if (!search.trim()) return
        setLoading(true)
        if (loading) return
        try {
            const searchresults = await searchMovies(search)
            SetMovies(searchresults)
            SetError(null)
        } catch (err) {
            console.log(err)
            SetError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    }
    const [search,SetSearch]=useState("")
    return (
        <div className="flex flex-col">
            <div className="text-[20px] font-semibold">
                <form onSubmit={HandleSubmit} className="flex flex-row justify-center items-center">
                    <input type="text" className="border text-white text-2xl border-white p-4 m-4" value={search} onChange={(e)=>SetSearch(e.target.value)} placeholder="Search For The Movies...." />
                    <button className="border p-3 border-gray-400 w-30 hover:cursor-pointer hover:bg-red-400 text-white bg-red-800 rounded" type="submit">Search</button>
                </form>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            {loading ? <div className="text-white flex items-center justify-center">Loading...</div> : <div className="grid md:grid-cols-4 m-4 gap-3 sm:grid-cols-2">
                {movies.map((movie) =>
                    <MovieCard movie={movie} key={movie.id} />)
                }
            </div>}
            
        </div>
    )
}

export default Home
