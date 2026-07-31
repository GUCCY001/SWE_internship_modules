function ProductCard({ product, addToCart, onViewDetails }) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "12px",
          margin: "10px",
          width: "220px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "150px", objectFit: "contain" }}
        />
  
        <h4 style={{ fontSize: "14px", height: "40px", overflow: "hidden" }}>
          {product.title}
        </h4>
  
        <p style={{ fontSize: "12px", color: "#666" }}>{product.category}</p>
  
        <p>⭐ {product.rating?.rate ?? "N/A"} ({product.rating?.count ?? 0})</p>
  
        <p style={{ fontWeight: "bold" }}>${product.price}</p>
  
        <button
          onClick={(e) => {
            e.stopPropagation() // don't trigger the detail modal
            addToCart(product)
          }}
        >
          Add to Cart
        </button>
      </div>
    )
  }
  
  export default ProductCard