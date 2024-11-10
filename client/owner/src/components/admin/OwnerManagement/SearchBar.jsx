import React, { useState, useRef, useEffect } from "react";
import { Search, X, History, Loader2 } from "lucide-react";
import { motion } from 'framer-motion'

const SearchBar = ({ 
  searchTerm, 
  handleSearch,
  placeholder = "Search by name or email",
  recentSearches = [], // Optional recent searches
  onRecentSearchSelect = () => {}, // Optional handler for recent search selection
  isLoading = false // Optional loading state
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const searchRef = useRef(null);
  
  // Handle click outside to close recent searches
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowRecent(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear search handler
  const handleClear = () => {
    handleSearch("");
    setShowRecent(false);
  };

  // Handle input focus
  const handleFocus = () => {
    setIsFocused(true);
    if (recentSearches.length > 0) {
      setShowRecent(true);
    }
  };

  return (
    <div 
      ref={searchRef} 
      className="relative w-full max-w-2xl"
    >
      {/* Label with search count */}
      <label className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-base-content/70">
          Search requests
        </span>
        {searchTerm && (
          <span className="text-xs text-primary">
            Press Enter to search
          </span>
        )}
      </label>

      {/* Main search input container */}
      <motion.div
        animate={{
          scale: isFocused ? 1.01 : 1,
          boxShadow: isFocused 
            ? "0 4px 20px rgba(0, 0, 0, 0.1)" 
            : "0 2px 10px rgba(0, 0, 0, 0.05)"
        }}
        className="relative flex items-center bg-base-100 rounded-xl overflow-hidden"
      >
        {/* Search icon */}
        <div className="absolute left-4 flex items-center justify-center w-6 h-6">
          {isLoading ? (
            <Loader2 className="w-4 h-4 text-primary animate-spin" />
          ) : (
            <Search className="w-4 h-4 text-base-content/50" />
          )}
        </div>

        {/* Search input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="input input-bordered w-full pl-12 pr-12 h-12 focus:outline-none bg-transparent"
        />

        {/* Clear button */}
        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="absolute right-4 p-1 hover:bg-base-200 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-base-content/50" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Recent searches dropdown */}
      <AnimatePresence>
        {showRecent && recentSearches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 py-2 bg-base-100 rounded-xl shadow-lg z-50"
          >
            <h3 className="px-4 py-2 text-sm font-medium text-base-content/70">
              Recent Searches
            </h3>
            {recentSearches.map((search, index) => (
              <motion.button
                key={index}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                onClick={() => {
                  handleSearch(search);
                  onRecentSearchSelect(search);
                  setShowRecent(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm"
              >
                <History className="w-4 h-4 mr-2 text-base-content/50" />
                {search}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search suggestions or filters could be added here */}
      {isFocused && (
        <div className="flex gap-2 mt-2">
          <button className="btn btn-xs btn-ghost">
            #active
          </button>
          <button className="btn btn-xs btn-ghost">
            #verified
          </button>
          <button className="btn btn-xs btn-ghost">
            #new
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;