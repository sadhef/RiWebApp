import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Moon, Sun, Stars } from "lucide-react";
import { setTheme } from "../../redux/slices/themeSlice";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.current);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative group btn btn-ghost btn-circle hover:bg-base-200 
        overflow-hidden transition-all duration-300 ease-in-out"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Light Mode Icon */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500
            ${theme === 'light' 
              ? 'rotate-0 scale-100' 
              : 'rotate-90 scale-0'}`}
        >
          <Sun 
            size={20} 
            className="text-yellow-500 transform group-hover:rotate-90 transition-transform duration-500" 
          />
          {/* Sun Rays Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-500/50 rounded-full transform origin-center
                  animate-pulse transition-all duration-300"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-10px)`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Dark Mode Icon */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500
            ${theme === 'dark' 
              ? 'rotate-0 scale-100' 
              : '-rotate-90 scale-0'}`}
        >
          <div className="relative">
            <Moon 
              size={20} 
              className="text-blue-400 transform group-hover:rotate-12 transition-transform duration-500" 
            />
            {/* Stars Animation */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-blue-400/50 rounded-full animate-twinkle"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 20 - 10}px`,
                  left: `${Math.random() * 20 - 10}px`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div 
        className={`absolute inset-0 transition-colors duration-500
          ${theme === 'light' 
            ? 'bg-gradient-to-tr from-yellow-500/10 to-transparent' 
            : 'bg-gradient-to-tr from-blue-500/10 to-transparent'}`}
      />
      
      {/* Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
          animate-shimmer" />
      </div>
    </button>
  );
};

// Add these animations to your global CSS or Tailwind config
const animations = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-twinkle {
  animation: twinkle 1.5s infinite;
}
`;

export default ThemeSwitcher;