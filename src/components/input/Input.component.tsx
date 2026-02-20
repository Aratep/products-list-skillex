import { useEffect, useState } from "react";
// TYPES;
import type { InputProps } from "@/components/types.ts";

export const Input = ({
  value,
  onChange,
  type = "number",
  min,
  max,
  delay = 700,
  className,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState<string>(String(value));

  useEffect(() => {
    setInternalValue(String(value));
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (type === "number") {
        let numericValue = Number(internalValue);

        if (!isNaN(numericValue)) {
          if (min !== undefined) numericValue = Math.max(min, numericValue);
          if (max !== undefined) numericValue = Math.min(max, numericValue);

          onChange(numericValue);
        }
      } else {
        onChange(internalValue);
      }
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [internalValue, delay, min, max, type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === "") {
      setInternalValue("");
      return;
    }

    setInternalValue(val);
  };

  return (
    <input
      className={className}
      value={internalValue}
      onChange={handleChange}
      type={type}
      min={min}
      max={max}
    />
  );
};
