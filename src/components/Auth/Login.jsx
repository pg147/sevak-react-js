// React imports
import React, {useState} from 'react';

// Icon Library imports
import {LockPasswordIcon, Mail01Icon, ViewIcon, ViewOffIcon} from "hugeicons-react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    // Form fields states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle the password visibility
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    // Function to handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();  // preventing default behaviour

        const formData = {
            email: email,
            password: password
        }

        console.log(formData); // temp

        // Cleanup
        setEmail("");
        setPassword("");
    }

    return (
        <div className={"h-fit w-full max-w-[400px] mx-auto flex flex-col space-y-5 p-6 bg-tile rounded-4xl box-border"}>
            <h1 className={"text-2xl font-bold text-center text-heading"}>Log into your account</h1>

            {/* Input form for Email and Password */}
            <form onSubmit={handleFormSubmit}>
                {/* Input fields */}
                <div className={"flex flex-col space-y-4 h-fit w-full"}>
                    {/* Email Input */}
                    <div className={"h-fit w-full flex flex-col space-y-2"}>
                        <label htmlFor={"email"} className={"text-heading"}>Email</label>
                        <div
                            id={"email"}
                            className={"relative h-fit w-full cursor-pointer"}
                        >
                            {/* Leading icon */}
                            <Mail01Icon className={"text-primary absolute my-auto mx-4 inset-y-0 size-5 pointer-events-none"}/>

                            {/* Input field */}
                            <input
                                required={true}
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={"h-fit w-full outline-none text-textInput focus:bg-input focus:border-primary border-[1.5px] border-stroke rounded-2xl pl-11 py-3"}
                                placeholder={"e.g. kakanattu@gmail.com"}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className={"h-fit w-full flex flex-col space-y-2"}>
                        <label htmlFor={"password"} className={"text-heading"}>Password</label>
                        <div
                            id={"password"}
                            className={"relative h-fit w-full cursor-pointer"}
                        >
                            {/* Leading icon */}
                            <LockPasswordIcon className={"text-primary absolute my-auto mx-4 inset-y-0 size-5 pointer-events-none"}/>

                            {/* Input field */}
                            <input
                                required={true}
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={"h-fit w-full outline-none text-textInput focus:bg-input focus:border-primary border-[1.5px] border-stroke rounded-2xl pl-11 py-3"}
                                placeholder={"Your password"}
                            />

                            {/* Conditional trailing icon */}
                            {showPassword ? <ViewIcon onClick={handlePasswordVisibility}
                                                      className={"absolute mx-4 my-auto right-0 inset-y-0 size-5 text-textInput"}/> :
                                <ViewOffIcon onClick={handlePasswordVisibility}
                                             className={"absolute mx-4 my-auto right-0 inset-y-0 size-5 text-textInput"}/>}
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
                    <a href="#" className={"text-sm text-primary lg:hover:underline"}>Forgot password ?</a>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={"cursor-pointer mt-5 w-full h-fit py-3 rounded-2xl bg-primary hover:bg-primary/80 transition-all duration-300 ease-in-out text-white"}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;