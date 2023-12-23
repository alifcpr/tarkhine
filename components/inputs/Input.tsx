import React from "react";

// types
type InputProps = {
  placeHolder: string;
  type: string;
  style: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  otherClass?: string;
};

const Input = ({
  placeHolder,
  type,
  style,
  value,
  setValue,
  otherClass,
}: InputProps) => {
  const inputStyle = (type: string) => {
    switch (type) {
      case "white-outline":
        return "text-white rounded-4 border border-muted-600 bg-transparent px-4 py-2 placeholder:text-muted-100";

      default:
        break;
    }
  };

  inputStyle(style);

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`${inputStyle} ${otherClass}`}
      placeholder={placeHolder}
    />
  );
};

export default Input;
