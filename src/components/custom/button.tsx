import React from "react";
import clsx from "clsx";

interface Type {
  className?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}
export const Button = ({ className = "", variant, children }: Type) => {
  return (
    <button
      className={clsx(
        {
          "text-white  border-white": variant === "primary",
          "text-bg-footer border-bg-footer": variant === "secondary",
        },
        "px-8 py-1 text-lg font-semibold border-2 bg-transparent rounded-3xl",
        className
      )}
    >
      {children}
    </button>
  );
};
