// components/ui/input.tsx
import { InputHTMLAttributes } from "react";

const PRIMARY = "#9c0505";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{ borderColor: PRIMARY }}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
    />
  );
}
