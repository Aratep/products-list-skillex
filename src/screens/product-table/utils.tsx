import type { FiltersKeysProps } from "@/types/global-types.ts";

export const columns = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }: { row: any }) => (
      <img src={row.original.imageUrl} width={50} alt={row.original.name} />
    ),
  },
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "category",
    header: "Category",
  },
  { accessorKey: "brand", header: "Brand" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "rating", header: "Rating" },
];

export const filterKeys: FiltersKeysProps = {
  category: "select",
  brand: "select",
  price: "input",
  rating: "input",
};
