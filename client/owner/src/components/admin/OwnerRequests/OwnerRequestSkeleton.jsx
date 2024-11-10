const OwnerRequestsSkeleton = () => {
  return (
    <div className="container mx-auto p-4 bg-base-200/30">
      {/* Header with shimmer effect */}
      <div className="relative overflow-hidden">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
          Owner Requests
        </h1>
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer" />
      </div>

      {/* Search skeleton */}
      <div className="max-w-md mx-auto mb-8">
        <div className="h-12 bg-base-100 rounded-lg shadow-lg animate-pulse" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="card-body">
              {/* Header with avatar */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="skeleton w-14 h-14 rounded-full shrink-0" />
                <div className="space-y-3 w-full">
                  <div className="h-4 bg-base-300 rounded-full w-3/4 animate-pulse" />
                  <div className="h-3 bg-base-300 rounded-full w-1/2 animate-pulse" />
                </div>
              </div>

              {/* Content lines */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-base-300 animate-pulse" />
                  <div className="h-3 bg-base-300 rounded-full w-full animate-pulse" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-base-300 animate-pulse" />
                  <div className="h-3 bg-base-300 rounded-full w-4/5 animate-pulse" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-base-300 animate-pulse" />
                  <div className="h-3 bg-base-300 rounded-full w-3/4 animate-pulse" />
                </div>
              </div>

              {/* Action buttons */}
              <div className="card-actions justify-end mt-4 space-x-2">
                <div className="h-10 w-24 bg-success/20 rounded-lg animate-pulse" />
                <div className="h-10 w-24 bg-error/20 rounded-lg animate-pulse" />
              </div>

              {/* Shimmer overlay */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add required styles to your CSS
const customStyles = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export default OwnerRequestsSkeleton;