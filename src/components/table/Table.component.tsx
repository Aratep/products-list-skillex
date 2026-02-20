import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// CUSTOM COMPONENTS
import { TablePagination, FiltersGroup, LoaderIndicator } from "@/components";
// TYPES
import type { TableProps } from "@/components/types.ts";

export const Table = ({
  data,
  onFilterChange,
  filters,
  totalPages,
  isLoading,
  filterKeys,
  filterOptions,
  columns,
}: TableProps) => {
  const [visibleFilter, setVisibleFilter] = useState<string | null>(null);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageIndex: filters.page - 1,
        pageSize: filters.limit as number,
      },
    },
    manualPagination: true,
    manualFiltering: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      {isLoading && (
        <div className="table-container__overlay">
          <LoaderIndicator />
        </div>
      )}
      <table
        border={1}
        cellPadding={8}
        cellSpacing={0}
        width="100%"
        className="responsive-table"
        role="table"
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} role="row">
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} role="columnheader">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <FiltersGroup
                      filterKey={header.id}
                      filterKeys={filterKeys}
                      value={filters[header.id as keyof typeof filters]}
                      options={
                        filterOptions[header.id as keyof typeof filterOptions]
                      }
                      min={
                        (filterOptions as Record<string, any>)[header.id]?.min
                      }
                      max={
                        (filterOptions as Record<string, any>)[header.id]?.max
                      }
                      onChange={(value) =>
                        onFilterChange({
                          [header.id]: value,
                          page: 1,
                        })
                      }
                      isVisible={visibleFilter === header.id}
                      onToggle={() =>
                        setVisibleFilter((prev) =>
                          prev === header.id ? null : header.id
                        )
                      }
                    />
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  role="cell"
                  data-label={cell.column.columnDef.header as string}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        onFilterChange={onFilterChange}
        filters={filters}
        totalPages={totalPages}
      />
    </div>
  );
};
