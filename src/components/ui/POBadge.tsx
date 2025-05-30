// components/ui/badge.tsx
import React from "react";

const PRIMARY = "#9c0505";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{ backgroundColor: PRIMARY }}
      className="inline-block text-white text-xs font-semibold px-2 py-1 rounded"
    >
      {children}
    </span>
  );
}
