import {
  useAllCategories,
  useProductByCategory,
} from "../../hooks/useProductsHook";

const Filter = ({ search, setSearch, category, setCategory }) => {
  let { data, isPending, error } = useAllCategories();

  if (isPending) {
    return <h1>Loading Categories...</h1>;
  }

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Search - Left Side */}
      <div className="w-full md:max-w-md">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Category - Right Side */}
      <div className="w-full md:w-64">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        >
          <option value="all">All Categories</option>

          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
