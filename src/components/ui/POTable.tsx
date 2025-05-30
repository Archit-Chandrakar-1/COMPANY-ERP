import { ReactNode } from "react";

const PRIMARY = "#9c0505";

export function Table({ children }: { children: ReactNode }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      {children}
    </table>
  );
}

export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead style={{ backgroundColor: PRIMARY }} className="text-white">
      {children}
    </thead>
  );
}

export function TableRow({ children }: { children: ReactNode }) {
  return (
    <tr className="border-b border-gray-300 hover:bg-red-50">
      {children}
    </tr>
  );
}

export function TableCell({ children }: { children: ReactNode }) {
  return <td className="p-3 border border-gray-300">{children}</td>;
}

export function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}
