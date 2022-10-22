import { ButtonHTMLAttributes, ReactNode, useState } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  typeButton: string;
  title: string;
}
export function Button({
  children,
  asChild,
  typeButton,
  title,
  className,
  ...props
}: ButtonProps) {
  const colorButton = typeButton === "secondary" ? "bg-custom-red-default hover:bg-custom-red-hover" : "bg-custom-green-default hover:bg-custom-green-hover"
  return (
    <button
      className={`py-3 px-4 w-72 h-14 ${colorButton} rounded font-semibold text-zinc-100 text-sm transition-colors focus:ring-2 ring-white`}      
      {...props}
    >
      {title}
    </button>
  );
}
