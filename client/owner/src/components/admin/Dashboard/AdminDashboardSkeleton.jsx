import React from "react";
import {
  Users,
  Building,
  MapPin,
  CreditCard,
  UserPlus,
  UserX,
  TrendingUp,
  Clock,
} from "lucide-react";

const AdminDashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section Skeleton */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="space-y-2 text-center lg:text-left mb-6 lg:mb-0">
            <div className="h-12 w-64 bg-base-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-48 bg-base-300 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-base-300 rounded-lg p-3 animate-pulse">
              <Clock className="w-5 h-5 text-base-300" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-base-300 rounded animate-pulse"></div>
              <div className="h-3 w-32 bg-base-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Primary Stats Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[Users, Building, MapPin, CreditCard].map((Icon, index) => (
            <SkeletonCard 
              key={index} 
              Icon={Icon} 
              className="bg-base-100 hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>

        {/* Secondary Stats Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <SkeletonCard 
            Icon={UserPlus} 
            className="bg-warning/5 hover:bg-warning/10 transition-colors duration-300"
          />
          <SkeletonCard 
            Icon={UserX} 
            className="bg-error/5 hover:bg-error/10 transition-colors duration-300"
          />
          <SkeletonCard 
            Icon={TrendingUp} 
            className="bg-success/5 hover:bg-success/10 transition-colors duration-300"
          />
        </div>

        {/* Booking History Chart Skeleton */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="space-y-4 mb-4 md:mb-0">
                <div className="h-8 w-48 bg-base-300 rounded animate-pulse"></div>
                <div className="h-4 w-64 bg-base-300 rounded animate-pulse"></div>
              </div>
              <div className="w-48 h-10 bg-base-300 rounded animate-pulse"></div>
            </div>
            <div className="bg-base-200/50 rounded-xl p-6">
              {/* Chart Placeholder */}
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-base-300 animate-pulse"></div>
                {/* Chart Grid Lines Effect */}
                <div className="absolute inset-0 grid grid-cols-7 gap-4">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-full">
                      <div className="h-full w-1 bg-base-200/30 rounded"></div>
                    </div>
                  ))}
                </div>
                {/* Animated Loading Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
                  <div className="h-full bg-primary rounded-r animate-loading-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = ({ Icon, className = "" }) => (
  <div className={`card shadow-xl overflow-hidden ${className}`}>
    <div className="card-body relative">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-200/50 to-transparent skeleton-shimmer"></div>
      
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="w-24 h-4 bg-base-300 rounded animate-pulse"></div>
          <div className="w-16 h-8 bg-base-300 rounded animate-pulse"></div>
        </div>
        <div className="rounded-full p-2 bg-base-300/50">
          <Icon className="h-6 w-6 text-base-300" />
        </div>
      </div>
      
      {/* Additional Stats Placeholder */}
      <div className="mt-4 flex items-center gap-2">
        <div className="w-12 h-2 bg-base-300 rounded animate-pulse"></div>
        <div className="w-8 h-2 bg-base-300 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Add the required CSS in your global styles or tailwind.config.js
const additionalStyles = `
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes loadingBar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .skeleton-shimmer {
    animation: shimmer 2s infinite;
  }

  .animate-loading-bar {
    animation: loadingBar 2s infinite;
  }
`;

export default AdminDashboardSkeleton;