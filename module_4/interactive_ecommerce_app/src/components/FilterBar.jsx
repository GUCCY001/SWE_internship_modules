function FilterBar({ search, setSearch, category, setCategory, categories, sortOrder, setSortOrder }) {
    return (
      <div style={{ display: "flex", gap: "12px", margin: "16px 0", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", flex: "1", minWidth: "200px" }}
        />
  
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
  
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">Sort by Price</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>
    )
  }
  
  export default FilterBar