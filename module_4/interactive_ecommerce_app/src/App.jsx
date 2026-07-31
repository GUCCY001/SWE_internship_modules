import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import FilterBar from "./components/FilterBar"
import ProductGrid from "./components/ProductGrid"
import CartModal from "./components/CartModal"
import ProductDetailModal from "./components/ProductDetailModal"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sortOrder, setSortOrder] = useState("none")

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const fetchProducts = () => {
    setLoading(true)
    setError(null)
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products")
        return res.json()
      })
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const increaseQty = (id) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // auto-remove at 0
    )
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // derived state — no separate "filteredProducts" state variable stored permanently
  const categories = [...new Set(products.map(p => p.category))]

  let filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p => category === "all" || p.category === category)

  if (sortOrder === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortOrder === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div>
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <div style={{ padding: "0 20px" }}>
        <FilterBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <ProductGrid
          products={filteredProducts}
          addToCart={addToCart}
          onViewDetails={setSelectedProduct}
          loading={loading}
          error={error}
          onRetry={fetchProducts}
        />
      </div>

      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </div>
  )
}

export default App