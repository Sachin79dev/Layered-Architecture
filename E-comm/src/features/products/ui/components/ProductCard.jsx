import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="h-64 w-full bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Brand */}
        <p className="mb-1 text-sm font-medium text-gray-500">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="mb-3 truncate text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating + Price */}
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-md bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
            ⭐ {product.rating}
          </span>

          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
