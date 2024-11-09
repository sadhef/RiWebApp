const TurfCardSkeleton = () => {
  return (
    <div className="card bg-base-100 hover:shadow-2xl transition-all duration-300 animate-pulse border border-base-200 overflow-hidden">
      {/* Image Skeleton with Gradient */}
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gradient-to-r from-base-300 via-base-200 to-base-300"></div>
        
        {/* Price Badge Skeleton */}
        <div className="absolute top-4 right-4">
          <div className="h-8 w-24 bg-gradient-to-r from-primary/30 to-primary/20 rounded-full"></div>
        </div>

        {/* Status Badge Skeleton */}
        <div className="absolute top-4 left-4">
          <div className="h-6 w-20 bg-gradient-to-r from-success/30 to-success/20 rounded-full"></div>
        </div>
      </div>

      <div className="card-body p-5">
        {/* Title and Rating Section */}
        <div className="space-y-3">
          <div className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg w-3/4"></div>
          
          {/* Rating Stars */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-300/30 to-yellow-200/20"
                ></div>
              ))}
            </div>
            <div className="h-4 w-16 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded"></div>
          </div>
        </div>

        {/* Features/Sport Types */}
        <div className="flex flex-wrap gap-2 my-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full w-16"
            ></div>
          ))}
        </div>

        {/* Location and Time Info */}
        <div className="space-y-2 mb-4">
          {/* Location */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-base-300 via-base-200 to-base-300"></div>
            <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-2/3"></div>
          </div>
          {/* Time */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-base-300 via-base-200 to-base-300"></div>
            <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-1/2"></div>
          </div>
        </div>

        {/* Action Section */}
        <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-base-200">
          {/* Quick Info */}
          <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-24"></div>
          
          {/* Button */}
          <div className="h-10 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default TurfCardSkeleton;