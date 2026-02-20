import type { ChangeEvent } from "react";
import type {
  FiltersKeysProps,
  FilterStateProps,
} from "@/types/global-types.ts";

export type SelectProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | undefined;
  options: string[] | number[] | undefined;
  title?: string;
  hasDefValue?: boolean;
  className?: string;
};

export type TablePaginationProps = {
  onFilterChange: (e: FilterStateProps) => void;
  filters: FilterStateProps;
  totalPages: number;
};

export type IsVisibleProps = {
  children: React.ReactNode;
  isVisible: boolean | undefined;
};

export type FiltersGroupProps = {
  filterKeys: FiltersKeysProps;
  filterKey: string;
  value: string | number | undefined;
  onChange: (e: unknown) => void;
  options: string[] | number[] | undefined;
  onToggle: () => void;
  isVisible: boolean;
  min: number;
  max: number;
};

export type InputProps = {
  value: string | number;
  onChange: (e: string | number) => void;
  type?: string;
  min?: number;
  max?: number;
  delay?: number;
  className?: string;
};

export type TableProps = {
  data: [];
  onFilterChange: (e: FilterStateProps) => void;
  totalPages: number;
  isLoading: boolean;
  filterKeys: FiltersKeysProps;
  filterOptions: object;
  filters: FilterStateProps;
  columns: any[];
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled: boolean;
};
