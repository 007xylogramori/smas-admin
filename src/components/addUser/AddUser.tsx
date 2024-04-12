import React from "react";

const AddUser = () => {
  return (
    <div className="">
      
      <form action="" className="border  p-2 my-2 rounded-md py-4 text-white">
        <div className=" w-full mb-3 ">

          <label className="block uppercase text-blueGray-600 text-xs  mb-2">
            Email
          </label>
          <input
            placeholder="email"
            type="text"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value=""
          />
        </div>
        <div className=" w-full mb-3 ">
          <label className="block uppercase text-blueGray-600 text-xs  mb-2">
            Name
          </label>
          <input
            placeholder="name"
            type="text"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value=""
          />
        </div>
        <div className=" w-full mb-3 ">
          <label className="block uppercase text-blueGray-600 text-xs  mb-2">
            Password
          </label>
          <input
            placeholder="password"
            type="text"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value=""
          />
        </div>
        <button className="bg-blue-500 w-[100%] py-1 rounded-md">ADD USER</button>
      </form>
    </div>
  );
};

export default AddUser;
