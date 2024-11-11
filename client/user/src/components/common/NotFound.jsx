import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div className="min-h-screen relative overflow-hidden bg-base-200 flex items-center justify-center px-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-primary/10 rounded-full blur-3xl
              animate-float-slow
              ${i % 2 === 0 ? 'w-96 h-96' : 'w-72 h-72'}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-md w-full">
        <div className="text-center space-y-6 backdrop-blur-sm bg-base-100/30 p-8 rounded-2xl shadow-2xl">
          {/* 404 Text with Gradient */}
          <div className="relative">
            <h1 className="text-[12rem] font-black leading-none tracking-tighter
              text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              404
            </h1>
            
            {/* Glitch Effect (Optional) */}
            <div className="absolute inset-0 animate-pulse opacity-50
              text-[12rem] font-black leading-none tracking-tighter
              text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary
              blur-sm">
              404
            </div>
          </div>

          {/* Error Messages */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Oops! Page not found
            </h2>
            <p className="text-base-content/70">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              to={isLoggedIn ? "/auth" : "/"} 
              className="btn btn-primary w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg 
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline btn-primary w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Additional Help Text */}
        <p className="text-center mt-8 text-base-content/50 text-sm">
          Need help? 
          <Link 
            to="/contact" 
            className="text-primary hover:text-primary-focus transition-colors ml-1"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or Tailwind config
const animations = `
@keyframes float-slow {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px),
    linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
  background-size: 50px 50px;
}
`;

export default NotFound;