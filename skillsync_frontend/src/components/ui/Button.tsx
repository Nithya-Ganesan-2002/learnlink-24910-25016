import React from "react";

// PUBLIC_INTERFACE
export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        "bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 py-2 transition " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
