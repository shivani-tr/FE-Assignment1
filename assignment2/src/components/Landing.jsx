import React from "react";
import Dashboard from "./Dashboard";
import TestPage from "../pages/TestPage";
import { Link } from "react-router-dom";
const Landing = () => {
    return(
        <>
        <div className="">
        <div className="relative">

            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-28 w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <h1 className='text-5xl font-bold text-black mb-20 p-10'>Stock Market Analysis</h1>
        <Dashboard/>
        <div className="mt-10 pt-10 pb-10">
            <Link to="/products"><button className="p-3 text-white font-semi-bold rounded-md bg-indigo-700" >Browse Products</button></Link>
        </div>
        <div className="pt-1">
            <Link to="/assignment1" className="text-black/50 font-bold">Go to Assignment-1 (Test table)</Link>    
        </div>        
        </div>
        </>
    );
}

export default Landing