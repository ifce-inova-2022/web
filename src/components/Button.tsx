import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  asChild?: boolean;
  typeColor: string;
  title: string;
  sizeWidth: "50%" | "100%";
}
export function Button({
  children,
  asChild,
  typeColor,
  sizeWidth,
  title,
  className,
  ...props
}: ButtonProps) {
  const colorButton =
  typeColor === "secondary"
      ? "bg-custom-red-default hover:bg-custom-red-hover"
      : "bg-custom-green-default hover:bg-custom-green-hover";
  const widthButton = sizeWidth === "50%" ? "w-[9.75rem]" : "w-full"
  return (
    <button
      className={`mt-10 py-3 px-4 ${widthButton} h-14 ${colorButton} rounded font-semibold text-zinc-100 text-sm transition-colors focus:ring-2 ring-white`}
      {...props}
    >
      {title}
    </button>
  );
}
