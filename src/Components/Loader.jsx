import React from "react";
import { FaMotorcycle } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-bounce">
        <FaMotorcycle className="text-blue-500 text-6xl" />
      </div>
      <div className="ml-4 text-gray-500 text-3xl font-bold">Loading...</div>
    </div>
  );
};

export default Loader;
