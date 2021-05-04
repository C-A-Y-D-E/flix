import React from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className=" container absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-2xl relative flex flex-col">
        <form className="w-full ">
          <div className="relative text-2xl">
            <input
              type="text"
              className="w-full bg-primary-light h-16 pl-12 border-none rounded-2xl"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 ">
              <FiSearch />
            </div>
          </div>
        </form>
        <div className="bg-primary-light flex  rounded-2xl flex-1">
          <ul className="flex flex-col space-y-2 w-full p-6">
            <li className="bg-primary-dark p-4 rounded-2xl">
              <p>Tokyo Ghoul</p>
            </li>
            <li className="bg-primary-dark p-4 rounded-2xl">
              <p>Hero No academia</p>
            </li>
            <li className="bg-primary-dark p-4 rounded-2xl">
              <p>Tokyo Ghoul</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
Search;
