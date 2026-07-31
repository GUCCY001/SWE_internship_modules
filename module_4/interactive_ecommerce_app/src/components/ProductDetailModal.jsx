function ProductDetailModal({ product, onClose, addToCart }) {
    if (!product) return null
  
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          background: "white",
          padding: "24px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%"
        }}>
          <button onClick={onClose} style={{ float: "right" }}>✕</button>
          <img src={product.image} alt={product.title} style={{ height: "180px" }} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    )
  }
  
  export default ProductDetailModal