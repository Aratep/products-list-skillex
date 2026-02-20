import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "./api/fetch-data.ts";
// SCREENS
import { ProductTableScreen } from "./screens/product-table/ProductTable.screen.tsx";

function App() {
  const { data, isPending } = useQuery({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
  });

  if (isPending) return <div>loading...</div>;

  return <ProductTableScreen availableFilters={data} />;
}

export default App;
