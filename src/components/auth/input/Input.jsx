
import React, { useState } from "react";
import "./Input.css";
const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <>
      <div className="input-item  px-10 md:px-0 lg:px-0">
        <label
          htmlFor={label}
          className="block py-2 text-left pl-3"
        >
          {label}
        </label>
        <input
          className="bg-black inputPadding  sm:w-full  rounded-3xl w-full"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
      </div>
    </>
  );
};

export default Input;
