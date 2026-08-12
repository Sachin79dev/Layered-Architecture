import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductsHook";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductsPage = () => {
  let { data, isPending, errors, search, setSearch } = useAllProduct();

  let {
    data: productsByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) {
    return <h1>Loading Products...</h1>;
  }

  return (
    <div>
      <div>
        <Filter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {productsByCategory?.products.length
          ? productsByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductsPage;
