const TurfBookingHistorySkeleton = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-base-200">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center mb-12">
        <div className="h-10 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg w-64 animate-pulse mb-3"></div>
        <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-48 animate-pulse"></div>
      </div>

      {/* Booking Cards */}
      {[1, 2, 3].map((item) => (
        <div 
          key={item} 
          className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 mx-auto lg:w-1/2 border border-base-200 overflow-hidden"
        >
          <div className="card-body p-6">
            {/* Status Badge */}
            <div className="flex justify-between items-center mb-6">
              <div className="h-8 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full w-32 animate-pulse"></div>
              <div className="h-6 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-full w-24 animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Booking Details */}
              <div className="space-y-4">
                {/* Turf Name */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-base-300 via-base-200 to-base-300 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-3/4 animate-pulse mb-2"></div>
                    <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>

                {/* Booking Details List */}
                <div className="space-y-3 mt-4">
                  {[1, 2, 3, 4].map((line) => (
                    <div key={line} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-base-300 via-base-200 to-base-300 animate-pulse"></div>
                      <div className="flex-1 h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Code Section */}
              <div className="flex flex-col justify-center items-center space-y-4 p-4 bg-base-200/50 rounded-xl">
                <div className="w-40 h-40 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-32 animate-pulse"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-base-200">
              {/* Booking ID */}
              <div className="h-4 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded w-32 animate-pulse"></div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <div className="h-10 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-lg w-32 animate-pulse"></div>
                <div className="h-10 bg-gradient-to-r from-base-300 via-base-200 to-base-300 rounded-lg w-32 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TurfBookingHistorySkeleton;