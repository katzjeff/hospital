import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    (<Navbar />),
    (
      <div className="px-2 sm:px-4 py-6 dark:bg-[#162daa]">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <span className=" flex flex-wrap items-center gap-4 self-center ml-10 text-xl font-semibold whitespace-nowrap dark:text-white">
            <svg
              width={50}
              height={50}
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.996 4.524v-3.5h4v3.5h2v-9h-2v3.5h-4v-3.5h-2v9h2Z"
                clipRule="evenodd"
              />
            </svg>
            Healthcare Facility Management System
          </span>
          <div className="flex md:order-2">
            <div
              type="button"
              className="text-white font-bold cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr- md:mr-20 dark:bg-[#2e4450] dark:hover:bg-[#537b91] dark:focus:ring-blue-800"
            >
              <Link to="SignIn">SIGN IN</Link>
            </div>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 cursor-pointer"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                Home
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link to="SignIn">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
