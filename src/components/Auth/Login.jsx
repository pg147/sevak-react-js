// React imports
import React, {useState} from 'react';

// Icon Library imports
import {LockPasswordIcon, Mail01Icon, ViewIcon, ViewOffIcon} from "hugeicons-react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    // Function to handle the password visibility
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    // Function to handle form submit
    const handleFormSubmit = () => {

    }

    return (
        <div className={"h-fit w-full max-w-[400px] mx-auto border-2 border-[#F5F5F5] flex flex-col space-y-5 p-6 bg-white rounded-4xl box-border"}>
            <h1 className={"text-2xl font-bold text-center"}>Log into your account</h1>

            {/* Input form for Email and Password */}
            <form onSubmit={handleFormSubmit}>
                {/* Input fields */}
                <div className={"flex flex-col space-y-4 h-fit w-full"}>
                    {/* Email Input */}
                    <div className={"h-fit w-full flex flex-col space-y-2"}>
                        <label htmlFor={"email"}>Email</label>
                        <div
                            id={"email"}
                            className={"relative h-fit w-full border-2 border-[#F5F5F5] rounded-2xl flex items-center px-4 py-3 cursor-pointer"}
                        >
                            {/* Leading icon */}
                            <Mail01Icon className={"size-5 pointer-events-none"}/>

                            {/* Input field */}
                            <input
                                type="text"
                                className={"ml-3 h-fit w-full outline-none"}
                                placeholder={"e.g. kakanattu@gmail.com"}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className={"h-fit w-full flex flex-col space-y-2"}>
                        <label htmlFor={"password"}>Password</label>
                        <div
                            id={"password"}
                            className={"relative h-fit w-full border-2 border-[#F5F5F5] rounded-2xl flex items-center justify-between py-3 px-4 cursor-pointer"}
                        >
                            <div className={"flex items-center"}>
                                {/* Leading Icon */}
                                <LockPasswordIcon className={"size-5 pointer-events-none"}/>

                                {/* Input field */}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={"w-full ml-3 outline-none bg-transparent"}
                                    placeholder={"Your password"}
                                />
                            </div>

                            {/* Conditional trailing icon */}
                            {showPassword ? <ViewIcon onClick={handlePasswordVisibility} className={"size-5"}/> :
                                <ViewOffIcon onClick={handlePasswordVisibility} className={"size-5"}/>}
                        </div>
                    </div>
                </div>

                {/* User controls */}
                <div className={"mt-3 w-full flex items-center justify-between"}>
                    {/* Remember me */}
                    <div className={"flex items-center space-x-2"}>
                        <input type="checkbox" name="rememberMe" id="rememberMe"/>
                        <label htmlFor={"rememberMe"} className={"text-sm font-medium"}>Remember Me</label>
                    </div>

                    {/* Forgot password link */}
                    <a href="#" className={"font-semibold text-sm"}>Forgot password ?</a>
                </div>

                {/* Submit Button */}
                <button type="submit" className={"cursor-pointer mt-5 w-full h-fit py-3 rounded-2xl bg-black hover:bg-black/80 transition-all duration-300 ease-in-out text-white"}>Submit
                </button>
            </form>

        </div>
    );
}

export default Login;