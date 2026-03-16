import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/products/products')
    setProducts(response.data.products)
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <>
     {
      products.map((product) => {
        return (
        <div>
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>)
      })
     }
    </>
  )
}

export default App
