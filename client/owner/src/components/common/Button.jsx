const Button = ({ 
  children, 
  loading = false, 
  variant = "primary",
  size = "md",
  className = "",
  ...props 
}) => {
  // Base button styles
  const baseStyles = `
    btn relative overflow-hidden transition-all duration-300 
    font-medium active:scale-95 disabled:opacity-70
  `;

  // Size variations
  const sizeStyles = {
    sm: "btn-sm text-sm",
    md: "px-6 py-2 text-base",
    lg: "btn-lg text-lg"
  };

  // Variant styles
  const variantStyles = {
    primary: `
      btn-primary bg-gradient-to-r from-primary to-primary-focus
      hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]
      active:shadow-sm
    `,
    secondary: `
      btn-secondary bg-gradient-to-r from-secondary to-secondary-focus
      hover:shadow-lg hover:shadow-secondary/30 hover:scale-[1.02]
      active:shadow-sm
    `,
    outline: `
      btn-outline border-2 hover:bg-primary hover:border-primary
      hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]
      active:shadow-sm
    `,
    ghost: `
      btn-ghost hover:bg-primary/10
      hover:text-primary
    `,
    error: `
      btn-error bg-gradient-to-r from-error to-error-focus
      hover:shadow-lg hover:shadow-error/30 hover:scale-[1.02]
      active:shadow-sm
    `,
    success: `
      btn-success bg-gradient-to-r from-success to-success-focus
      hover:shadow-lg hover:shadow-success/30 hover:scale-[1.02]
      active:shadow-sm
    `
  };

  // Loading animation styles
  const loadingStyles = `
    after:content-[''] after:absolute after:w-full after:h-full
    after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
    after:-translate-x-full after:animate-[shimmer_2s_infinite]
    after:top-0 after:left-0
  `;

  // Combine all styles
  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${loading ? loadingStyles : ''}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClassName}
      disabled={loading || props.disabled}
      {...props}
    >
      <div className="relative flex items-center justify-center gap-2">
        {/* Loading Spinner */}
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="loading loading-spinner loading-md"></span>
          </span>
        )}

        {/* Button Content */}
        <span className={loading ? "invisible" : "visible"}>
          {children}
        </span>
      </div>

      {/* Gradient Border for Outline Variant */}
      {variant === "outline" && (
        <span className="absolute inset-0 border-2 border-transparent rounded-lg bg-clip-border" />
      )}
    </button>
  );
};

// Add keyframe animation for shimmer effect
const shimmerAnimation = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
`;

export default Button;