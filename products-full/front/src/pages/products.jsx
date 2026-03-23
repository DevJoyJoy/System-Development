import { useState, useEffect } from "react"
import axios from 'axios'

export const Products = () => {
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
          <div className='bg-purple-200 w-80 h-70 m-5 p-5'>
            <span>Produto: {product.name}</span>
            <br />
            <span>Valor: R${product.price}</span>
            <br />
            <span>Descrição: {product.description}</span>
            <br />
            <span>Estoque: {product.stock}</span>
          </div>
        </div>)
      })
     }
    </>
  )
}

