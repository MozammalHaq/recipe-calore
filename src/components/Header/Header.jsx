import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="py-8 flex flex-col lg:flex-row justify-between items-center">
      <a href="#" className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-0">
        Recipe Calories
      </a>
      <div className="space-x-4 lg:space-x-8 font-semibold mb-4 lg:mb-0">
        <a href="#">Home</a>
        <a href="#">Recipe</a>
        <a href="#">About</a>
        <a href="#" onClick={() => setShow(!show)}>
          Search
        </a>
      </div>
      <div className="flex lg:justify-end md:justify-center  items-center w-full md:w-auto lg:w-auto">
        {show && (
          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              className="rounded-full md:w-96 lg:w-64 mr-2 p-2 pl-8 bg-slate-300"
              placeholder="Search..."
            />
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
        )}
        <span className="bg-green-500 p-2 inline-block rounded-full ml-4">
          <FaRegUserCircle className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default Header;
