import { ReactNode, ButtonHTMLAttributes } from "react";

const PRIMARY = "#9c0505";

type ButtonProps = {
  children: ReactNode;
  size?: 'sm' | 'default';
  variant?: 'default' | 'destructive';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, size = 'default', variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{ backgroundColor: variant === 'destructive' ? '#dc2626' : PRIMARY }}
      className={`hover:bg-red-700 text-white font-semibold py-2 px-5 rounded transition ${
        size === 'sm' ? 'text-sm py-1 px-3' : ''
      }`}
    >
      {children}
    </button>
  );
}
