import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

export const ProductUpdate = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const { id } = useParams()

    const getProductData = async () => {
        const response = axios.get(`http://localhost:8080/api/products/product/${id}`)
        console.log(response.data)
        setName(response.data.response.name);
        setDescription(response.data.response.description);
        setPrice(response.data.response.price);
        setStock(response.data.response.stock);
        setCategory(response.data.response.category);
    }

    const updateProduct = async (_id) => {
        Swal.fire({
            title: "Deseja atualizar o produto?",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.put(`http://localhost:8080/api/products/product/${id}`, { name, description, price, stock, category })
                    Swal.fire("Atualizado com sucesso!", "", "success")
                    navigate("/Products")
                }
                catch {
                    Swal.fire("Sem alteração!", "", "error")
                }
            }
        })
    }

    useEffect(() => {
        getProductData(id)
    }, [])

    return (
        <>
            <div className="flex items-center justify-center h-full w-full">
                <div className="bg-gray-200 w-[70vw] h-[50vh] rounded-2xl shadow-2xl flex flex-col items-center justify-center mt-50">
                    <h1>Atualização de produtos</h1>
                    <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Nome" value={name} />
                    <br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Descrição" value={description} />
                    <br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Preço" value={price} />
                    <br />
                    <input type="text" onChange={(e) => setStock(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Estoque" value={stock} />
                    <br />
                    <input type="text" onChange={(e) => setCategory(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Categoria" value={category} />
                    <br />
                    <button onClick={updateProduct} className="bg-red-800 hover:bg-red-900 text-white font-bold w-[30vw] h-[4vh] rounded-xl">Atualizar</button>
                </div>
            </div>
        </>
    )
}