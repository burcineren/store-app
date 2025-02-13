import ProductsContainer from "@/components/products/ProductsContainer";

interface ProductsPageProps {
  searchParams: Promise<{
    layout?: string;
    search?: string;
  }>;
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  // Await the searchParams promise
  const params = await searchParams;
  const layout = params.layout || "grid";
  const search = params.search || "";
  console.log("searchParams:::", params);
  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
