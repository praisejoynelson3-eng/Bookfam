import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  size = 'md',
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center border font-medium rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";
  
  const variants = {
    primary: "border-transparent text-white bg-navy-900 hover:bg-navy-800 focus:ring-navy-900",
    secondary: "border-transparent text-navy-900 bg-gold-500 hover:bg-gold-600 focus:ring-gold-500 text-white",
    outline: "border-navy-900 text-navy-900 bg-transparent hover:bg-navy-50 focus:ring-navy-900"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
