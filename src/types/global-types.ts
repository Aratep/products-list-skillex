export type FiltersKeysProps = Record<string, "select" | "input">;

export type AvailableFilters = {
  brands: string[];
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  ratingRange: {
    min: number;
    max: number;
  };
};

export type ProductTableSreenProps = {
  availableFilters: AvailableFilters;
};

export type FilterStateProps = {
  page: number;
  category?: string;
  brand?: string;
  limit?: number;
  price?: string | number;
  rating?: number | string;
};
