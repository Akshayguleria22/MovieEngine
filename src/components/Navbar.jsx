import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex bg-black h-17 items-center text-white w-full justify-around flex-row">
            <div className="">
                <Link to="/" className="font-bold">Movie App</Link>
            </div>
            <div className="flex flex-row justify-around">
                <Link to="/" className="font-semibold m-2">Home</Link>
                <Link to="/Favourites" className="font-semibold m-2">Favourites</Link>
            </div>
        </div>
    )
}

export default Navbar
