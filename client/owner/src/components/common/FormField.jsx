const FormField = ({ 
  label, 
  name, 
  type, 
  register, 
  error,
  icon,
  helper,
  required = false,
  className = "",
  inputClassName = "",
  labelClassName = "",
}) => {
  // Generate unique ID for input-label association
  const inputId = `field-${name}`;
  
  return (
    <div className={`form-control relative space-y-1 ${className}`}>
      {/* Label */}
      <label htmlFor={inputId} className={`label justify-start gap-2 ${labelClassName}`}>
        <span className="label-text font-medium">
          {label}
          {required && (
            <span className="text-error ml-1 text-sm">*</span>
          )}
        </span>
      </label>

      {/* Input Group */}
      <div className="relative group">
        {/* Input Icon */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 
            group-focus-within:text-primary transition-colors duration-200">
            {icon}
          </div>
        )}

        {/* Input Field */}
        <input
          id={inputId}
          type={type}
          placeholder={`Enter your ${name.toLowerCase()}`}
          className={`
            input w-full bg-base-100
            ${error ? 'input-error' : 'input-bordered focus:input-primary'}
            ${icon ? 'pl-10' : ''}
            transition-all duration-200
            placeholder:text-base-content/30
            border-2
            ${error 
              ? 'border-error focus:border-error' 
              : 'focus:border-primary hover:border-base-content/30'}
            ${inputClassName}
          `}
          {...register(name)}
        />

        {/* Success/Error Icons */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {error ? (
            <div className="text-error animate-fadeIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          ) : null}
        </div>
      </div>

      {/* Helper Text & Error Message */}
      <div className="min-h-[20px] px-1">
        {error ? (
          <p className="text-error text-xs mt-1 animate-slideUp">
            {error.message}
          </p>
        ) : helper ? (
          <p className="text-base-content/60 text-xs mt-1">
            {helper}
          </p>
        ) : null}
      </div>
    </div>
  );
};

// Custom animation keyframes (add to your global CSS)
const animations = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-in-out;
}

.animate-slideUp {
  animation: slideUp 0.2s ease-in-out;
}
`;

export default FormField;