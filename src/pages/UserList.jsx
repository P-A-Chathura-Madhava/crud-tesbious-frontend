import React from "react";
import { Link } from "react-router-dom";

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function UserList() {
  return (
    <div className="container pt-6 mx-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-xl text-left text-gray-700 rtl:text-right dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                E-Mail
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Kasun
              </th>
              <td className="px-6 py-4">kasun@gmail.com</td>
              <td className="px-6 py-4">Colombo</td>
              <td className="flex gap-2 px-6 py-4 text-3xl">
                <Link to={"/edit-user"}>
                  <CiEdit className="text-blue-800" />
                </Link>
                <button>
                  <MdDeleteOutline className="text-red-700" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Nuwan
              </th>
              <td className="px-6 py-4">nuwan@gmail.com</td>
              <td className="px-6 py-4">Horana</td>
              <td className="flex gap-2 px-6 py-4 text-3xl">
                <Link to={"/edit-user"}>
                  <CiEdit className="text-blue-800" />
                </Link>
                <button>
                  <MdDeleteOutline className="text-red-700" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
