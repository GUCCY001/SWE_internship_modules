import ProductCard from "./ProductCard"

function ProductGrid({ products, addToCart, onViewDetails, loading, error, onRetry }) {
  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return (
      <div style={{ color: "red" }}>
        <p>Something went wrong: {error}</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    )
  }

  if (products.length === 0) {
    return <p>No products match your search.</p>
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}

export default ProductGrid