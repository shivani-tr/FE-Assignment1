import React from "react";
import Dashboard from "./Dashboard";
const Landing = () => {
    return(
        <>
        <div className="">
        <div className="relative">

            <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-28 w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <h1 className='text-5xl font-bold text-black mb-20 p-10'>Stock Market Analysis</h1>
        <Dashboard/>
        </div>
        </>
    );
}

export default Landing