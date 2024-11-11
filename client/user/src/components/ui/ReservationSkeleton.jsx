const ReservationSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center mb-8">
        <div className="h-10 w-64 bg-gradient-to-r from-base-300 to-base-200 rounded-lg mb-4 animate-pulse"></div>
        <div className="h-4 w-48 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
      </div>

      <div className="card bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body p-6 md:p-8">
          {/* Progress Indicator */}
          <div className="flex justify-between mb-8 relative">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center relative z-10">
                <div className="w-8 h-8 bg-gradient-to-r from-base-300 to-base-200 rounded-full animate-pulse"></div>
                <div className="h-3 w-16 bg-gradient-to-r from-base-300 to-base-200 rounded mt-2 animate-pulse"></div>
              </div>
            ))}
            <div className="absolute top-4 left-0 right-0 h-1 bg-base-200" style={{ width: '100%', zIndex: 0 }}></div>
          </div>

          {/* Date Selection Skeleton */}
          <div className="space-y-6 mb-8">
            <div className="flex flex-col space-y-2">
              <div className="h-5 w-32 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
              <div className="h-12 bg-gradient-to-r from-base-300 to-base-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="flex flex-wrap gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 w-32 bg-gradient-to-r from-base-300 to-base-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Time Slots Skeleton */}
          <div className="space-y-4 mb-8">
            <div className="h-5 w-40 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-12 bg-gradient-to-r from-base-300 to-base-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Duration Selection Skeleton */}
          <div className="space-y-4 mb-8">
            <div className="h-5 w-36 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 bg-gradient-to-r from-base-300 to-base-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Summary Section Skeleton */}
          <div className="bg-base-200 rounded-xl p-6 space-y-4">
            <div className="h-6 w-48 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 w-24 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
                  <div className="h-4 w-32 bg-gradient-to-r from-base-300 to-base-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button Skeleton */}
          <div className="mt-8">
            <div className="h-14 w-full bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSkeleton;