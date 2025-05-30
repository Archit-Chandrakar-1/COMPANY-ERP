import { ReactNode, Dispatch, SetStateAction } from "react";

const PRIMARY = "#9c0505";

type DialogProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

export function Dialog({ children, open, onOpenChange }: DialogProps) {
  if (!open) return null;
  return (
    <div onClick={() => onOpenChange(false)}>
      {children}
    </div>
  );
}

export function DialogTrigger({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return <div onClick={onClick}>{children}</div>;
}

export function DialogContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        style={{ borderColor: PRIMARY }}
        className={`bg-white rounded-lg p-6 w-full border shadow-lg ${className || ''}`}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return <h2 style={{ color: PRIMARY }} className="text-2xl font-bold mb-4">{children}</h2>;
}
