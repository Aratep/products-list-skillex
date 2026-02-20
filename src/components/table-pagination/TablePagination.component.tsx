import { Select, Button } from "@/components";
// TYPES
import type { TablePaginationProps } from "@/components/types.ts";

export const TablePagination = ({
  onFilterChange,
  filters,
  totalPages,
}: TablePaginationProps) => {
  return (
    <div className="table-pagination">
      <Button
        text="Prev"
        onClick={() => {
          if (filters.page > 1) {
            onFilterChange({ page: filters.page - 1 });
          }
        }}
        disabled={filters.page === 1}
      />

      <span>
        Page {filters.page} of {totalPages}
      </span>
      <Button
        text="Next"
        onClick={() => {
          onFilterChange({ page: filters.page + 1 });
        }}
        disabled={filters.page >= totalPages}
      />

      <Select
        onChange={(e) => {
          onFilterChange({
            limit: Number(e.target.value),
            page: 1,
          });
        }}
        value={filters.limit}
        options={[5, 10, 20]}
        hasDefValue={false}
        className="pagination-select"
      />
    </div>
  );
};
