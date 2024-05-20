import { createLazyFileRoute } from "@tanstack/react-router";
import ProductTable from "../../../components/ProductTable";
export const Route = createLazyFileRoute("/administrator/_layout/products")({
  component: Products,
});

function Products() {

  return (
    <>
      <div>
        <ProductTable />
      </div>
    </>
  );
}
