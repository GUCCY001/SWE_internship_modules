function CartModal({ cart, isOpen, onClose, increaseQty, decreaseQty, removeItem }) {
    if (!isOpen) return null
  
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
    return (
      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "320px",
        height: "100%",
        background: "white",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
        padding: "20px",
        overflowY: "auto"
      }}>
        <button onClick={onClose} style={{ float: "right" }}>✕</button>
        <h3>Your Cart</h3>
  
        {cart.length === 0 && <p>Your cart is empty.</p>}
  
        {cart.map(item => (
          <div key={item.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
            <p style={{ fontWeight: "bold" }}>{item.title}</p>
            <p>${item.price} x {item.quantity}</p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
  
        {cart.length > 0 && (
          <div style={{ marginTop: "16px" }}>
            <p style={{ fontWeight: "bold" }}>Subtotal: ${subtotal.toFixed(2)}</p>
            <button>Checkout</button>
          </div>
        )}
      </div>
    )
  }
  
  export default CartModal