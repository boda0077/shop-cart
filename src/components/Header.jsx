import React from 'react';


const Header = () => {
    return (
        <header className=" h-[50rem]  grid justify-center items-center text-white p-4 ">
            <div>
                <h1  className="text-[5rem] font-bold text-center text-white max-md:text-5xl">Welcome to ShoPpP</h1>
            <p className="text-gray-600  text-2xl text-center mt-2">Your one-stop shop for all your needs</p>
            </div>
            
        </header>
    );
};

export default Header;