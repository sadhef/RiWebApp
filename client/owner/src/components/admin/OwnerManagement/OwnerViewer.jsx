import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  SlidersHorizontal, 
  Download, 
  RefreshCw,
  Plus,
  Grid,
  List
} from "lucide-react";
import useOwners from "@hooks/admin/useOwners";
import OwnerList from "./OwnerList";
import SearchBar from "./SearchBar";
import OwnersSkeleton from "./OwnersSkeleton";

const OwnerViewer = () => {
  const { owners, loading, searchTerm, handleSearch } = useOwners();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const StatsCard = ({ icon: Icon, title, value, change }) => (
    <div className="bg-base-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {change && (
          <span className={`text-sm font-medium ${change > 0 ? 'text-success' : 'text-error'}`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-base-content/60 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );

  if (loading) return <OwnersSkeleton />;

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-base-200 p-6"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary">Owner Management</h1>
            <p className="text-base-content/60 mt-1">
              Manage and monitor all registered turf owners
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="btn btn-primary gap-2">
              <Plus className="h-4 w-4" />
              Add Owner
            </button>
            <button 
              className="btn btn-outline gap-2"
              onClick={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
            >
              {viewMode === 'grid' ? 
                <List className="h-4 w-4" /> :
                <Grid className="h-4 w-4" />
              }
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            icon={Users} 
            title="Total Owners" 
            value={owners.length}
            change={2.5}
          />
          <StatsCard 
            icon={RefreshCw} 
            title="Active Owners" 
            value={owners.filter(o => o.active).length}
            change={1.8}
          />
          <StatsCard 
            icon={Plus} 
            title="New This Month" 
            value={5}
            change={-0.5}
          />
          <StatsCard 
            icon={Users} 
            title="Pending Approval" 
            value={3}
            change={1.2}
          />
        </div>

        {/* Search and Filters Section */}
        <div className="bg-base-100 p-4 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar 
                searchTerm={searchTerm} 
                handleSearch={handleSearch} 
              />
            </div>
            <div className="flex items-center gap-3">
              <button 
                className="btn btn-outline gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <button className="btn btn-outline gap-2">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 pt-4 border-t border-base-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Add your filter controls here */}
                <select className="select select-bordered w-full">
                  <option value="">Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <select className="select select-bordered w-full">
                  <option value="">Sort By</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
                <select className="select select-bordered w-full">
                  <option value="">Location</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                </select>
              </div>
            </motion.div>
          )}
        </div>

        {/* Main Content */}
        <OwnerList owners={owners} viewMode={viewMode} />
        
        {/* Footer/Pagination */}
        <div className="bg-base-100 p-4 rounded-xl shadow-sm flex justify-between items-center">
          <p className="text-sm text-base-content/60">
            Showing {owners.length} of {owners.length} owners
          </p>
          <div className="join">
            <button className="join-item btn btn-sm">«</button>
            <button className="join-item btn btn-sm btn-active">1</button>
            <button className="join-item btn btn-sm">2</button>
            <button className="join-item btn btn-sm">3</button>
            <button className="join-item btn btn-sm">»</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OwnerViewer;