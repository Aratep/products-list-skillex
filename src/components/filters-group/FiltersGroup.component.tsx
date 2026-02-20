import { useState, useEffect, useRef } from "react";

// CUSTOM COMPONENTS
import { IsVisible, Select, Input } from "@/components";
// ICONS
import { FilterIcon } from "@/icons";
// TYPES
import type { FiltersGroupProps } from "@/components/types.ts";

export const FiltersGroup = ({
  filterKeys,
  filterKey,
  value,
  onChange,
  options,
  isVisible,
  onToggle,
  min,
  max,
}: FiltersGroupProps) => {
  const [filterType, setFilterType] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible, onToggle]);

  return (
    <IsVisible isVisible={Object.keys(filterKeys).includes(filterKey)}>
      <div className="filters-group">
        <FilterIcon
          onClick={() => {
            setFilterType(filterKeys[filterKey]);
            onToggle();
            setVisible(!visible);
          }}
        />
        <br />
        <IsVisible isVisible={visible}>
          <IsVisible isVisible={filterType === "select"}>
            <Select
              title="All Values"
              value={value}
              options={options}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              className="filter-item"
            />
          </IsVisible>
          <IsVisible isVisible={filterType === "input"}>
            <Input
              type="number"
              value={value ?? ""}
              onChange={(e) => {
                onChange(e ? Number(e) : undefined);
              }}
              min={min}
              max={max}
              className="filter-item"
            />
          </IsVisible>
        </IsVisible>
      </div>
    </IsVisible>
  );
};
