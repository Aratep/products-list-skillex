import api from "@/api/api.ts";

export const fetchProducts = async (params: {
  page: number;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  limit?: number;
}) => {
  const { data } = await api.get("/products", {
    params,
  });

  return data;
};

export const fetchFilters = async () => {
  const { data } = await api.get("/filters");

  return data;
};
