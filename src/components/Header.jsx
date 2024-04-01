import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center h-16 gap-4 p-6 space-x-6 bg-blue-500'>
      <Link to={"/"}><h1 className='text-4xl font-bold text-white'>Tesbious CRUD Vite + React</h1></Link>
      <Link to={"/add-user"} className='border border-gray-500 p-2 rounded-lg text-white font-bold w-[120px] flex justify-center hover:bg-green-600 cursor-pointer'>Add User</Link>
    </div>
  )
}

export default Header