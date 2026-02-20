import type { ButtonProps } from "@/components/types.ts";

export const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {text}
    </button>
  );
};
