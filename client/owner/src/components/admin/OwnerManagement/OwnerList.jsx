import React from "react";
import { motion } from "framer-motion";
import { Users, AlertCircle, Search } from "lucide-react";
import OwnerCard from "./OwnerCard";

const OwnerList = ({ owners }) => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Empty state component
  const EmptyState = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-8 bg-base-200 rounded-2xl shadow-inner"
    >
      <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
        <Users className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">No Owners Found</h3>
      <p className="text-base-content/70 text-center max-w-md mb-6">
        There are no registered owners at the moment. New owner registrations will appear here.
      </p>
      <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
        <AlertCircle className="w-4 h-4" />
        <span>Check back later for updates</span>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-base-100 rounded-xl shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-primary">Owner Management</h2>
          <p className="text-base-content/70">
            {owners.length} {owners.length === 1 ? 'owner' : 'owners'} registered
          </p>
        </div>

        {/* Search and Filter Section - Can be expanded later */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search owners..."
            className="input input-bordered w-full md:w-72 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50" />
        </div>
      </div>

      {/* Main Content */}
      {owners.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {owners.map((owner) => (
            <motion.div
              key={owner._id}
              variants={itemVariants}
              className="h-full"
            >
              <OwnerCard owner={owner} />
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {/* Footer/Pagination Section - Can be added if needed */}
      {owners.length > 0 && (
        <div className="flex justify-between items-center p-4 bg-base-100 rounded-xl shadow-sm mt-6">
          <p className="text-sm text-base-content/70">
            Showing {owners.length} {owners.length === 1 ? 'owner' : 'owners'}
          </p>
          <button className="btn btn-ghost btn-sm">
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default OwnerList;