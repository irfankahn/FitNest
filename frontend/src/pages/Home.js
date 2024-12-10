import React from 'react';
import 'animate.css';
import fitnessImage from '../images/fitness.jpg'; // Import image

const Home = () => {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white p-6"
            style={{ backgroundImage: `url(${fitnessImage})` }} // Inline background image style
        >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide text-center animate__animated animate__fadeInUp animate__delay-1s">
                Welcome to FitNest
            </h1>
            <p className="text-lg sm:text-2xl mt-4 text-center animate__animated animate__fadeInUp animate__delay-1.5s">
                Your fitness journey starts here!
            </p>
        </div>
    );
};

export default Home;
