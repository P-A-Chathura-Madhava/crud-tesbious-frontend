import React from 'react'

function EditUser() {
  return (
    <div className="container pt-6 mx-auto">
    <form className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-[600px]">
        <label className="text-lg font-bold" htmlFor="name">
          Name :{" "}
        </label>
        <input
          className="p-2 text-xl border border-gray-400 rounded-lg focus-within:bg-blue-300"
          type="text"
          placeholder="Kasun"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-4 w-[600px]">
        <label className="text-lg font-bold" htmlFor="email">
          E-mail :{" "}
        </label>
        <input
          className="p-2 text-xl border border-gray-400 rounded-lg focus-within:bg-blue-300"
          type="text"
          placeholder="kasun@gmail.com"
          name="email"
        />
      </div>
      <div className="flex flex-col gap-4 w-[600px]">
        <label className="text-lg font-bold" htmlFor="location">
          Location :{" "}
        </label>
        <input
          className="p-2 text-xl border border-gray-400 rounded-lg focus-within:bg-blue-300"
          type="text"
          placeholder="Colombo"
          name="location"
        />
      </div>
      <div className="flex justify-center pt-6">
        <button
          className="bg-green-600 text-white font-bold text-2xl p-2 rounded-lg hover:bg-red-600 w-[200px]"
          type="submit"
        >
          Update User
        </button>
      </div>
    </form>
  </div>
  )
}

export default EditUser