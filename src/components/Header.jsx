import React from 'react'

function Header() {
  return (
    <div className='flex items-center h-16 gap-4 p-6 space-x-6 bg-blue-500'>
      <h1 className='text-4xl font-bold text-white'>Tesbious CRUD Vite + React</h1>
      <button className='border border-gray-500 p-2 rounded-lg text-white font-bold w-[120px] flex justify-center hover:bg-green-600 cursor-pointer'>Add User</button>
    </div>
  )
}

export default Header