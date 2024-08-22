import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 max-w-sm md:max-w-lg lg:max-w-xl w-full">
      <HiSearch className="text-gray-400 mr-3 text-xl" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for Artists, Songs, or Podcasts"
        className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
      />
    </div>
  );
};

export default Search;
