import React from 'react';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  error?: string;
};

const Select = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = '',
  name,
  id,
  required = false,
  label,
  error,
}: SelectProps) => {
  const selectId = id || name;
  
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={selectId}
          className={`block text-sm font-medium ${error ? 'text-error' : 'text-foreground'}`}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        className={`input ${error ? 'border-error focus:ring-error' : ''} ${className}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Select;