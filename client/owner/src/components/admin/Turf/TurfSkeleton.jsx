const TurfSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in">
      {/* Image Skeleton with Shimmer */}
      <div className="relative h-64 bg-gradient-to-r from-base-200 to-base-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-100/10 to-transparent animate-shimmer" />
        <div className="absolute top-4 right-4">
          <div className="skeleton h-8 w-24 rounded-full bg-base-100/50"></div>
        </div>
      </div>

      <div className="card-body p-6">
        {/* Title and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="skeleton h-8 w-3/4 rounded-lg"></div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="skeleton h-4 w-4 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Description Lines */}
        <div className="space-y-3 mb-4">
          <div className="skeleton h-4 w-full rounded"></div>
          <div className="skeleton h-4 w-5/6 rounded"></div>
          <div className="skeleton h-4 w-4/6 rounded"></div>
        </div>

        {/* Features/Amenities */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="skeleton h-6 w-6 rounded-full"></div>
              <div className="skeleton h-4 w-20 rounded"></div>
            </div>
          ))}
        </div>

        {/* Tags/Sports Types */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton h-6 w-16 rounded-full"></div>
          ))}
        </div>

        {/* Price and Action Button */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="space-y-1">
            <div className="skeleton h-3 w-16 rounded"></div>
            <div className="skeleton h-6 w-24 rounded"></div>
          </div>
          <div className="skeleton h-10 w-32 rounded-lg"></div>
        </div>

        {/* Shimmer Overlay */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite] pointer-events-none"></div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 left-4">
        <div className="skeleton h-6 w-20 rounded-full"></div>
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

  .skeleton {
    @apply bg-base-300 animate-pulse relative overflow-hidden;
  }
`;

// Add to your Tailwind config
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
};

export default TurfSkeleton;