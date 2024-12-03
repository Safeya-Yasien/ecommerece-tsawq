const CategoriesFilter = ({
  categories,
  selectedCategories,
  onCategoryChange,
}) => (
  <div className="flex flex-col gap-4">
    {categories.map((category) => (
      <div className="flex items-center gap-2" key={category.id}>
        <input
          type="checkbox"
          id={category.name}
          checked={selectedCategories.includes(category.name)}
          onChange={() => onCategoryChange(category.name)}
          className="w-5 h-5 cursor-pointer"
        />
        <label htmlFor={category.name} className="text-gray-700 cursor-pointer">
          {category.name}
        </label>
      </div>
    ))}
  </div>
);

export default CategoriesFilter;
