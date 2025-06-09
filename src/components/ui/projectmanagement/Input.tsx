import React from 'react';

type InputProps = {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  error?: string;
};

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  name,
  id,
  required = false,
  label,
  error,
}: InputProps) => {
  const inputId = id || name;
  
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium ${error ? 'text-error' : 'text-foreground'}`}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        className={`input ${error ? 'border-error focus:ring-error' : ''} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;