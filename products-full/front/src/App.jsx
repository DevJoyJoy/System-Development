import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/products/products')
    setProducts(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
     {
      products.map((product) => {
        return (
        <div className='bg-purple-400'>
          <div className='bg-purple-200 w-100 h-70 p-3 m-5'>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        </div>)
      })
     }
    </>
  )
}

export default App
