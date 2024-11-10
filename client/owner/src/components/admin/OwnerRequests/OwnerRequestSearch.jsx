 
import React from "react";
import { Search } from "lucide-react";

const OwnerRequestSearch = ({ searchTerm, handleSearch }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Search requests</span>
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or email"
          className="input input-bordered w-full pr-10"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Search className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default OwnerRequestSearch;