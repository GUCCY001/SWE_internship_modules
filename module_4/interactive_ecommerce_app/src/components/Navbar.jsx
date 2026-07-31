function Navbar({ cartCount, onCartClick }) {
    return (
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        borderBottom: "1px solid #ddd"
      }}>
        <h2>🛍️ My Store</h2>
        <button onClick={onCartClick}>
          🛒 Cart ({cartCount})
        </button>
      </nav>
    )
  }
  
  export default Navbar