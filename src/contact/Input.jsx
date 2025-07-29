import React from 'react'


const variantClasses = {
  default: "border-primaryColor-600 focus:ring-primaryColor-700",
  danger: "border-red-500 focus:ring-red-500",
};
const Input = ({
name,
  type = "text",
  value = "",
  onChange,
  placeholder,
  className,

  variant = "default",
}) => {
  return (
    <div className="flex flex-col gap-2">

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-2 rounded-md border-2 ${variantClasses[variant]} ${className}`}
      />
    
    </div>
  )
}

export default Input
