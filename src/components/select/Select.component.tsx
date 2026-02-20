import type { SelectProps } from "@/components/types.ts";
// COMPONENTS
import { IsVisible } from "@/components";

export const Select = ({
  onChange,
  value,
  options,
  title,
  hasDefValue = true,
  className,
}: SelectProps) => {
  return (
    <select onChange={onChange} value={value} className={className}>
      <IsVisible isVisible={hasDefValue}>
        <option value="">{title}</option>
      </IsVisible>
      {options &&
        options.map((opt: string | number) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
    </select>
  );
};
