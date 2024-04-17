import { FormEvent, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const GenerateBillPage = () => {
    const [rollno,setRollNo]=useState("");
    const [month,setMonth]=useState("");
    const [year,setYear]=useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/user/admin/mealsstats/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollno:rollno,
          month: month,
          year: year,
        }),
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="mx-2 my-2 flex flex-col gap-4 justify-center items-center ">
        <div className="flex gap-1 text-white font-bold text-lg">
          BILL GENERATION
        </div>

        <form
            onSubmit={handleSubmit}
          className="p-2 border rounded-md  flex justify-center  items-center gap-4"
          action=""
        >
          <div>
            <input
              name="roll_no"
              id="roll_no"
              value={rollno}
              onChange={(e)=>{setRollNo(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <input
              name="Month"
              id="month"
              value={month}
              onChange={(e)=>{setMonth(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="month - (1-12)"
              required
            />
          </div>

          <div>
            <input
              name="year"
              id="year"
              value={year}
              onChange={(e)=>{setYear(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Academic Year"
              required
            />
          </div>

          <div>
            <button className="rounded-md py-2 px-2 bg-blue-500 text-white">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GenerateBillPage;
