import Navbar from "../../components/Navbar/Navbar";

const UsersPage = () => {
  return (
    <>
      <Navbar />
      <div className="my-4 max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search User by RollNo"
            required
          />
          <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </div>

      <div className="m-4 rounded-md overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Roll No
              </th>
              <th scope="col" className="px-6 py-3">
                Branch
              </th>
              <th scope="col" className="px-6 py-3">
                Enrolled on
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                User Name-1
              </th>
              <td className="px-6 py-4">21bec000</td>
              <td className="px-6 py-4">ECE</td>
              <td className="px-6 py-4">22-1-2024</td>
              <td className="px-6 flex gap-1 py-4">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white">
                  Edit
                </button>
                <button className="bg-green-500 py-1 px-2 rounded-md text-white">
                  View
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                User Name-1
              </th>
              <td className="px-6 py-4">21bec000</td>
              <td className="px-6 py-4">ECE</td>
              <td className="px-6 py-4">22-1-2024</td>
              <td className="px-6 flex gap-1 py-4">
                <button className="bg-blue-500 py-1 px-2 rounded-md  text-white">
                  Edit
                </button>
                <button className="bg-green-500 py-1 px-2 rounded-md text-white">
                  View
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                User Name-1
              </th>
              <td className="px-6 py-4">21bec000</td>
              <td className="px-6 py-4">ECE</td>
              <td className="px-6 py-4">22-1-2024</td>
              <td className="px-6 flex gap-1 py-4">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white">
                  Edit
                </button>
                <button className="bg-green-500 py-1 px-2 rounded-md text-white">
                  View
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
