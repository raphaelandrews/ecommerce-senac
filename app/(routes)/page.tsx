import { getProducts } from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts();

  return (
    <Container>
      <div className="space-y-10 py-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="All Books" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;