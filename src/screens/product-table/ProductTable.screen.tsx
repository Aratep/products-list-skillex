import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { fetchProducts } from "@/api/fetch-data.ts";
import { Table } from "@/components";
// TYPES
import type {
  ProductTableSreenProps,
  FilterStateProps,
} from "@/types/global-types.ts";
// UTILS
import { formatAvailableFilters } from "@/utils";
import { columns, filterKeys } from "./utils.tsx";

export const ProductTableScreen = ({
  availableFilters,
}: ProductTableSreenProps) => {
  const [filters, setFilters] = useState<FilterStateProps>({
    page: 1,
    category: "",
    brand: "",
    limit: 10,
  });

  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),
    placeholderData: keepPreviousData,
  });

  const onFilterChange = (newFilters: FilterStateProps) => {
    setFilters((prevFilters) => {
      const { price, rating, ...rest } = newFilters;

      return {
        ...prevFilters,
        ...rest,
        ...(price !== undefined && { minPrice: price }),
        ...(rating !== undefined && { minRating: rating }),
      };
    });
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="product-table-screen">
      <h2>Product Table with pagination and filters</h2>
      <Table
        data={data.data || []}
        columns={columns}
        onFilterChange={onFilterChange}
        filters={filters}
        totalPages={data.pagination.totalPages}
        isLoading={isFetching}
        filterOptions={formatAvailableFilters(availableFilters)}
        filterKeys={filterKeys}
      />
    </div>
  );
};
