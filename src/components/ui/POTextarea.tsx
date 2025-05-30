import { TextareaHTMLAttributes } from "react";

const PRIMARY = "#9c0505";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      style={{ borderColor: PRIMARY }}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
    />
  );
}
