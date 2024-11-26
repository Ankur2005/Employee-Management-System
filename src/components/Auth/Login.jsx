import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [role,setRole] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, pass, role);
        setEmail("");
        setPass("");
        setRole("");
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input value={pass} onChange={(e) => {
                        setPass(e.target.value);
                    }} required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                    <div className="relative w-full">
                        <select placeholder="Select the role"
                            className="appearance-none outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full text-gray-400 focus:border-emerald-700 w-full cursor-pointer"
                            value={role}
                            onChange={(e)=>{
                                setRole(e.target.value);
                            }}
                        >   
                        <option className="bg-gray-800 text-white hover:bg-emerald-100" value="" disabled>
                                Select the Role
                            </option>
                            <option className="bg-gray-800 text-white hover:bg-emerald-100" value="admin">
                                Admin
                            </option>
                            <option className="bg-gray-800 text-white hover:bg-emerald-100" value="employee">
                                Employee
                            </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>

                    <button className='mt-5 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
