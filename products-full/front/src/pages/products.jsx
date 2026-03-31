import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Products = () => {
  const navigate = useNavigate()
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
      <div className="bg-purple-100 w-full min-h-screen">
        <div className="bg-purple-400 w-full h-20 flex items-center justify-between p-3">
            Produtos
          <button onClick={() => navigate('/productsRegister')} className="bg-purple-600 text-white w-40 h-15 rounded-2xl">
            Cadastrar produto
          </button>
        </div>
        <div className="flex flex-wrap">
          {
            products.map((product) => {
              return (
                <div className='bg-purple-200 w-80 h-70 m-5 p-5 rounded-2xl'>
                  <span>Produto: {product.name}</span>
                  <br />
                  <span>Valor: R${product.price}</span>
                  <br />
                  <span>Descrição: {product.description}</span>
                  <br />
                  <span>Estoque: {product.stock}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

