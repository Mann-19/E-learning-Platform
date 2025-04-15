import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");
    const [qualification, setQualification] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState("");

    return (
        <form className="w-[30vw] my-10 mx-auto flex flex-col">
            <h3 className="text-3xl font-bold text-center mb-10">Sign Up</h3>

            
            <label className="text-lg mb-1 font-semibold">Name:</label>
            <input
                type="text"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                value={name}
                className="px-5 py-2 rounded-lg outline-none text-base border-2 border-gray-300"
            />

            
            <label className="text-lg mb-1 font-semibold mt-5">Email:</label>
            <input
                type="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                value={email}
                className=" px-5 py-2 rounded-lg outline-none text-base border-2 border-gray-300"
            />

            <label className=" text-lg mb-1 font-semibold mt-5">Password:</label>
            <input
                type="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
                className=" px-5 py-2 rounded-lg outline-none text-base border-2 border-gray-300"
            />

        
            <label className="text-lg mb-1 font-semibold mt-5">Account Type:</label>
            <select                
                onChange={(e) => {
                    setAccountType(e.target.value);
                }}
                value={accountType}
                className="px-5 py-2 rounded-lg outline-none text-base border-2 border-gray-300"
            >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
            </select>

            
            <label className="text-lg mb-1 font-semibold mt-5">Qualification:</label>
            <select
                onChange={(e) => {
                    setQualification(e.target.value);
                }}
                value={qualification}
                className="px-5 py-2 rounded-lg outline-none text-base border-2 border-gray-300"
            >
                <option value="Undergrad">Undergrad</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgrad">Postgrad</option>
                <option value="PhD">PhD</option>
            </select>

            
            <button disabled={isLoading} className=" mt-8 bg-blue-300 text-white py-2 px-6 rounded-lg text-lg font-semibold">Login</button>
            {error && <div className="text-base text-red-400">{error}</div>}
        </form>
    );
};

export default SignUp;
