import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, Award, Activity } from "lucide-react";

const OwnersSkeleton = () => {
  // Shimmer effect animation
  const shimmer = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  const SkeletonCard = () => (
    <div className="group relative overflow-hidden bg-base-100 rounded-xl shadow-lg">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
      
      {/* Main Content */}
      <div className="relative p-6">
        {/* Header Section with Avatar */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center overflow-hidden">
              <User className="h-8 w-8 text-base-300" />
              <motion.div
                variants={shimmer}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-base-200 rounded-full p-1">
              <div className="w-4 h-4" />
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-base-200 rounded-md w-3/4">
              <motion.div
                variants={shimmer}
                initial="hidden"
                animate="visible"
                className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
            <div className="h-4 bg-base-200 rounded-md w-1/2">
              <motion.div
                variants={shimmer}
                initial="hidden"
                animate="visible"
                className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
          </div>
        </div>

        {/* Info Grid */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="mb-4">
            <div className="flex items-center p-3 bg-base-200 rounded-lg overflow-hidden">
              <div className="w-5 h-5 bg-base-300 rounded mr-3" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-base-300 rounded w-3/4">
                  <motion.div
                    variants={shimmer}
                    initial="hidden"
                    animate="visible"
                    className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </div>
                <div className="h-3 bg-base-300 rounded w-1/2">
                  <motion.div
                    variants={shimmer}
                    initial="hidden"
                    animate="visible"
                    className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[<Activity />, <MapPin />, <Award />].map((Icon, index) => (
            <div key={index} className="text-center p-3 bg-base-200 rounded-lg overflow-hidden">
              {React.cloneElement(Icon, { className: "h-5 w-5 text-base-300 mx-auto mb-1" })}
              <div className="h-3 bg-base-300 rounded w-2/3 mx-auto">
                <motion.div
                  variants={shimmer}
                  initial="hidden"
                  animate="visible"
                  className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="h-10 bg-base-200 rounded-lg overflow-hidden">
          <motion.div
            variants={shimmer}
            initial="hidden"
            animate="visible"
            className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-base-200 rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-base-200 rounded-tr-full opacity-50" />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-base-100 rounded-xl shadow-sm">
        <div className="space-y-2">
          <div className="h-8 bg-base-200 rounded-md w-48">
            <motion.div
              variants={shimmer}
              initial="hidden"
              animate="visible"
              className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>
          <div className="h-4 bg-base-200 rounded-md w-32">
            <motion.div
              variants={shimmer}
              initial="hidden"
              animate="visible"
              className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>
        </div>

        <div className="w-full md:w-72 h-10 bg-base-200 rounded-lg overflow-hidden">
          <motion.div
            variants={shimmer}
            initial="hidden"
            animate="visible"
            className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default OwnersSkeleton;