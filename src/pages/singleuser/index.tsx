import Navbar from '../../components/Navbar/Navbar'
import Checkbox from '../../components/checkbox/Checkbox'

const SingleUsersPage = () => {

    
  return (
    <>
    <Navbar/>
    <div className="px-6 py-10  min-w-[100%]  bg-gray-900 md:gap-2">
        <div className='my-4 justify-between text-white font-bold'>
            <div>NAME: HIMANSHU</div>
            <div>ROLL NO: 21BEC053</div>
            <div className='text-green-500'>ACTIVE</div>
            
        </div>
        <div className="w-[100%]  grid grid-cols-1  gap-10 ">
          <div className="w-[100%] col-span-1 md:col-span-6  overflow-x-auto shadow-md sm:rounded-lg">
            <div className="border-t w-full min-w-[100%] rounded-t-lg px-2 border-r border-l my-0 mx-0 dark:border-gray-700 flex flex-row justify-between items-center">
              <h2 className="text-white font-semibold py-2 text-lg px-2">
                HISTORY
              </h2>
              {/* filter options */}
              {/* <div className="flex justify-center items-center flex-row gap-1 text-white font-semibold py-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                Month :{" "}
                <select
                  className=" bg-gray-900 border border-white px-2 rounded-md"
                  title="monthName"
                  name="month"
                  id="month"
                >
                  <option value="january">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="August">August</option>
                </select>
              </div> */}
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BREAKFAST
                  </th>
                  <th scope="col" className="px-6 py-3">
                    LUNCH
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DINNER
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                 
                   
                  
                    <tr
                      
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        29 Aug 2025
                      </th>
                      <td className="px-6 py-4 flex items-center w-[100%]  ">
                        <Checkbox flag={true}/>
                      </td>
                      <td className="px-6 py-4">
                        <Checkbox flag={false}/>
                      </td>
                      <td className="px-6 py-4">
                        <Checkbox flag={true}/>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          2/3
                        </a>
                      </td>
                    </tr>
                
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleUsersPage
