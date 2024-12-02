import React from 'react'

const Header = ({ changeUser, data }) => {
    const logout = () => {
        localStorage.removeItem('loggedInUser');
        changeUser("");
    }

    return (
        <div className='w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg shadow-md'>
            <div>
                <h1 className='text-xl font-medium text-white'>Hello,</h1>
                <h2 className='text-3xl font-semibold text-white'>{data?.firstName} 🙌</h2>
            </div>
            <button 
                onClick={logout} 
                className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300'
            >
                Logout
            </button>
        </div>
    )
}

export default Header
