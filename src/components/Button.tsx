import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  typeColor?: "primary" | "secondary";
  sizeWidth?: "50%" | "100%";
}
export function Button({
  typeColor = "primary",
  sizeWidth = "100%",
  title,
  className,
  ...props
}: ButtonProps) {
  const colorButton =
    typeColor === "secondary"
      ? "bg-custom-red-default hover:bg-custom-red-hover"
      : "bg-custom-green-default hover:bg-custom-green-hover";
  const widthButton = sizeWidth === "50%" ? "w-[9.75rem]" : "w-full";
  return (
    <button
      className={`mt-6 py-4 ${widthButton} ${colorButton} rounded font-semibold text-zinc-100 text-sm transition-colors focus:ring-2 ring-white`}
      {...props}
    >
      {title}
    </button>
  );
}
