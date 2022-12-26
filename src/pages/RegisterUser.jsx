import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterUser() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    facility: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or perform other actions
    console.log(event)
  }

  return (
    <div className="bg-gray-50 dark:bg-[#162daa]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          href="#"
          className="flex items-center mb-6 gap-3 text-2xl font-semibold text-gray-900 dark:text-white"
        >
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
          HFMS
        </div>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Set up my account
            </h1>
            <form class="space-y-4 md:space-y-6" >
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  value={user.userName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your username"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={user.email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="facility"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your facility
                </label>
                <select
                  type="facility"
                  name="facility"
                  id="facility"
                  onChange={handleChange}
                  value={user.facility}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                >
                  <option value="">Select your facility</option>
                  <option value="banja">BANJA HEALTH CENTRE</option>
                  <option value="bugina">BUGINA HEALTH CENTRE</option>
                  <option value="ebusiratsi">EBUSIRATSI HEALTH CENTRE</option>
                </select>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={user.password}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  onChange={handleChange}
                  value={user.confirmPassword}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <div
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </div>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create my account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <div class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  <Link to={"/SignIn"}>Sign me in</Link>
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
