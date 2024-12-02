import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [role, setRole] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, pass, role);
        setEmail("");
        setPass("");
        setRole("");
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>
            <div className='bg-white p-10 rounded-xl shadow-lg'>
                <h2 className='text-2xl font-bold mb-5 text-center text-gray-700'>Login</h2>
                <form className='flex flex-col items-center' onSubmit={submitHandler}>
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 w-full placeholder-gray-500 text-gray-700' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    <input 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)} 
                        required 
                        className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 w-full placeholder-gray-500 text-gray-700' 
                        type="password" 
                        placeholder='Enter your password' 
                    />
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)} 
                        required 
                        className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 w-full text-gray-700'
                    >
                        <option value="" disabled className='text-gray-500'>Select your role</option>
                        <option value="admin" className='text-gray-700'>Admin</option>
                        <option value="employee" className='text-gray-700'>Employee</option>
                    </select>
                    <button 
                        type="submit" 
                        className='bg-emerald-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-emerald-700 transition duration-300 w-full'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
