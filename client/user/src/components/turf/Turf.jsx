import { useState, useEffect } from "react";
import { MapPin, Filter, Grid, List, RefreshCw, Package } from "lucide-react";
import TurfCard from "./TurfCard.jsx";
import TurfCardSkeleton from "../ui/TurfCardSkeleton.jsx";
import useTurfData from "../../hooks/useTurfData.jsx";
import SearchTurf from "../search/SearchTurf.jsx";

const Turf = () => {
  const { turfs, loading, error } = useTurfData();
  const [filteredTurfs, setFilteredTurfs] = useState(turfs);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSport, setSelectedSport] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setFilteredTurfs(turfs);
  }, [turfs]);

  const handleSearch = (searchTerm) => {
    const filtered = turfs.filter(
      (turf) =>
        turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        turf.sportTypes.some((sport) =>
          sport.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        turf.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTurfs(filtered);
  };

  // Get unique locations and sports
  const locations = ["all", ...new Set(turfs.map((turf) => turf.location))];
  const sports = [
    "all",
    ...new Set(turfs.flatMap((turf) => turf.sportTypes)),
  ];

  const handleFilter = () => {
    let filtered = [...turfs];

    if (selectedLocation !== "all") {
      filtered = filtered.filter((turf) => turf.location === selectedLocation);
    }

    if (selectedSport !== "all") {
      filtered = filtered.filter((turf) =>
        turf.sportTypes.includes(selectedSport)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.pricePerHour - b.pricePerHour);
        break;
      case "price-high":
        filtered.sort((a, b) => b.pricePerHour - a.pricePerHour);
        break;
      case "rating":
        filtered.sort((a, b) => b.avgRating - a.avgRating);
        break;
      default:
        break;
    }

    setFilteredTurfs(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedLocation, selectedSport, sortBy]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-base-200 rounded-lg p-8">
        <div className="text-error text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
        <p className="text-base-content/70 mb-4">{error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-primary flex items-center gap-2"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Discover Premium Turfs
        </h1>
        <p className="text-base-content/70 max-w-2xl mx-auto">
          Find and book the perfect turf for your game. Browse through our selection of high-quality sports facilities.
        </p>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-base-100 p-6 rounded-xl shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <SearchTurf onSearch={handleSearch} />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Location Filter */}
            <div className="form-control w-full sm:w-auto">
              <select
                className="select select-bordered w-full"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option disabled>Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sport Type Filter */}
            <div className="form-control w-full sm:w-auto">
              <select
                className="select select-bordered w-full"
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
              >
                <option disabled>Select Sport</option>
                {sports.map((sport) => (
                  <option key={sport} value={sport}>
                    {sport.charAt(0).toUpperCase() + sport.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="form-control w-full sm:w-auto">
              <select
                className="select select-bordered w-full"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-base-300">
              <button
                onClick={() => setViewMode("grid")}
                className={`btn btn-sm ${
                  viewMode === "grid" ? "btn-primary" : "btn-ghost"
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`btn btn-sm ${
                  viewMode === "list" ? "btn-primary" : "btn-ghost"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-base-content/70">
          Showing {filteredTurfs.length} results
        </div>
      </div>

      {/* Turfs Grid/List */}
      {loading ? (
        <div className={`grid ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
          } gap-6`}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <TurfCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      ) : filteredTurfs.length > 0 ? (
        <div className={`grid ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
          } gap-6`}
        >
          {filteredTurfs.map((turf) => (
            <TurfCard 
              key={turf._id} 
              turf={turf} 
              viewMode={viewMode}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Package size={48} className="text-base-content/30 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Turfs Found</h3>
          <p className="text-base-content/70 mb-4">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSelectedLocation("all");
              setSelectedSport("all");
              setSortBy("default");
            }}
            className="btn btn-primary btn-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Turf;