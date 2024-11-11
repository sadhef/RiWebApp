const TransactionSkeleton = () => {
  return (
    <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden animate-fade-in">
      {/* Header Section */}
      <div className="p-8 bg-gradient-to-r from-base-200 to-base-300">
        <div className="relative overflow-hidden">
          <div className="skeleton h-10 w-72 mb-6 rounded-lg bg-base-100/50"></div>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {[
            { width: "w-full", label: "Search" },
            { width: "w-full", label: "Date Range" },
            { width: "w-full", label: "Amount" },
            { width: "w-full", label: "Status" },
            { width: "w-full", label: "Filter" }
          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <div className="flex flex-col space-y-2">
                <div className="skeleton h-4 w-20 rounded bg-base-100/30"></div>
                <div className={`skeleton h-12 ${item.width} rounded-lg bg-base-100/50`}></div>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] delay-75" />
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <div className="p-6">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-base-300">
                {['Transaction ID', 'Date', 'Customer', 'Amount', 'Status', 'Action'].map((header, index) => (
                  <th key={index} className="bg-base-200/50 px-6 py-4">
                    <div className="skeleton h-4 w-24 rounded"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-base-200/30 transition-colors duration-200">
                  {[...Array(6)].map((_, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {colIndex === 2 && (
                          <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                        )}
                        <div className="flex-1">
                          <div className="skeleton h-4 w-full rounded"></div>
                          {colIndex === 2 && (
                            <div className="skeleton h-3 w-3/4 rounded mt-2"></div>
                          )}
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Skeleton */}
      <div className="p-6 border-t border-base-300">
        <div className="flex justify-between items-center">
          <div className="skeleton h-8 w-40 rounded"></div>
          <div className="flex space-x-2">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="skeleton h-10 w-10 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-base-200/30">
        {[
          { label: "Total Transactions", value: "loading..." },
          { label: "Total Revenue", value: "calculating..." },
          { label: "Average Transaction", value: "processing..." }
        ].map((card, index) => (
          <div key={index} className="bg-base-100 rounded-xl p-6 shadow-md relative overflow-hidden">
            <div className="skeleton h-4 w-32 mb-4 rounded"></div>
            <div className="skeleton h-8 w-24 rounded"></div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] delay-150" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Add required animation keyframes to your CSS
const customStyles = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default TransactionSkeleton;