const SkeletonLoader = () => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse">
      {/* Image skeleton with gradient */}
      <div className="relative h-48 bg-gradient-to-r from-base-300 via-base-200 to-base-300 overflow-hidden">
        {/* Optional badge skeleton */}
        <div className="absolute top-4 right-4">
          <div className="h-6 w-16 bg-base-300 rounded-full"></div>
        </div>
      </div>

      <div className="card-body">
        {/* Title skeleton */}
        <div className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg w-3/4"></div>

        {/* Description lines */}
        <div className="space-y-3 mt-2">
          <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-full"></div>
          <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-full"></div>
        </div>

        {/* Tags/Features */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full w-16"></div>
          <div className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full w-16"></div>
        </div>

        {/* Additional info */}
        <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-1/2 mt-2"></div>

        {/* Action button */}
        <div className="card-actions justify-end mt-4">
          <div className="h-10 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;