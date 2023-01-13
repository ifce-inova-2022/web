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
  const widthButton =
    sizeWidth === "50%"
      ? "desktop:w-[9.75rem] desktop:h-[3.25rem] desktop:text-sm tablet:w-[6.5rem] tablet:h-[2.50rem] tablet:text-[11px] mobile:w-[3.75rem] mobile:h-[1.75rem] mobile:text-[8px]"
      : "w-full";
  return (
    <button
      className={`flex justify-center items-center px-6 py-3 ${widthButton} ${colorButton} rounded font-semibold text-zinc-100 transition-colors focus:ring-2 ring-white`}
      {...props}
    >
      {title}
    </button>
  );
}
