import React from "react";

const CustomTextArea = ({ rows, cols, onChange, value, placeholder }) => {
  return (
    <textarea
    className="textarea"
      rows={rows || 5}
      cols={cols || 50}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    ></textarea>
  );
};

export default CustomTextArea;
