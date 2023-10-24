import React from "react";

type ButtonProps = {
  label?: string;
  type?: "text" | "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  label,
  type,
  className = "",
  onClick,
}: ButtonProps) {
  if (type === "text") {
    return (
      <button
        className={`py-[0.7rem] rounded-md  ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  if (type === "primary") {
    return (
      <button
        className={`px-6 py-[0.7rem] rounded-md bg-[--main-color]  ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  if (type === "secondary") {
    return (
      <button
        className={`px-6 py-[0.7rem] rounded-md border ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
