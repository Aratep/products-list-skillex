import type { AvailableFilters } from "@/types/global-types.ts";

export function formatAvailableFilters(availableFilters: AvailableFilters) {
  return {
    category: availableFilters?.categories,
    brand: availableFilters?.brands,
    price: availableFilters?.priceRange,
    rating: availableFilters?.ratingRange,
  };
}
