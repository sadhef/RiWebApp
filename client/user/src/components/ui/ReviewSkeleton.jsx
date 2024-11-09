const ReviewSkeleton = () => {
  return (
    <div className="card bg-base-100 hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden">
      <div className="card-body p-6">
        {/* Header with User Info */}
        <div className="flex items-start space-x-4 mb-4">
          {/* User Avatar Skeleton */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-base-300 to-base-200 animate-pulse"></div>
          
          <div className="flex-1">
            {/* User Name and Date */}
            <div className="flex justify-between items-center">
              <div className="w-32 h-5 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
              <div className="w-24 h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            </div>
            
            {/* Rating Stars */}
            <div className="flex items-center mt-2 space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-200/30 to-yellow-300/20 animate-pulse"
                ></div>
              ))}
              <div className="w-12 h-4 bg-gradient-to-r from-base-300 to-base-200 rounded ml-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div className="space-y-3 mt-4">
          {/* Title Skeleton */}
          <div className="w-3/4 h-5 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
          
          {/* Review Text Lines */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            <div className="w-full h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            <div className="w-4/5 h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Review Metadata */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-base-200">
          {/* Review Stats */}
          <div className="flex space-x-4">
            {/* Helpful Count */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-base-300 to-base-200 animate-pulse"></div>
              <div className="w-12 h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            </div>
            {/* Comments Count */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-base-300 to-base-200 animate-pulse"></div>
              <div className="w-16 h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Verified Purchase Badge */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-green-300/30 to-green-200/20 animate-pulse"></div>
            <div className="w-24 h-4 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Review Media Preview */}
        <div className="flex space-x-2 mt-4 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-20 h-20 rounded-lg bg-gradient-to-r from-base-300 to-base-200 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;