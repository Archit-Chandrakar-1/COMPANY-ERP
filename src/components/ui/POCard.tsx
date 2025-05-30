import { ReactNode } from "react";

const PRIMARY = "#9c0505";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ borderColor: PRIMARY }}
      className="border rounded-lg shadow-md bg-white p-6"
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className || ''}`}>{children}</div>;
}
