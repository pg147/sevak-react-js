import React from 'react';

function Header({ userName }) {
    return (
        <div className={"w-full flex items-center justify-between text-heading"}>
            <h1 className={"text-xl"}>Hello, <span className={"text-2xl font-bold"}>{userName} &#x1F44B;</span></h1>
            <button
                type="submit"
                className={"cursor-pointer px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/80 transition-all duration-300 ease-in-out text-white"}
            >
                Logout
            </button>
        </div>
    );
}

export default Header;