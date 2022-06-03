import React from "react";

const CustomInput = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  type,
  ...rest
}) => {
  return (
    <input
      className={className}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default CustomInput;
