const TurfDetailsSkeleton = () => (
  <div className="container mx-auto px-4 py-8 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Images and Gallery */}
      <div className="space-y-6">
        {/* Main Image Skeleton */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="w-full h-[400px] bg-gradient-to-r from-base-300 via-base-200 to-base-300 animate-pulse">
            {/* Price Badge */}
            <div className="absolute top-4 right-4">
              <div className="h-10 w-32 bg-gradient-to-r from-primary/30 to-primary/20 rounded-full animate-pulse"></div>
            </div>
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <div className="h-8 w-24 bg-gradient-to-r from-success/30 to-success/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="h-24 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="space-y-8">
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body p-6 space-y-6">
            {/* Title and Rating */}
            <div className="space-y-4">
              <div className="h-8 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg w-3/4 animate-pulse"></div>
              
              {/* Rating Stars */}
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-300/30 to-yellow-200/20 animate-pulse"
                    ></div>
                  ))}
                </div>
                <div className="h-4 w-24 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded animate-pulse"
                  style={{ width: `${100 - i * 15}%` }}
                ></div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-base-300 via-base-200 to-base-300 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-1/2 animate-pulse"></div>
                    <div className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sports Types */}
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="h-8 w-24 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full animate-pulse"
                ></div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-base-200">
              <div className="flex space-x-3">
                <div className="h-12 w-12 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full animate-pulse"></div>
                <div className="h-12 w-12 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full animate-pulse"></div>
              </div>
              <div className="h-12 w-40 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <div className="h-8 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-1/4 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-24 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TurfDetailsSkeleton;