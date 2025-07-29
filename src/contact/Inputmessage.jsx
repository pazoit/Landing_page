import React from 'react'


const variantClasses = {
  default: "border-primaryColor-600 focus:ring-primaryColor-700",
  danger: "border-red-500 focus:ring-red-500",
};
const Inputmessage = (
    {
message,
  type = "text",
  value = "",
  onChange,
  placeholder,
  className,
  variant = "default",
    }
) => {
  return (
    <div>
      <textarea  
      name={message}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    className={`px-4 py-2  w-full h-[6rem] rounded-md border-2 ${variantClasses[variant]} ${className}`}
      ></textarea>
    </div>
  )
}

export default Inputmessage
